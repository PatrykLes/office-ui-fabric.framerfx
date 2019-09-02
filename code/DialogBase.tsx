import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDialogBase: React.SFC = props => {
  return <System.DialogBase {...props} style={style} />;
};

export const DialogBase = withHOC(InnerDialogBase);

DialogBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogBase, {
  hidden: { title: "Hidden", defaultValue: false, type: ControlType.Boolean },
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  isDarkOverlay: {
    title: "IsDarkOverlay",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isBlocking: {
    title: "IsBlocking",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  containerClassName: {
    title: "ContainerClassName",
    defaultValue: "",
    type: ControlType.String
  },
  type: { title: "Type", type: ControlType.Number },
  title: { title: "Title", defaultValue: "", type: ControlType.String },
  subText: { title: "SubText", defaultValue: "", type: ControlType.String },
  contentClassName: {
    title: "ContentClassName",
    defaultValue: "",
    type: ControlType.String
  },
  ariaLabelledById: {
    title: "AriaLabelledById",
    defaultValue: "",
    type: ControlType.String
  },
  ariaDescribedById: {
    title: "AriaDescribedById",
    defaultValue: "",
    type: ControlType.String
  },
  minWidth: { title: "MinWidth", defaultValue: "", type: ControlType.String },
  maxWidth: { title: "MaxWidth", defaultValue: "", type: ControlType.String },
  responsiveMode: { title: "ResponsiveMode", type: ControlType.Number },
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
