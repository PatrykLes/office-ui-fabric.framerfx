import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const dayPickerStrings: System.ICalendarStrings = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  shortDays: ["S", "M", "T", "W", "T", "F", "S"],
  goToToday: "Go to today",
  weekNumberFormatString: "Week number {0}",
  prevMonthAriaLabel: "Previous month",
  nextMonthAriaLabel: "Next month",
  prevYearAriaLabel: "Previous year",
  nextYearAriaLabel: "Next year",
  prevYearRangeAriaLabel: "Previous year range",
  nextYearRangeAriaLabel: "Next year range",
  closeButtonAriaLabel: "Close"
};

const InnerCalendar: React.SFC = ({ value, ...props }) => {
  const currentDate = isNaN(new Date(value).valueOf())
    ? new Date()
    : new Date(value);

  return (
    <System.Calendar
      {...props}
      value={currentDate}
      strings={dayPickerStrings}
    />
  );
};

export const Calendar = withHOC(InnerCalendar);

Calendar.defaultProps = {
  width: 150,
  height: 50
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
  dateRangeType: {
    title: "DateRangeType",
    type: ControlType.Enum,
    options: Object.keys(System.DateRangeType).filter(key => !isNaN(key)),
    optionTitles: Object.keys(System.DateRangeType).filter(key => isNaN(key))
  },
  firstDayOfWeek: {
    title: "FirstDayOfWeek",
    type: ControlType.Enum,
    options: Object.keys(System.DayOfWeek).filter(key => !isNaN(key)),
    optionTitles: Object.keys(System.DayOfWeek).filter(key => isNaN(key))
  },
  firstWeekOfYear: {
    title: "FirstWeekOfYear",
    type: ControlType.Enum,
    options: Object.keys(System.FirstWeekOfYear).filter(key => !isNaN(key)),
    optionTitles: Object.keys(System.FirstWeekOfYear).filter(key => isNaN(key))
  },
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
