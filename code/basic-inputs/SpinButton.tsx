import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSpinButton: React.SFC = props => {
  return <System.SpinButton {...props} style={style} />;
};

export const SpinButton = withHOC(InnerSpinButton);

SpinButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SpinButton, {
  defaultValue: {
    title: "DefaultValue",
    defaultValue: "",
    type: ControlType.String
  },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  min: { title: "Min", type: ControlType.Number },
  max: { title: "Max", type: ControlType.Number },
  step: { title: "Step", type: ControlType.Number },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  ariaDescribedBy: {
    title: "AriaDescribedBy",
    defaultValue: "",
    type: ControlType.String
  },
  title: { title: "Title", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  labelPosition: { title: "LabelPosition", type: ControlType.Number },
  incrementButtonAriaLabel: {
    title: "IncrementButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  decrementButtonAriaLabel: {
    title: "DecrementButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  precision: { title: "Precision", type: ControlType.Number },
  ariaPositionInSet: { title: "AriaPositionInSet", type: ControlType.Number },
  ariaSetSize: { title: "AriaSetSize", type: ControlType.Number },
  ariaValueNow: { title: "AriaValueNow", type: ControlType.Number },
  ariaValueText: {
    title: "AriaValueText",
    defaultValue: "",
    type: ControlType.String
  }
});
