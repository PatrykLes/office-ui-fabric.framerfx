import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { Position } from "office-ui-fabric-react/lib/utilities/positioning";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";
import { compose } from "../utils/compose";
import { withManagedState } from "../utils/stateManagement/withManagedState";

const useOnDeltaCallback = (
  onChange: (value: string) => void,
  delta: number,
  min: number,
  max: number
) => {
  return React.useCallback(
    (oldValue: string) => {
      const parsedValue = parseFloat(oldValue);
      // Make sure newValue remains in the [min, max] range
      const newValue = Math.min(Math.max(parsedValue + delta, min), max);
      onChange(`${newValue}`);
    },
    [onChange, delta, min, max]
  );
};

const InnerSpinButton = props => {
  const onIncrement = useOnDeltaCallback(
    props.onChange,
    props.step,
    props.min,
    props.max
  );
  const onDecrement = useOnDeltaCallback(
    props.onChange,
    -props.step,
    props.min,
    props.max
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
  height: 80,
  valuePropName: "value"
};

addPropertyControls(SpinButton, {
  label: { title: "Label", defaultValue: "Label", type: ControlType.String },
  value: {
    title: "Value",
    defaultValue: "1",
    type: ControlType.Number,
    displayStepper: true
  },
  min: {
    title: "Min",
    type: ControlType.Number,
    displayStepper: true
  },
  max: {
    title: "Max",
    type: ControlType.Number,
    displayStepper: true
  },
  step: {
    title: "Step",
    type: ControlType.Number,
    defaultValue: 1,
    displayStepper: true,
    step: 1
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
    options: [0, 1, 2, 3],
    optionTitles: ["Top", "Bottom", "Left", "Right"],
    displayStepper: true
  },
  ...WithManagedStatePropertyControls
});
