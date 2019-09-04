import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { compose } from "../utils/compose";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";

const InnerChoiceGroup: React.SFC = props => {
  const onChange = React.useCallback(
    (e, option) => props.onChange(option.key),
    [props.onChange]
  );
  return (
    <System.ChoiceGroup
      {...props}
      onChange={onChange}
      options={props.options.map(option => ({
        key: option,
        text: option
      }))}
    />
  );
};

export const ChoiceGroup = compose(
  withHOC,
  withManagedState
)(InnerChoiceGroup);

ChoiceGroup.defaultProps = {
  width: 90,
  height: 100,
  valuePropName: "selectedKey"
};

addPropertyControls(ChoiceGroup, {
  selectedKey: {
    title: "SelectedKey",
    defaultValue: "Option A",
    type: ControlType.String
  },
  label: { title: "Label", defaultValue: "Pick one", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  options: {
    title: "Options",
    type: ControlType.Array,
    defaultValue: ["Option A", "Option B"],
    propertyControl: {
      type: ControlType.String
    }
  },
  required: {
    title: "Required",
    type: ControlType.Boolean,
    defaultValue: false
  },
  ...WithManagedStatePropertyControls
});
