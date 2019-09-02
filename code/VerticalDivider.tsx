import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerVerticalDivider: React.SFC = props => {
  return <System.VerticalDivider {...props} style={style} />;
};

export const VerticalDivider = withHOC(InnerVerticalDivider);

VerticalDivider.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(VerticalDivider, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
