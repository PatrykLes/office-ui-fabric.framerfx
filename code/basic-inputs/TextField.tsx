import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTextField: React.SFC<any> = ({
  ["children"]: _,
  prefix,
  suffix,
  ...props
}) => {
  return (
    <System.TextField
      {...props}
      prefix={prefix || undefined}
      suffix={suffix || undefined}
      style={style}
    />
  );
};

export const TextField = withHOC(InnerTextField);

TextField.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TextField, {
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
  prefix: { title: "Prefix", type: ControlType.String },
  suffix: { title: "Suffix", type: ControlType.String },
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
  mask: { title: "Mask", defaultValue: "", type: ControlType.String },
  maskChar: { title: "MaskChar", defaultValue: "", type: ControlType.String },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
