import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { RatingSize } from "office-ui-fabric-react";

const InnerRating: React.SFC = props => {
  return <System.Rating {...props} />;
};

export const Rating = withHOC(InnerRating);

Rating.defaultProps = {
  width: 150,
  height: 50
};

const ratingKeys = Object.keys(RatingSize).filter((key: string | number) =>
  isNaN(key as any)
);

addPropertyControls(Rating, {
  rating: {
    title: "Rating",
    type: ControlType.Number,
    defaultValue: 1,
    min: 0,
    displayStepper: true
  },
  max: {
    title: "Max",
    type: ControlType.Number,
    defaultValue: 5,
    displayStepper: true
  },
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
  size: {
    title: "Size",
    type: ControlType.SegmentedEnum,
    defaultValue: String(RatingSize[ratingKeys[0]]),
    options: ratingKeys.map(key => String(RatingSize[key])),
    optionTitles: ratingKeys
  },
  readOnly: {
    title: "ReadOnly",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
