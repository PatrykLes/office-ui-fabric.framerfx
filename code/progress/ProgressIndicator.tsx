import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { centeredChildStyles } from "../utils/CenteredWrapper";
import { withHOC } from "../utils/withHOC";

const InnerProgressIndicator: React.SFC = props => {
  return (
    <System.ProgressIndicator
      {...props}
      styles={{
        root: centeredChildStyles
      }}
    />
  );
};

export const ProgressIndicator = withHOC(InnerProgressIndicator);

ProgressIndicator.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ProgressIndicator, {
  label: { title: "Label", defaultValue: "Label", type: ControlType.String },
  description: {
    title: "Description",
    defaultValue: "Description",
    type: ControlType.String
  },
  percentComplete: {
    title: "PercentComplete",
    type: ControlType.Number,
    step: 0.01,
    min: 0,
    max: 1
  },
  progressHidden: {
    title: "ProgressHidden",
    defaultValue: false,
    type: ControlType.Boolean
  },
  barHeight: { title: "BarHeight", type: ControlType.Number, defaultValue: 2 }
});
