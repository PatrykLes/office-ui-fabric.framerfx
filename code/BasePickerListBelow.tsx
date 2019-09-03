import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBasePickerListBelow: React.SFC = props => {
  return <System.BasePickerListBelow {...props} style={style} />;
};

export const BasePickerListBelow = withHOC(InnerBasePickerListBelow);

BasePickerListBelow.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(BasePickerListBelow, {});
