import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { Position } from "office-ui-fabric-react/lib/utilities/positioning";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";
import { compose } from "../utils/compose";
import { withManagedState } from "../utils/stateManagement/withManagedState";

const InnerSpinButton: React.SFC = props => {
  const onIncrement = React.useCallback(
    value => {
      const parsedValue = parseInt(value, 10);
      if (parsedValue === props.max) {
        return;
      }
      props.onChange(parsedValue + 1);
    },
    [props.onChange, props.max]
  );

  const onDecrement = React.useCallback(
    value => {
      const parsedValue = parseInt(value, 10);
      if (parsedValue === props.min) {
        return;
      }
      props.onChange(parsedValue - 1);
    },
    [props.onChange, props.min]
  );
  return (
    <System.SpinButton
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      {...props}
    />
  );
};

export const SpinButton = compose(
  withHOC,
  withManagedState
)(InnerSpinButton);

SpinButton.defaultProps = {
  width: 211,
  height: 34,
  valuePropName: "value"
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
  precision: { title: "Precision", type: ControlType.Number },
  ...WithManagedStatePropertyControls
});
