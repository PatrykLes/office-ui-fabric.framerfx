import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { compose } from "../utils/compose";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";

const InnerCheckbox: React.SFC = props => {
  const onChange = React.useCallback((e, checked) => props.onChange(checked), [
    props.onChange
  ]);
  return <System.Checkbox {...props} onChange={onChange} />;
};

export const Checkbox = compose(
  withHOC,
  withManagedState
)(InnerCheckbox);

Checkbox.defaultProps = {
  width: 150,
  height: 23,
  valuePropName: "checked"
};

addPropertyControls(Checkbox, {
  label: {
    title: "Label",
    defaultValue: "Standard Checkbox",
    type: ControlType.String
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  boxSide: {
    title: "BoxSide",
    options: ["start", "end"],
    optionTitles: ["Start", "End"],
    defaultValue: "start",
    type: ControlType.SegmentedEnum
  },
  indeterminate: {
    title: "Indeterminate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ...WithManagedStatePropertyControls
});
