import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCoachmark: React.SFC = props => {
  return <System.Coachmark {...props} style={style} />;
};

export const Coachmark = withHOC(InnerCoachmark);

Coachmark.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Coachmark, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  target: { title: "Target", defaultValue: "", type: ControlType.String },
  isPositionForced: {
    title: "IsPositionForced",
    defaultValue: false,
    type: ControlType.Boolean
  },
  collapsed: {
    title: "Collapsed",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isCollapsed: {
    title: "IsCollapsed",
    defaultValue: false,
    type: ControlType.Boolean
  },
  mouseProximityOffset: {
    title: "MouseProximityOffset",
    type: ControlType.Number
  },
  beakWidth: { title: "BeakWidth", type: ControlType.Number },
  beakHeight: { title: "BeakHeight", type: ControlType.Number },
  delayBeforeMouseOpen: {
    title: "DelayBeforeMouseOpen",
    type: ControlType.Number
  },
  delayBeforeCoachmarkAnimation: {
    title: "DelayBeforeCoachmarkAnimation",
    type: ControlType.Number
  },
  width: { title: "Width", type: ControlType.Number },
  height: { title: "Height", type: ControlType.Number },
  color: { title: "Color", defaultValue: "", type: ControlType.String },
  beaconColorOne: {
    title: "BeaconColorOne",
    defaultValue: "",
    type: ControlType.String
  },
  beaconColorTwo: {
    title: "BeaconColorTwo",
    defaultValue: "",
    type: ControlType.String
  },
  ariaAlertText: {
    title: "AriaAlertText",
    defaultValue: "",
    type: ControlType.String
  },
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
  ariaLabelledByText: {
    title: "AriaLabelledByText",
    defaultValue: "",
    type: ControlType.String
  },
  ariaDescribedByText: {
    title: "AriaDescribedByText",
    defaultValue: "",
    type: ControlType.String
  },
  preventDismissOnLostFocus: {
    title: "PreventDismissOnLostFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  preventFocusOnMount: {
    title: "PreventFocusOnMount",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
