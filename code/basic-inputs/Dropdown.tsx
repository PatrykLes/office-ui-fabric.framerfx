import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerDropdown: React.SFC = props => {
  return (
    <System.Dropdown
      {...props}
      options={props.options.map(option => ({
        key: option,
        text: option
      }))}
    />
  );
};

export const Dropdown = withHOC(InnerDropdown);

Dropdown.defaultProps = {
  width: 150,
  height: 60
};

addPropertyControls(Dropdown, {
  label: { title: "Label", defaultValue: "Dropdown", type: ControlType.String },
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
  dropdownWidth: { title: "DropdownWidth", type: ControlType.Number },
  defaultSelectedKey: {
    title: "DefaultSelectedKey",
    defaultValue: "",
    type: ControlType.String
  },
  selectedKey: {
    title: "SelectedKey",
    defaultValue: "",
    type: ControlType.String
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
  }
});
