import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";
import { parseEnumAsPropertyControl } from "../utils/propertyControls";
import { SpinnerSize } from "office-ui-fabric-react";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSpinner: React.SFC = props => {
  return (
    <System.Spinner {...props} style={style} size={parseInt(props.size, 10)} />
  );
};

export const Spinner = withHOC(InnerSpinner);

Spinner.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Spinner, {
  size: parseEnumAsPropertyControl("Size", SpinnerSize, SpinnerSize.medium),
  label: { title: "Label", defaultValue: "Label", type: ControlType.String },
  labelPosition: {
    title: "LabelPosition",
    options: ["top", "right", "bottom", "left"],
    optionTitles: ["Top", "Right", "Bottom", "Left"],
    defaultValue: "top",
    type: ControlType.Enum
  }
});
