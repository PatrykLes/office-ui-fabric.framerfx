import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTooltip: React.SFC = props => {
  return <System.Tooltip {...props} style={style} />;
};

export const Tooltip = withHOC(InnerTooltip);

Tooltip.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Tooltip, {
  content: { title: "Content", defaultValue: "", type: ControlType.String },
  delay: { title: "Delay", type: ControlType.Number },
  maxWidth: { title: "MaxWidth", defaultValue: "", type: ControlType.String },
  directionalHint: { title: "DirectionalHint", type: ControlType.Number },
  directionalHintForRTL: {
    title: "DirectionalHintForRTL",
    type: ControlType.Number
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
