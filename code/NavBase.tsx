import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNavBase: React.SFC = props => {
  return <System.NavBase {...props} style={style} />;
};

export const NavBase = withHOC(InnerNavBase);

NavBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NavBase, {
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
