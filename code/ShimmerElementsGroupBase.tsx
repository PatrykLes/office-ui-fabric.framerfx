import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerShimmerElementsGroupBase: React.SFC = props => {
  return <System.ShimmerElementsGroupBase {...props} style={style} />;
};

export const ShimmerElementsGroupBase = withHOC(InnerShimmerElementsGroupBase);

ShimmerElementsGroupBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ShimmerElementsGroupBase, {
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
