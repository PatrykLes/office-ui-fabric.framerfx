import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { colors } from "../canvas";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPersona: React.SFC = props => {
  return <System.Persona {...props} style={style} />;
};

export const Persona = withHOC(InnerPersona);

Persona.defaultProps = {
  width: 270,
  height: 120,
  imageShouldStartVisible: true
};

addPropertyControls(Persona, {
  text: { title: "Name", defaultValue: "John Doe", type: ControlType.String },
  size: {
    title: "Size",
    type: ControlType.Number,
    min: 1,
    max: 6,
    defaultValue: 5,
    displayStepper: true
  },
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
  presence: {
    title: "Presence",
    type: ControlType.Number,
    min: 1,
    max: 5,
    defaultValue: 4,
    displayStepper: true
  },
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
