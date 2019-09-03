import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPositioningContainer: React.SFC = props => {
  return <System.PositioningContainer {...props} style={style} />;
};

export const PositioningContainer = withHOC(InnerPositioningContainer);

PositioningContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(PositioningContainer, {
  target: { title: "Target", defaultValue: "", type: ControlType.String },
  directionalHint: { title: "DirectionalHint", type: ControlType.Number },
  directionalHintForRTL: {
    title: "DirectionalHintForRTL",
    type: ControlType.Number
  },
  offsetFromTarget: { title: "OffsetFromTarget", type: ControlType.Number },
  positioningContainerWidth: {
    title: "PositioningContainerWidth",
    type: ControlType.Number
  },
  backgroundColor: {
    title: "BackgroundColor",
    defaultValue: "",
    type: ControlType.String
  },
  minPagePadding: { title: "MinPagePadding", type: ControlType.Number },
  useTargetPoint: {
    title: "UseTargetPoint",
    defaultValue: false,
    type: ControlType.Boolean
  },
  preventDismissOnScroll: {
    title: "PreventDismissOnScroll",
    defaultValue: false,
    type: ControlType.Boolean
  },
  coverTarget: {
    title: "CoverTarget",
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
  setInitialFocus: {
    title: "SetInitialFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  positioningContainerMaxHeight: {
    title: "PositioningContainerMaxHeight",
    type: ControlType.Number
  }
});
