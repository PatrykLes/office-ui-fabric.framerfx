import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";
import { compose } from "../utils/compose";
import { withManagedState } from "../utils/stateManagement/withManagedState";

const InnerToggle: React.SFC = props => {
  const onChange = React.useCallback((e, checked) => props.onChange(checked), [
    props.onChange
  ]);
  return <System.Toggle {...props} onChange={onChange} />;
};

export const Toggle = compose(
  withHOC,
  withManagedState
)(InnerToggle);

Toggle.defaultProps = {
  width: 132,
  height: 58,
  valuePropName: "checked"
};

addPropertyControls(Toggle, {
  label: { title: "Label", defaultValue: "Toggle", type: ControlType.String },
  onText: { title: "OnText", defaultValue: "On", type: ControlType.String },
  offText: { title: "OffText", defaultValue: "Off", type: ControlType.String },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  inlineLabel: {
    title: "InlineLabel",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ...WithManagedStatePropertyControls
});
