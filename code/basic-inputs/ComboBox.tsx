import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerComboBox: React.SFC = props => {
  return (
    <System.ComboBox
      {...props}
      options={props.options.map(option => ({
        key: option,
        text: option
      }))}
      autoComplete={props.autoComplete ? "on" : "off"}
    />
  );
};

export const ComboBox = withHOC(InnerComboBox);

ComboBox.defaultProps = {
  width: 200,
  height: 66
};

addPropertyControls(ComboBox, {
  label: { title: "Label", defaultValue: "ComboBox", type: ControlType.String },
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
  defaultSelectedKey: {
    title: "DefaultSelectedKey",
    defaultValue: "",
    type: ControlType.String
  },
  openOnKeyboardFocus: {
    title: "OpenOnKeyboardFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  selectedKey: {
    title: "SelectedKey",
    defaultValue: "",
    type: ControlType.String
  }
});
