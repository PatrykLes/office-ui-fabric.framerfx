import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDropdownBase: React.SFC = props => {
  return <System.DropdownBase {...props} style={style} />;
};

export const DropdownBase = withHOC(InnerDropdownBase);

DropdownBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DropdownBase, {
  placeHolder: {
    title: "PlaceHolder",
    defaultValue: "",
    type: ControlType.String
  },
  dropdownWidth: { title: "DropdownWidth", type: ControlType.Number },
  responsiveMode: { title: "ResponsiveMode", type: ControlType.Number },
  multiSelect: {
    title: "MultiSelect",
    defaultValue: false,
    type: ControlType.Boolean
  },
  multiSelectDelimiter: {
    title: "MultiSelectDelimiter",
    defaultValue: "",
    type: ControlType.String
  },
  notifyOnReselect: {
    title: "NotifyOnReselect",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isDisabled: {
    title: "IsDisabled",
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
