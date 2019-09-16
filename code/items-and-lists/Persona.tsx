import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { colors } from "../canvas";
import { parseEnumAsPropertyControl } from "../utils/propertyControls";
import { PersonaSize, PersonaPresence } from "office-ui-fabric-react";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPersona: React.SFC = props => {
  return (
    <System.Persona
      {...props}
      presence={parseInt(props.presence, 10)}
      style={style}
    />
  );
};

export const Persona = withHOC(InnerPersona);

Persona.defaultProps = {
  width: 270,
  height: 120,
  imageShouldStartVisible: true
};

addPropertyControls(Persona, {
  text: { title: "Name", defaultValue: "John Doe", type: ControlType.String },
  size: parseEnumAsPropertyControl("Size", PersonaSize, PersonaSize.large),
  imageUrl: {
    title: "ImageUrl",
    defaultValue:
      "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png",
    type: ControlType.String
  },
  initialsColor: {
    title: "InitialsColor",
    defaultValue: colors["exchange.primary"],
    type: ControlType.Color,
    hidden(props) {
      return !!props["imageUrl"];
    }
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
  },
  secondaryText: {
    title: "SecondaryText",
    defaultValue: "Software Engineer",
    type: ControlType.String
  },
  tertiaryText: {
    title: "TertiaryText",
    defaultValue: "In a meeting",
    type: ControlType.String,
    hidden(props) {
      return props["size"] < 4;
    }
  }
});
