import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNav: React.SFC = props => {
  return <System.Nav {...props} style={style} />;
};

export const Nav = withHOC(InnerNav);

Nav.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Nav, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  isOnTop: { title: "IsOnTop", defaultValue: false, type: ControlType.Boolean },
  initialSelectedKey: {
    title: "InitialSelectedKey",
    defaultValue: "",
    type: ControlType.String
  },
  selectedKey: {
    title: "SelectedKey",
    defaultValue: "",
    type: ControlType.String
  },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  expandButtonAriaLabel: {
    title: "ExpandButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  selectedAriaLabel: {
    title: "SelectedAriaLabel",
    defaultValue: "",
    type: ControlType.String
  }
});
