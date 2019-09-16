import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { centeredChildStyles } from "../utils/CenteredWrapper";
import { withHOC } from "../utils/withHOC";
import { ShimmerElementType } from "office-ui-fabric-react";

const InnerShimmer: React.SFC = props => {
  return (
    <System.Shimmer {...props} style={centeredChildStyles} flexWrap={true} />
  );
};

export const Shimmer = withHOC(InnerShimmer);

Shimmer.defaultProps = {
  width: 100,
  height: 18
};

addPropertyControls(Shimmer, {
  width: {
    title: "Width",
    type: ControlType.Number,
    step: 10,
    min: 0,
    defaultValue: 100,
    unit: "px",
    displayStepper: true
  },
  isDataLoaded: {
    title: "IsDataLoaded",
    defaultValue: false,
    type: ControlType.Boolean
  },
  customElementsGroup: {
    title: "CustomElementsGroup",
    defaultValue: "",
    type: ControlType.String
  }
});
