import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPanel: React.SFC = props => {
  return <System.Panel {...props} style={style} />;
};

export const Panel = withHOC(InnerPanel);

Panel.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Panel, {
  isOpen: { title: "IsOpen", defaultValue: false, type: ControlType.Boolean },
  hasCloseButton: {
    title: "HasCloseButton",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isLightDismiss: {
    title: "IsLightDismiss",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isHiddenOnDismiss: {
    title: "IsHiddenOnDismiss",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isBlocking: {
    title: "IsBlocking",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isFooterAtBottom: {
    title: "IsFooterAtBottom",
    defaultValue: false,
    type: ControlType.Boolean
  },
  headerText: {
    title: "HeaderText",
    defaultValue: "",
    type: ControlType.String
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  type: { title: "Type", type: ControlType.Number },
  customWidth: {
    title: "CustomWidth",
    defaultValue: "",
    type: ControlType.String
  },
  closeButtonAriaLabel: {
    title: "CloseButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  headerClassName: {
    title: "HeaderClassName",
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
  componentId: {
    title: "ComponentId",
    defaultValue: "",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
