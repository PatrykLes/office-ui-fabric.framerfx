import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerOverlay: React.SFC = props => {
  return <System.Overlay {...props} style={style} />;
};

export const Overlay = withHOC(InnerOverlay);

Overlay.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Overlay, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  isDarkThemed: {
    title: "IsDarkThemed",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
