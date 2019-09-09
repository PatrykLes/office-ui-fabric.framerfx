import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { compose } from "../utils/compose";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { withHOC } from "../utils/withHOC";
import { centeredChildStyles } from "../utils/CenteredWrapper";

const InnerTextField: React.SFC<any> = ({
  ["children"]: _,
  prefix,
  suffix,
  ...props
}) => {
  const onChange = React.useCallback((e, value) => props.onChange(value), [
    props.onChange
  ]);
  return (
    <System.TextField
      {...props}
      styles={{ root: { width: "100%" } }}
      onChange={onChange}
      prefix={prefix || undefined}
      suffix={suffix || undefined}
    />
  );
};

export const TextField = compose(
  withHOC,
  withManagedState
)(InnerTextField);

TextField.defaultProps = {
  width: 150,
  height: 50,
  valuePropName: "value"
};

addPropertyControls(TextField, {
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "placeholder",
    type: ControlType.String
  },
  description: {
    title: "Description",
    defaultValue: "",
    type: ControlType.String
  },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  multiline: {
    title: "Multiline",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  underlined: {
    title: "Underlined",
    defaultValue: false,
    type: ControlType.Boolean
  },

  prefix: { title: "Prefix", type: ControlType.String },
  suffix: { title: "Suffix", type: ControlType.String },

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

  ...WithManagedStatePropertyControls
});
