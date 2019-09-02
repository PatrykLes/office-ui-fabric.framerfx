import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerActivityItem: React.SFC = props => {
  return <System.ActivityItem {...props} style={style} />;
};

export const ActivityItem = withHOC(InnerActivityItem);

ActivityItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ActivityItem, {
  activityDescription: {
    title: "ActivityDescription",
    defaultValue: "",
    type: ControlType.String
  },
  activityDescriptionText: {
    title: "ActivityDescriptionText",
    defaultValue: "",
    type: ControlType.String
  },
  activityIcon: {
    title: "ActivityIcon",
    defaultValue: "",
    type: ControlType.String
  },
  comments: { title: "Comments", defaultValue: "", type: ControlType.String },
  commentText: {
    title: "CommentText",
    defaultValue: "",
    type: ControlType.String
  },
  isCompact: {
    title: "IsCompact",
    defaultValue: false,
    type: ControlType.Boolean
  },
  timeStamp: { title: "TimeStamp", defaultValue: "", type: ControlType.String },
  beaconColorOne: {
    title: "BeaconColorOne",
    defaultValue: "",
    type: ControlType.String
  },
  beaconColorTwo: {
    title: "BeaconColorTwo",
    defaultValue: "",
    type: ControlType.String
  },
  animateBeaconSignal: {
    title: "AnimateBeaconSignal",
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
