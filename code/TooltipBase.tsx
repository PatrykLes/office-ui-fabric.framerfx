import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTooltipBase: React.SFC = props => {
  return <System.TooltipBase {...props} style={style} />;
};

export const TooltipBase = withHOC(InnerTooltipBase);

TooltipBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TooltipBase, {
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
