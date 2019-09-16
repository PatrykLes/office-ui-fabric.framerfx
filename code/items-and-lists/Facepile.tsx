import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { centeredChildStyles } from "../utils/CenteredWrapper";

const InnerFacepile: React.SFC<any> = ({ personas, ...props }) => {
  return (
    <System.Facepile
      personas={personas.map(url => ({ imageUrl: url }))}
      {...props}
      styles={{ root: centeredChildStyles }}
    />
  );
};

export const Facepile = withHOC(InnerFacepile);

Facepile.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Facepile, {
  maxDisplayablePersonas: {
    title: "MaxDisplayablePersonas",
    type: ControlType.Number,
    defaultValue: 3,
    min: 1,
    max: 50,
    displayStepper: true
  },
  personaSize: {
    title: "PersonaSize",
    type: ControlType.Number,
    min: 1,
    max: 6,
    defaultValue: 2,
    displayStepper: true
  },
  personas: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String,
      defaultValue: "https://api.adorable.io/avatars/285/0@adorable.io.png"
    },
    defaultValue: [
      "https://api.adorable.io/avatars/285/0@adorable.io.png",
      "https://api.adorable.io/avatars/285/1@adorable.io.png",
      "https://api.adorable.io/avatars/285/2@adorable.io.png",
      "https://api.adorable.io/avatars/285/3@adorable.io.png",
      "https://api.adorable.io/avatars/285/4@adorable.io.png",
      "https://api.adorable.io/avatars/285/5@adorable.io.png",
      "https://api.adorable.io/avatars/285/6@adorable.io.png"
    ]
  },
  showAddButton: {
    title: "ShowAddButton",
    defaultValue: true,
    type: ControlType.Boolean
  },
  overflowButtonType: {
    title: "OverflowButtonType",
    type: ControlType.Number,
    min: 1,
    max: 3,
    displayStepper: true,
    defaultValue: 1
  }
});
