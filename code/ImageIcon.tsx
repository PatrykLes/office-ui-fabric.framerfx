import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerImageIcon: React.SFC = props => {
  return <System.ImageIcon {...props} style={style} />;
};

export const ImageIcon = withHOC(InnerImageIcon);

ImageIcon.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ImageIcon, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
