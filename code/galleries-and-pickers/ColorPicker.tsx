import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerColorPicker: React.SFC = props => {
  return <System.ColorPicker {...props} />;
};

export const ColorPicker = withHOC(InnerColorPicker);

ColorPicker.defaultProps = {
  width: 286,
  height: 361
};

addPropertyControls(ColorPicker, {
  color: { title: "Color", defaultValue: "", type: ControlType.String },
  alphaSliderHidden: {
    title: "AlphaSliderHidden",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hexLabel: {
    title: "HexLabel",
    defaultValue: "Hex",
    type: ControlType.String
  },
  redLabel: {
    title: "RedLabel",
    defaultValue: "Red",
    type: ControlType.String
  },
  greenLabel: {
    title: "GreenLabel",
    defaultValue: "Green",
    type: ControlType.String
  },
  blueLabel: {
    title: "BlueLabel",
    defaultValue: "Blue",
    type: ControlType.String
  },
  alphaLabel: {
    title: "AlphaLabel",
    defaultValue: "Alpha",
    type: ControlType.String
  }
});
