import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDatePickerBase: React.SFC = props => {
  return <System.DatePickerBase {...props} style={style} />;
};

export const DatePickerBase = withHOC(InnerDatePickerBase);

DatePickerBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DatePickerBase, {
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  isRequired: {
    title: "IsRequired",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  underlined: {
    title: "Underlined",
    defaultValue: false,
    type: ControlType.Boolean
  },
  pickerAriaLabel: {
    title: "PickerAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  isMonthPickerVisible: {
    title: "IsMonthPickerVisible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showMonthPickerAsOverlay: {
    title: "ShowMonthPickerAsOverlay",
    defaultValue: false,
    type: ControlType.Boolean
  },
  allowTextInput: {
    title: "AllowTextInput",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disableAutoFocus: {
    title: "DisableAutoFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  },
  firstDayOfWeek: { title: "FirstDayOfWeek", type: ControlType.Number },
  highlightCurrentMonth: {
    title: "HighlightCurrentMonth",
    defaultValue: false,
    type: ControlType.Boolean
  },
  highlightSelectedMonth: {
    title: "HighlightSelectedMonth",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showWeekNumbers: {
    title: "ShowWeekNumbers",
    defaultValue: false,
    type: ControlType.Boolean
  },
  firstWeekOfYear: { title: "FirstWeekOfYear", type: ControlType.Number },
  showGoToToday: {
    title: "ShowGoToToday",
    defaultValue: false,
    type: ControlType.Boolean
  },
  borderless: {
    title: "Borderless",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  allFocusable: {
    title: "AllFocusable",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showCloseButton: {
    title: "ShowCloseButton",
    defaultValue: false,
    type: ControlType.Boolean
  },
  tabIndex: { title: "TabIndex", type: ControlType.Number }
});
