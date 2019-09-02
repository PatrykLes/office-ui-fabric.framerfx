import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerContextualMenuItemBase: React.SFC = props => {
  return <System.ContextualMenuItemBase {...props} style={style} />;
};

export const ContextualMenuItemBase = withHOC(InnerContextualMenuItemBase);

ContextualMenuItemBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ContextualMenuItemBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  index: { title: "Index", type: ControlType.Number },
  hasIcons: {
    title: "HasIcons",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
