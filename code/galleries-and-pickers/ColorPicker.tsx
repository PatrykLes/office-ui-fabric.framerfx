import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { colors } from "../canvas";
import { withHOC } from "../utils/withHOC";

const InnerColorPicker = props => {
  return <System.ColorPicker {...props} />;
};

export const ColorPicker = withHOC(InnerColorPicker);

ColorPicker.defaultProps = {
  width: 286,
  height: 361
};

addPropertyControls(ColorPicker, {
  color: {
    title: "Color",
    type: ControlType.Color,
    defaultValue: colors["exchange.primary"]
  },
  alphaSliderHidden: {
    title: "AlphaSliderHidden",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hexLabel: {
    title: "Hex Label",
    defaultValue: "Hex",
    type: ControlType.String
  },
  redLabel: {
    title: "Red Label",
    defaultValue: "Red",
    type: ControlType.String
  },
  greenLabel: {
    title: "Green Label",
    defaultValue: "Green",
    type: ControlType.String
  },
  blueLabel: {
    title: "Blue Label",
    defaultValue: "Blue",
    type: ControlType.String
  },
  alphaLabel: {
    title: "Alpha Label",
    defaultValue: "Alpha",
    type: ControlType.String
  }
});
