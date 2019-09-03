import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerShimmerElementsGroup: React.SFC = props => {
  return <System.ShimmerElementsGroup {...props} style={style} />;
};

export const ShimmerElementsGroup = withHOC(InnerShimmerElementsGroup);

ShimmerElementsGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ShimmerElementsGroup, {
  rowHeight: { title: "RowHeight", type: ControlType.Number },
  flexWrap: {
    title: "FlexWrap",
    defaultValue: false,
    type: ControlType.Boolean
  },
  width: { title: "Width", defaultValue: "", type: ControlType.String },
  backgroundColor: {
    title: "BackgroundColor",
    defaultValue: "",
    type: ControlType.String
  },
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
