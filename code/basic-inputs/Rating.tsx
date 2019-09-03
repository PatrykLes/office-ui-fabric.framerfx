import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerRating: React.SFC = props => {
  return <System.Rating {...props} style={style} />;
};

export const Rating = withHOC(InnerRating);

Rating.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Rating, {
  rating: { title: "Rating", type: ControlType.Number },
  min: { title: "Min", type: ControlType.Number },
  max: { title: "Max", type: ControlType.Number },
  allowZeroStars: {
    title: "AllowZeroStars",
    defaultValue: false,
    type: ControlType.Boolean
  },
  icon: { title: "Icon", defaultValue: "", type: ControlType.String },
  unselectedIcon: {
    title: "UnselectedIcon",
    defaultValue: "",
    type: ControlType.String
  },
  size: { title: "Size", type: ControlType.Number },
  ariaLabelFormat: {
    title: "AriaLabelFormat",
    defaultValue: "",
    type: ControlType.String
  },
  ariaLabelId: {
    title: "AriaLabelId",
    defaultValue: "",
    type: ControlType.String
  },
  readOnly: {
    title: "ReadOnly",
    defaultValue: false,
    type: ControlType.Boolean
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
