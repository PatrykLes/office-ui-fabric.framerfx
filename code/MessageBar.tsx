import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMessageBar: React.SFC = props => {
  return <System.MessageBar {...props} style={style} />;
};

export const MessageBar = withHOC(InnerMessageBar);

MessageBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MessageBar, {
  messageBarType: { title: "MessageBarType", type: ControlType.Number },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  isMultiline: {
    title: "IsMultiline",
    defaultValue: false,
    type: ControlType.Boolean
  },
  dismissButtonAriaLabel: {
    title: "DismissButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  truncated: {
    title: "Truncated",
    defaultValue: false,
    type: ControlType.Boolean
  },
  overflowButtonAriaLabel: {
    title: "OverflowButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
