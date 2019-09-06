import {
  ICalendarStrings,
  DayOfWeek,
  FirstWeekOfYear,
  DateRangeType
} from "office-ui-fabric-react";
import { ControlType } from "framer";

export const calendarPickerStrings: ICalendarStrings = {
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

export const ensureValidDateValue = (dateString: string) =>
  isNaN(new Date(dateString).valueOf()) ? new Date() : new Date(dateString);

export const calendarPropertyControls = {
  dateRangeType: {
    title: "DateRangeType",
    type: ControlType.Enum,
    options: Object.keys(DateRangeType).filter(
      key => !isNaN((key as unknown) as number)
    ),
    optionTitles: Object.keys(DateRangeType).filter(key =>
      isNaN((key as unknown) as number)
    )
  },
  firstDayOfWeek: {
    title: "FirstDayOfWeek",
    type: ControlType.Enum,
    options: Object.keys(DayOfWeek).filter(
      key => !isNaN((key as unknown) as number)
    ),
    optionTitles: Object.keys(DayOfWeek).filter(key =>
      isNaN((key as unknown) as number)
    )
  },
  firstWeekOfYear: {
    title: "FirstWeekOfYear",
    type: ControlType.Enum,
    options: Object.keys(FirstWeekOfYear).filter(
      key => !isNaN((key as unknown) as number)
    ),
    optionTitles: Object.keys(FirstWeekOfYear).filter(key =>
      isNaN((key as unknown) as number)
    )
  }
};
