import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerIconBase: React.SFC = props => {
  return <System.IconBase {...props} style={style} />;
};

export const IconBase = withHOC(InnerIconBase);

IconBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(IconBase, {
  iconName: { title: "IconName", defaultValue: "", type: ControlType.String },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  iconType: { title: "IconType", type: ControlType.Number },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
