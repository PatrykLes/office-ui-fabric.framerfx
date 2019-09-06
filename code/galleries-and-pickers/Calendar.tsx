import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import {
  calendarPickerStrings,
  ensureValidDateValue
} from "../utils/calendarPickers";
import { withHOC } from "../utils/withHOC";

const InnerCalendar = ({ value, ...props }) => {
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
  width: 475,
  height: 275
};

addPropertyControls(Calendar, {
  day: {
    title: "Day",
    defaultValue: "2019-01-20",
    type: ControlType.String
  },
  showGoToToday: {
    title: "ShowGoToToday",
    defaultValue: true,
    type: ControlType.Boolean
  },
  isMonthPickerVisible: {
    title: "Month Picker",
    defaultValue: true,
    type: ControlType.Boolean
  },
  showWeekNumbers: {
    title: "ShowWeekNumbers",
    defaultValue: true,
    type: ControlType.Boolean
  },
  showSixWeeksByDefault: {
    title: "Show Six Weeks By Default",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showCloseButton: {
    title: "ShowCloseButton",
    defaultValue: true,
    type: ControlType.Boolean
  },
  yearPickerHidden: {
    title: "YearPickerHidden",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
