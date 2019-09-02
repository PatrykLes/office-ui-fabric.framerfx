import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSeparatorBase: React.SFC = props => {
  return <System.SeparatorBase {...props} style={style} />;
};

export const SeparatorBase = withHOC(InnerSeparatorBase);

SeparatorBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SeparatorBase, {
  vertical: {
    title: "Vertical",
    defaultValue: false,
    type: ControlType.Boolean
  },
  alignContent: {
    title: "AlignContent",
    options: ["start", "end", "center"],
    optionTitles: ["Start", "End", "Center"],
    defaultValue: "start",
    type: ControlType.Enum
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
