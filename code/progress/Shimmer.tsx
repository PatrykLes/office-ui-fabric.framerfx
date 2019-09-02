import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerShimmer: React.SFC = props => {
  return <System.Shimmer {...props} style={style} />;
};

export const Shimmer = withHOC(InnerShimmer);

Shimmer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Shimmer, {
  width: { title: "Width", defaultValue: "", type: ControlType.String },
  isDataLoaded: {
    title: "IsDataLoaded",
    defaultValue: false,
    type: ControlType.Boolean
  },
  customElementsGroup: {
    title: "CustomElementsGroup",
    defaultValue: "",
    type: ControlType.String
  },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
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
