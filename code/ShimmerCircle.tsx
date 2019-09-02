import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerShimmerCircle: React.SFC = props => {
  return <System.ShimmerCircle {...props} style={style} />;
};

export const ShimmerCircle = withHOC(InnerShimmerCircle);

ShimmerCircle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ShimmerCircle, {
  height: { title: "Height", type: ControlType.Number },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
