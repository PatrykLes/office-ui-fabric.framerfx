import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerShimmerGap: React.SFC = props => {
  return <System.ShimmerGap {...props} style={style} />;
};

export const ShimmerGap = withHOC(InnerShimmerGap);

ShimmerGap.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ShimmerGap, {
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
