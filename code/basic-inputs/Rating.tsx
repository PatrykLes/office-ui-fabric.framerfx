import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { RatingSize } from "office-ui-fabric-react";
import { compose } from "../utils/compose";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";
import { IconPropertyControlDescription } from "../utils/icons";

const InnerRating: React.SFC = props => {
  const onChange = React.useCallback((e, rating) => props.onChange(rating), [
    props.onChange
  ]);
  return <System.Rating {...props} onChange={onChange} />;
};

export const Rating = compose(
  withHOC,
  withManagedState
)(InnerRating);

Rating.defaultProps = {
  width: 150,
  height: 50,
  valuePropName: "rating"
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
  icon: IconPropertyControlDescription,
  unselectedIcon: IconPropertyControlDescription,
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
  },
  ...WithManagedStatePropertyControls
});
