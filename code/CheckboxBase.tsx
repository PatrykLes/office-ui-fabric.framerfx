import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCheckboxBase: React.SFC = props => {
  return <System.CheckboxBase {...props} style={style} />;
};

export const CheckboxBase = withHOC(InnerCheckboxBase);

CheckboxBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CheckboxBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  defaultChecked: {
    title: "DefaultChecked",
    defaultValue: false,
    type: ControlType.Boolean
  },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
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
    type: ControlType.Enum
  },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  ariaLabelledBy: {
    title: "AriaLabelledBy",
    defaultValue: "",
    type: ControlType.String
  },
  ariaDescribedBy: {
    title: "AriaDescribedBy",
    defaultValue: "",
    type: ControlType.String
  },
  ariaPositionInSet: { title: "AriaPositionInSet", type: ControlType.Number },
  ariaSetSize: { title: "AriaSetSize", type: ControlType.Number },
  indeterminate: {
    title: "Indeterminate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  defaultIndeterminate: {
    title: "DefaultIndeterminate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
