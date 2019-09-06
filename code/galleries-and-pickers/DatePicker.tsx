import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import {
  ensureValidDateValue,
  calendarPropertyControls
} from "../utils/calendarPickers";

const InnerDatePicker = ({ value, ...props }) => {
  return <System.DatePicker {...props} value={ensureValidDateValue(value)} />;
};

export const DatePicker = withHOC(InnerDatePicker);

DatePicker.defaultProps = {
  width: 150,
  height: 61
};

addPropertyControls(DatePicker, {
  value: {
    title: "Value",
    defaultValue: new Date().toISOString(),
    type: ControlType.String
  },
  label: {
    title: "Label",
    defaultValue: "DatePicker",
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
  underlined: {
    title: "Underlined",
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
  firstDayOfWeek: calendarPropertyControls.firstDayOfWeek,
  firstWeekOfYear: calendarPropertyControls.firstWeekOfYear,
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
