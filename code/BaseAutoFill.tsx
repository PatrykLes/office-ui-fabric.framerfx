import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBaseAutoFill: React.SFC = props => {
  return <System.BaseAutoFill {...props} style={style} />;
};

export const BaseAutoFill = withHOC(InnerBaseAutoFill);

BaseAutoFill.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(BaseAutoFill, {});
