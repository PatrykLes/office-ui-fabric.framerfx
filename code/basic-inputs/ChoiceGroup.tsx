import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerChoiceGroup: React.SFC = props => {
  return (
    <System.ChoiceGroup
      {...props}
      options={props.options.map(option => ({
        key: option,
        text: option
      }))}
    />
  );
};

export const ChoiceGroup = withHOC(InnerChoiceGroup);

ChoiceGroup.defaultProps = {
  width: 90,
  height: 100
};

addPropertyControls(ChoiceGroup, {
  selectedKey: {
    title: "SelectedKey",
    defaultValue: "Option A",
    type: ControlType.String
  },
  label: { title: "Label", defaultValue: "Pick one", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  options: {
    title: "Options",
    type: ControlType.Array,
    defaultValue: ["Option A", "Option B"],
    propertyControl: {
      type: ControlType.String
    }
  },
  required: {
    title: "Required",
    type: ControlType.Boolean,
    defaultValue: false
  }
});
