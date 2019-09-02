import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSliderBase: React.SFC = props => {
  return <System.SliderBase {...props} style={style} />;
};

export const SliderBase = withHOC(InnerSliderBase);

SliderBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SliderBase, {
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  defaultValue: { title: "DefaultValue", type: ControlType.Number },
  value: { title: "Value", type: ControlType.Number },
  min: { title: "Min", type: ControlType.Number },
  max: { title: "Max", type: ControlType.Number },
  step: { title: "Step", type: ControlType.Number },
  showValue: {
    title: "ShowValue",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  vertical: {
    title: "Vertical",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  snapToStep: {
    title: "SnapToStep",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  originFromZero: {
    title: "OriginFromZero",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
