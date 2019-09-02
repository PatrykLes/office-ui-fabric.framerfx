import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSpinner: React.SFC = props => {
  return <System.Spinner {...props} style={style} />;
};

export const Spinner = withHOC(InnerSpinner);

Spinner.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Spinner, {
  type: { title: "Type", type: ControlType.Number },
  size: { title: "Size", type: ControlType.Number },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  ariaLive: {
    title: "AriaLive",
    options: ["off", "assertive", "polite"],
    optionTitles: ["Off", "Assertive", "Polite"],
    defaultValue: "off",
    type: ControlType.Enum
  },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  labelPosition: {
    title: "LabelPosition",
    options: ["top", "right", "bottom", "left"],
    optionTitles: ["Top", "Right", "Bottom", "Left"],
    defaultValue: "top",
    type: ControlType.Enum
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
