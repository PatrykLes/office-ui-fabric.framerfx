import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { parseEnumAsPropertyControl } from "../utils/propertyControls";
import { PersonaPresence } from "office-ui-fabric-react";

const InnerPersonaCoin: React.SFC<any> = ({ width, height, ...props }) => {
  const coinSize = Math.min(width, height);
  return (
    <System.PersonaCoin
      {...props}
      presence={parseInt(props.presence, 10)}
      coinSize={coinSize}
    />
  );
};

export const PersonaCoin = withHOC(InnerPersonaCoin);

PersonaCoin.defaultProps = {
  width: 90,
  height: 90,
  imageShouldStartVisible: true,
  imageShouldFadeIn: true
};

addPropertyControls(PersonaCoin, {
  text: { title: "Text", defaultValue: "John Doe", type: ControlType.String },
  imageUrl: {
    title: "ImageUrl",
    defaultValue:
      "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png",
    type: ControlType.String
  },
  initialsColor: {
    title: "InitialsColor",
    type: ControlType.Color
  },
  presence: parseEnumAsPropertyControl(
    "Presence",
    PersonaPresence,
    PersonaPresence.online
  ),
  isOutOfOffice: {
    title: "IsOutOfOffice",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
