import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerPersonaCoin: React.SFC<any> = ({ width, height, ...props }) => {
  const coinSize = Math.min(width, height);
  return <System.PersonaCoin {...props} coinSize={coinSize} />;
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
    defaultValue: "",
    type: ControlType.String
  },
  presence: {
    title: "Presence",
    type: ControlType.Number,
    defaultValue: 2,
    min: 0,
    max: 4,
    displayStepper: true
  },
  isOutOfOffice: {
    title: "IsOutOfOffice",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
