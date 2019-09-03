import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFontIcon: React.SFC = props => {
  return <System.FontIcon {...props} style={style} />;
};

export const FontIcon = withHOC(InnerFontIcon);

FontIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FontIcon, {
  iconName: { title: "IconName", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
