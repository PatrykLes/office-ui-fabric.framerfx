import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerOverlayBase: React.SFC = props => {
  return <System.OverlayBase {...props} style={style} />;
};

export const OverlayBase = withHOC(InnerOverlayBase);

OverlayBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(OverlayBase, {
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
