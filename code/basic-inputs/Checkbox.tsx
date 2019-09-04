import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCheckbox: React.SFC = props => {
  return <System.Checkbox {...props} style={style} />;
};

export const Checkbox = withHOC(InnerCheckbox);

Checkbox.defaultProps = {
  width: 150,
  height: 23
};

addPropertyControls(Checkbox, {
  label: {
    title: "Label",
    defaultValue: "Standard Checkbox",
    type: ControlType.String
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  defaultChecked: {
    title: "DefaultChecked",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  boxSide: {
    title: "BoxSide",
    options: ["start", "end"],
    optionTitles: ["Start", "End"],
    defaultValue: "start",
    type: ControlType.SegmentedEnum
  },
  indeterminate: {
    title: "Indeterminate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  defaultIndeterminate: {
    title: "DefaultIndeterminate",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
