import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { compose } from "../utils/compose";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";

const InnerComboBox: React.SFC = props => {
  const onChange = React.useCallback(
    (e, option) => props.onChange(option.key),
    [props.onChange]
  );
  return (
    <System.ComboBox
      {...props}
      onChange={onChange}
      options={props.options.map(option => ({
        key: option,
        text: option
      }))}
      autoComplete={props.autoComplete ? "on" : "off"}
    />
  );
};

export const ComboBox = compose(
  withHOC,
  withManagedState
)(InnerComboBox);

ComboBox.defaultProps = {
  width: 200,
  height: 66,
  valuePropName: "selectedKey"
};

addPropertyControls(ComboBox, {
  label: { title: "Label", defaultValue: "ComboBox", type: ControlType.String },
  selectedKey: {
    title: "SelectedKey",
    defaultValue: "",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  },
  errorMessage: {
    title: "ErrorMessage",
    defaultValue: "",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
  autoComplete: {
    title: "AutoComplete",
    defaultValue: true,
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
  multiSelect: {
    title: "MultiSelect",
    defaultValue: false,
    type: ControlType.Boolean
  },
  allowFreeform: {
    title: "AllowFreeform",
    defaultValue: false,
    type: ControlType.Boolean
  },
  text: {
    title: "Text",
    defaultValue: "",
    type: ControlType.String,
    hidden: props => !props.allowFreeform
  },
  scrollSelectedToTop: {
    title: "ScrollSelectedToTop",
    defaultValue: false,
    type: ControlType.Boolean
  },
  useComboBoxAsMenuWidth: {
    title: "UseComboBoxAsMenuWidth",
    defaultValue: true,
    type: ControlType.Boolean
  },
  dropdownWidth: { title: "DropdownWidth", type: ControlType.Number },
  dropdownMaxWidth: { title: "DropdownMaxWidth", type: ControlType.Number },
  shouldRestoreFocus: {
    title: "ShouldRestoreFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  openOnKeyboardFocus: {
    title: "OpenOnKeyboardFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ...WithManagedStatePropertyControls
});
