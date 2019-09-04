import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { Position } from "office-ui-fabric-react/lib/utilities/positioning";

const InnerSpinButton: React.SFC = props => {
  return <System.SpinButton {...props} />;
};

export const SpinButton = withHOC(InnerSpinButton);

SpinButton.defaultProps = {
  width: 211,
  height: 34
};

const positionKeys = Object.keys(Position).filter((key: string | number) =>
  isNaN(key as any)
);

addPropertyControls(SpinButton, {
  title: { title: "Title", defaultValue: "Title", type: ControlType.String },
  label: { title: "Label", defaultValue: "Label", type: ControlType.String },
  value: { title: "Value", defaultValue: "1", type: ControlType.String },
  min: {
    title: "Min",
    type: ControlType.Number,
    defaultValue: 0,
    displayStepper: true
  },
  max: {
    title: "Max",
    type: ControlType.Number,
    defaultValue: 10,
    displayStepper: true
  },
  step: {
    title: "Step",
    type: ControlType.Number,
    defaultValue: 1,
    displayStepper: true
  },
  defaultValue: {
    title: "DefaultValue",
    defaultValue: "",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  labelPosition: {
    title: "LabelPosition",
    type: ControlType.Enum,
    defaultValue: Position.start,
    options: positionKeys.map(key => String(Position[key])),
    optionTitles: positionKeys
  },
  precision: { title: "Precision", type: ControlType.Number }
});
