import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCallout: React.SFC = props => {
  return <System.Callout {...props} style={style} />;
};

export const Callout = withHOC(InnerCallout);

Callout.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Callout, {
  target: { title: "Target", defaultValue: "", type: ControlType.String },
  directionalHint: { title: "DirectionalHint", type: ControlType.Number },
  directionalHintForRTL: {
    title: "DirectionalHintForRTL",
    type: ControlType.Number
  },
  gapSpace: { title: "GapSpace", type: ControlType.Number },
  beakWidth: { title: "BeakWidth", type: ControlType.Number },
  calloutWidth: { title: "CalloutWidth", type: ControlType.Number },
  calloutMaxWidth: { title: "CalloutMaxWidth", type: ControlType.Number },
  backgroundColor: {
    title: "BackgroundColor",
    defaultValue: "",
    type: ControlType.String
  },
  minPagePadding: { title: "MinPagePadding", type: ControlType.Number },
  isBeakVisible: {
    title: "IsBeakVisible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  preventDismissOnScroll: {
    title: "PreventDismissOnScroll",
    defaultValue: false,
    type: ControlType.Boolean
  },
  preventDismissOnResize: {
    title: "PreventDismissOnResize",
    defaultValue: false,
    type: ControlType.Boolean
  },
  preventDismissOnLostFocus: {
    title: "PreventDismissOnLostFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  coverTarget: {
    title: "CoverTarget",
    defaultValue: false,
    type: ControlType.Boolean
  },
  alignTargetEdge: {
    title: "AlignTargetEdge",
    defaultValue: false,
    type: ControlType.Boolean
  },
  role: { title: "Role", defaultValue: "", type: ControlType.String },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  ariaLabelledBy: {
    title: "AriaLabelledBy",
    defaultValue: "",
    type: ControlType.String
  },
  ariaDescribedBy: {
    title: "AriaDescribedBy",
    defaultValue: "",
    type: ControlType.String
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  doNotLayer: {
    title: "DoNotLayer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  directionalHintFixed: {
    title: "DirectionalHintFixed",
    defaultValue: false,
    type: ControlType.Boolean
  },
  finalHeight: { title: "FinalHeight", type: ControlType.Number },
  hideOverflow: {
    title: "HideOverflow",
    defaultValue: false,
    type: ControlType.Boolean
  },
  setInitialFocus: {
    title: "SetInitialFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  calloutMaxHeight: { title: "CalloutMaxHeight", type: ControlType.Number },
  hidden: { title: "Hidden", defaultValue: false, type: ControlType.Boolean },
  shouldRestoreFocus: {
    title: "ShouldRestoreFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
