import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerModal: React.SFC = props => {
  return <System.Modal {...props} style={style} />;
};

export const Modal = withHOC(InnerModal);

Modal.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Modal, {
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
  isModeless: {
    title: "IsModeless",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  containerClassName: {
    title: "ContainerClassName",
    defaultValue: "",
    type: ControlType.String
  },
  scrollableContentClassName: {
    title: "ScrollableContentClassName",
    defaultValue: "",
    type: ControlType.String
  },
  titleAriaId: {
    title: "TitleAriaId",
    defaultValue: "",
    type: ControlType.String
  },
  subtitleAriaId: {
    title: "SubtitleAriaId",
    defaultValue: "",
    type: ControlType.String
  },
  topOffsetFixed: {
    title: "TopOffsetFixed",
    defaultValue: false,
    type: ControlType.Boolean
  },
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
