import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMarqueeSelection: React.SFC = props => {
  return <System.MarqueeSelection {...props} style={style} />;
};

export const MarqueeSelection = withHOC(InnerMarqueeSelection);

MarqueeSelection.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MarqueeSelection, {
  isEnabled: {
    title: "IsEnabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isDraggingConstrainedToRoot: {
    title: "IsDraggingConstrainedToRoot",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
