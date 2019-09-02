import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTooltipHostBase: React.SFC = props => {
  return <System.TooltipHostBase {...props} style={style} />;
};

export const TooltipHostBase = withHOC(InnerTooltipHostBase);

TooltipHostBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TooltipHostBase, {
  closeDelay: { title: "CloseDelay", type: ControlType.Number },
  content: { title: "Content", defaultValue: "", type: ControlType.String },
  delay: { title: "Delay", type: ControlType.Number },
  directionalHint: { title: "DirectionalHint", type: ControlType.Number },
  directionalHintForRTL: {
    title: "DirectionalHintForRTL",
    type: ControlType.Number
  },
  hostClassName: {
    title: "HostClassName",
    defaultValue: "",
    type: ControlType.String
  },
  overflowMode: { title: "OverflowMode", type: ControlType.Number },
  setAriaDescribedBy: {
    title: "SetAriaDescribedBy",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
