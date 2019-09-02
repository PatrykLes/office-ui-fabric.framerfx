import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerProgressIndicatorBase: React.SFC = props => {
  return <System.ProgressIndicatorBase {...props} style={style} />;
};

export const ProgressIndicatorBase = withHOC(InnerProgressIndicatorBase);

ProgressIndicatorBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ProgressIndicatorBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  description: {
    title: "Description",
    defaultValue: "",
    type: ControlType.String
  },
  percentComplete: { title: "PercentComplete", type: ControlType.Number },
  progressHidden: {
    title: "ProgressHidden",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ariaValueText: {
    title: "AriaValueText",
    defaultValue: "",
    type: ControlType.String
  },
  title: { title: "Title", defaultValue: "", type: ControlType.String },
  barHeight: { title: "BarHeight", type: ControlType.Number }
});
