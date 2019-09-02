import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerHoverCardBase: React.SFC = props => {
  return <System.HoverCardBase {...props} style={style} />;
};

export const HoverCardBase = withHOC(InnerHoverCardBase);

HoverCardBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(HoverCardBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  cardDismissDelay: { title: "CardDismissDelay", type: ControlType.Number },
  cardOpenDelay: { title: "CardOpenDelay", type: ControlType.Number },
  expandedCardOpenDelay: {
    title: "ExpandedCardOpenDelay",
    type: ControlType.Number
  },
  instantOpenOnClick: {
    title: "InstantOpenOnClick",
    defaultValue: false,
    type: ControlType.Boolean
  },
  openHotKey: { title: "OpenHotKey", type: ControlType.Number },
  setAriaDescribedBy: {
    title: "SetAriaDescribedBy",
    defaultValue: false,
    type: ControlType.Boolean
  },
  setInitialFocus: {
    title: "SetInitialFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  sticky: { title: "Sticky", defaultValue: false, type: ControlType.Boolean },
  target: { title: "Target", defaultValue: "", type: ControlType.String },
  eventListenerTarget: {
    title: "EventListenerTarget",
    defaultValue: "",
    type: ControlType.String
  },
  trapFocus: {
    title: "TrapFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  type: {
    title: "Type",
    options: ["PlainCard", "ExpandingCard"],
    optionTitles: ["PlainCard", "ExpandingCard"],
    defaultValue: "PlainCard",
    type: ControlType.Enum
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
