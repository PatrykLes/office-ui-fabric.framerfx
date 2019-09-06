import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import {
  ensureValidDateValue,
  calendarPickerStrings,
  calendarPropertyControls
} from "../utils/calendarPickers";

const InnerCalendar: React.SFC = ({ value, ...props }) => {
  return (
    <System.Calendar
      {...props}
      value={ensureValidDateValue(value)}
      strings={calendarPickerStrings}
    />
  );
};

export const Calendar = withHOC(InnerCalendar);

Calendar.defaultProps = {
  width: 215,
  height: 244
};

addPropertyControls(Calendar, {
  value: {
    title: "Value",
    defaultValue: new Date().toISOString(),
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
  isDayPickerVisible: {
    title: "IsDayPickerVisible",
    defaultValue: true,
    type: ControlType.Boolean
  },
  autoNavigateOnSelection: {
    title: "AutoNavigateOnSelection",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showGoToToday: {
    title: "ShowGoToToday",
    defaultValue: false,
    type: ControlType.Boolean
  },
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
  dateRangeType: calendarPropertyControls.dateRangeType,
  firstDayOfWeek: calendarPropertyControls.firstDayOfWeek,
  firstWeekOfYear: calendarPropertyControls.firstWeekOfYear,
  showSixWeeksByDefault: {
    title: "ShowSixWeeksByDefault",
    defaultValue: false,
    type: ControlType.Boolean
  },
  selectDateOnClick: {
    title: "SelectDateOnClick",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showCloseButton: {
    title: "ShowCloseButton",
    defaultValue: false,
    type: ControlType.Boolean
  },
  allFocusable: {
    title: "AllFocusable",
    defaultValue: false,
    type: ControlType.Boolean
  },
  yearPickerHidden: {
    title: "YearPickerHidden",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
