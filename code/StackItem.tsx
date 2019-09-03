import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStackItem: React.SFC = props => {
  return <System.StackItem {...props} style={style} />;
};

export const StackItem = withHOC(InnerStackItem);

StackItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StackItem, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  grow: {
    title: "Grow",
    options: ["initial", "inherit", "unset"],
    optionTitles: ["Initial", "Inherit", "Unset"],
    defaultValue: "initial",
    type: ControlType.Enum
  },
  shrink: {
    title: "Shrink",
    options: ["initial", "inherit", "unset"],
    optionTitles: ["Initial", "Inherit", "Unset"],
    defaultValue: "initial",
    type: ControlType.Enum
  },
  disableShrink: {
    title: "DisableShrink",
    defaultValue: false,
    type: ControlType.Boolean
  },
  align: {
    title: "Align",
    options: ["start", "end", "auto", "center", "stretch", "baseline"],
    optionTitles: ["Start", "End", "Auto", "Center", "Stretch", "Baseline"],
    defaultValue: "start",
    type: ControlType.Enum
  },
  verticalFill: {
    title: "VerticalFill",
    defaultValue: false,
    type: ControlType.Boolean
  },
  order: { title: "Order", defaultValue: "", type: ControlType.String }
});
