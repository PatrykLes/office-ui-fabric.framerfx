import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { compose } from "../utils/compose";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";

/**
 * As the Dropdown component uses 2 different values keys depending on whether multiSelect is enabled,
 * we have to use the same value property in the state manager and pass that down to the relevant property
 * on the component itself. We also need some logic inside onChange to differentiate what should be sent
 * to props.onChange if multiSelect is enabled/disabled.
 */
const InnerDropdown: React.SFC = ({ selectedKey, selectedKeys, ...props }) => {
  const onChange = React.useCallback(
    (e, option) => {
      if (!props.multiSelect) {
        props.onChange(option.key);
      } else {
        let value = [...(selectedKey || [])];
        if (value.indexOf(option.key) === -1) {
          value.push(option.key);
        } else {
          value = value.filter(key => key !== option.key);
        }
        props.onChange(value);
      }
    },
    [props.onChange, selectedKey, props.multiSelect]
  );

  /**
   * We need to conditionally set these properties as Fabric UI will throw warnings if
   * selectedKey & selectedKeys are both defined, regardless of their value.
   */
  const destructuredProps = {};
  if (props.multiSelect) {
    destructuredProps.selectedKeys = selectedKey;
  } else {
    destructuredProps.selectedKey = selectedKey;
  }

  return (
    <System.Dropdown
      {...props}
      {...destructuredProps}
      onChange={onChange}
      options={props.options.map(option => ({
        key: option,
        text: option
      }))}
    />
  );
};

export const Dropdown = compose(
  withHOC,
  withManagedState
)(InnerDropdown);

Dropdown.defaultProps = {
  width: 150,
  height: 60,
  valuePropName: "selectedKey"
};

addPropertyControls(Dropdown, {
  label: { title: "Label", defaultValue: "Dropdown", type: ControlType.String },
  selectedKey: {
    title: "SelectedKey",
    defaultValue: "",
    type: ControlType.String
  },
  errorMessage: {
    title: "ErrorMessage",
    defaultValue: "",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "Select an option",
    type: ControlType.String
  },
  multiSelect: {
    title: "MultiSelect",
    defaultValue: false,
    type: ControlType.Boolean
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
  dropdownWidth: {
    title: "DropdownWidth",
    type: ControlType.Number,
    defaultValue: Dropdown.defaultProps.width
  },
  openOnKeyboardFocus: {
    title: "OpenOnKeyboardFocus",
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
  ...WithManagedStatePropertyControls
});
