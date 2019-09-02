import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCalendar: React.SFC = props => {
  return <System.Calendar {...props} style={style} />;
};

export const Calendar = withHOC(InnerCalendar);

Calendar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Calendar, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  isMonthPickerVisible: {
    title: "IsMonthPickerVisible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isDayPickerVisible: {
    title: "IsDayPickerVisible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showMonthPickerAsOverlay: {
    title: "ShowMonthPickerAsOverlay",
    defaultValue: false,
    type: ControlType.Boolean
  },
  firstDayOfWeek: { title: "FirstDayOfWeek", type: ControlType.Number },
  dateRangeType: { title: "DateRangeType", type: ControlType.Number },
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
  shouldFocusOnMount: {
    title: "ShouldFocusOnMount",
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
  firstWeekOfYear: { title: "FirstWeekOfYear", type: ControlType.Number },
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
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
