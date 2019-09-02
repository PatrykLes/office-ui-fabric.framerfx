import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCommandBarButton: React.SFC = props => {
  return <System.CommandBarButton {...props} style={style} />;
};

export const CommandBarButton = withHOC(InnerCommandBarButton);

CommandBarButton.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CommandBarButton, {
  href: { title: "Href", defaultValue: "", type: ControlType.String },
  primary: { title: "Primary", defaultValue: false, type: ControlType.Boolean },
  uniqueId: { title: "UniqueId", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  allowDisabledFocus: {
    title: "AllowDisabledFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  primaryDisabled: {
    title: "PrimaryDisabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  toggle: { title: "Toggle", defaultValue: false, type: ControlType.Boolean },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  ariaDescription: {
    title: "AriaDescription",
    defaultValue: "",
    type: ControlType.String
  },
  ariaHidden: {
    title: "AriaHidden",
    defaultValue: false,
    type: ControlType.Boolean
  },
  text: { title: "Text", defaultValue: "", type: ControlType.String },
  split: { title: "Split", defaultValue: false, type: ControlType.Boolean },
  splitButtonAriaLabel: {
    title: "SplitButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  secondaryText: {
    title: "SecondaryText",
    defaultValue: "",
    type: ControlType.String
  },
  buttonType: { title: "ButtonType", type: ControlType.Number },
  toggled: { title: "Toggled", defaultValue: false, type: ControlType.Boolean },
  menuTriggerKeyCode: { title: "MenuTriggerKeyCode", type: ControlType.Number },
  persistMenu: {
    title: "PersistMenu",
    defaultValue: false,
    type: ControlType.Boolean
  },
  description: {
    title: "Description",
    defaultValue: "",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
