import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerToggleBase: React.SFC = props => {
  return <System.ToggleBase {...props} style={style} />;
};

export const ToggleBase = withHOC(InnerToggleBase);

ToggleBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ToggleBase, {
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  onText: { title: "OnText", defaultValue: "", type: ControlType.String },
  offText: { title: "OffText", defaultValue: "", type: ControlType.String },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  onAriaLabel: {
    title: "OnAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  offAriaLabel: {
    title: "OffAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  defaultChecked: {
    title: "DefaultChecked",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  inlineLabel: {
    title: "InlineLabel",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
