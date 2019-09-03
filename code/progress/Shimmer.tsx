import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { CenteredWrapper, centeredChildStyles } from "../utils/CenteredWrapper";

const InnerShimmer: React.SFC = props => {
  return (
    <CenteredWrapper>
      <System.Shimmer {...props} style={centeredChildStyles} />
    </CenteredWrapper>
  );
};

export const Shimmer = withHOC(InnerShimmer);

Shimmer.defaultProps = {
  width: 100,
  height: 18
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
