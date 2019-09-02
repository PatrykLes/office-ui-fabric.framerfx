import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTeachingBubbleContent: React.SFC = props => {
  return <System.TeachingBubbleContent {...props} style={style} />;
};

export const TeachingBubbleContent = withHOC(InnerTeachingBubbleContent);

TeachingBubbleContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TeachingBubbleContent, {
  headline: { title: "Headline", defaultValue: "", type: ControlType.String },
  hasCondensedHeadline: {
    title: "HasCondensedHeadline",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasCloseIcon: {
    title: "HasCloseIcon",
    defaultValue: false,
    type: ControlType.Boolean
  },
  footerContent: {
    title: "FooterContent",
    defaultValue: "",
    type: ControlType.String
  },
  target: { title: "Target", defaultValue: "", type: ControlType.String },
  isWide: { title: "IsWide", defaultValue: false, type: ControlType.Boolean },
  hasSmallHeadline: {
    title: "HasSmallHeadline",
    defaultValue: false,
    type: ControlType.Boolean
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
  ignoreExternalFocusing: {
    title: "IgnoreExternalFocusing",
    defaultValue: false,
    type: ControlType.Boolean
  },
  forceFocusInsideTrap: {
    title: "ForceFocusInsideTrap",
    defaultValue: false,
    type: ControlType.Boolean
  },
  firstFocusableSelector: {
    title: "FirstFocusableSelector",
    defaultValue: "",
    type: ControlType.String
  },
  closeButtonAriaLabel: {
    title: "CloseButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  isClickableOutsideFocusTrap: {
    title: "IsClickableOutsideFocusTrap",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
