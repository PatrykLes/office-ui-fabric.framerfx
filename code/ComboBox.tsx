import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerComboBox: React.SFC = props => {
  return <System.ComboBox {...props} style={style} />;
};

export const ComboBox = withHOC(InnerComboBox);

ComboBox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ComboBox, {
  allowFreeform: {
    title: "AllowFreeform",
    defaultValue: false,
    type: ControlType.Boolean
  },
  autoComplete: {
    title: "AutoComplete",
    options: ["on", "off"],
    optionTitles: ["On", "Off"],
    defaultValue: "on",
    type: ControlType.Enum
  },
  text: { title: "Text", defaultValue: "", type: ControlType.String },
  scrollSelectedToTop: {
    title: "ScrollSelectedToTop",
    defaultValue: false,
    type: ControlType.Boolean
  },
  dropdownWidth: { title: "DropdownWidth", type: ControlType.Number },
  useComboBoxAsMenuWidth: {
    title: "UseComboBoxAsMenuWidth",
    defaultValue: false,
    type: ControlType.Boolean
  },
  dropdownMaxWidth: { title: "DropdownMaxWidth", type: ControlType.Number },
  multiSelect: {
    title: "MultiSelect",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isButtonAriaHidden: {
    title: "IsButtonAriaHidden",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ariaDescribedBy: {
    title: "AriaDescribedBy",
    defaultValue: "",
    type: ControlType.String
  },
  persistMenu: {
    title: "PersistMenu",
    defaultValue: false,
    type: ControlType.Boolean
  },
  shouldRestoreFocus: {
    title: "ShouldRestoreFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
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
  errorMessage: {
    title: "ErrorMessage",
    defaultValue: "",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  },
  openOnKeyboardFocus: {
    title: "OpenOnKeyboardFocus",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
