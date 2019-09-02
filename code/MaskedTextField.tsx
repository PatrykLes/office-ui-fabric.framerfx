import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMaskedTextField: React.SFC = props => {
  return <System.MaskedTextField {...props} style={style} />;
};

export const MaskedTextField = withHOC(InnerMaskedTextField);

MaskedTextField.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MaskedTextField, {
  multiline: {
    title: "Multiline",
    defaultValue: false,
    type: ControlType.Boolean
  },
  resizable: {
    title: "Resizable",
    defaultValue: false,
    type: ControlType.Boolean
  },
  autoAdjustHeight: {
    title: "AutoAdjustHeight",
    defaultValue: false,
    type: ControlType.Boolean
  },
  underlined: {
    title: "Underlined",
    defaultValue: false,
    type: ControlType.Boolean
  },
  borderless: {
    title: "Borderless",
    defaultValue: false,
    type: ControlType.Boolean
  },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  description: {
    title: "Description",
    defaultValue: "",
    type: ControlType.String
  },
  prefix: { title: "Prefix", defaultValue: "", type: ControlType.String },
  suffix: { title: "Suffix", defaultValue: "", type: ControlType.String },
  defaultValue: {
    title: "DefaultValue",
    defaultValue: "",
    type: ControlType.String
  },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  readOnly: {
    title: "ReadOnly",
    defaultValue: false,
    type: ControlType.Boolean
  },
  errorMessage: {
    title: "ErrorMessage",
    defaultValue: "",
    type: ControlType.String
  },
  deferredValidationTime: {
    title: "DeferredValidationTime",
    type: ControlType.Number
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  inputClassName: {
    title: "InputClassName",
    defaultValue: "",
    type: ControlType.String
  },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  validateOnFocusIn: {
    title: "ValidateOnFocusIn",
    defaultValue: false,
    type: ControlType.Boolean
  },
  validateOnFocusOut: {
    title: "ValidateOnFocusOut",
    defaultValue: false,
    type: ControlType.Boolean
  },
  validateOnLoad: {
    title: "ValidateOnLoad",
    defaultValue: false,
    type: ControlType.Boolean
  },
  autoComplete: {
    title: "AutoComplete",
    defaultValue: "",
    type: ControlType.String
  },
  mask: { title: "Mask", defaultValue: "", type: ControlType.String },
  maskChar: { title: "MaskChar", defaultValue: "", type: ControlType.String },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
