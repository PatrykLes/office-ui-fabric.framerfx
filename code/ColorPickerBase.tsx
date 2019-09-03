import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerColorPickerBase: React.SFC = props => {
  return <System.ColorPickerBase {...props} style={style} />;
};

export const ColorPickerBase = withHOC(InnerColorPickerBase);

ColorPickerBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ColorPickerBase, {
  color: { title: "Color", defaultValue: "", type: ControlType.String },
  alphaSliderHidden: {
    title: "AlphaSliderHidden",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hexLabel: { title: "HexLabel", defaultValue: "", type: ControlType.String },
  redLabel: { title: "RedLabel", defaultValue: "", type: ControlType.String },
  greenLabel: {
    title: "GreenLabel",
    defaultValue: "",
    type: ControlType.String
  },
  blueLabel: { title: "BlueLabel", defaultValue: "", type: ControlType.String },
  alphaLabel: {
    title: "AlphaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
