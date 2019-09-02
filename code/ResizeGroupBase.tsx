import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerResizeGroupBase: React.SFC = props => {
  return <System.ResizeGroupBase {...props} style={style} />;
};

export const ResizeGroupBase = withHOC(InnerResizeGroupBase);

ResizeGroupBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ResizeGroupBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  direction: { title: "Direction", type: ControlType.Number },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
