import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerShimmerGapBase: React.SFC = props => {
  return <System.ShimmerGapBase {...props} style={style} />;
};

export const ShimmerGapBase = withHOC(InnerShimmerGapBase);

ShimmerGapBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ShimmerGapBase, {
  height: { title: "Height", type: ControlType.Number },
  width: { title: "Width", defaultValue: "", type: ControlType.String },
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
