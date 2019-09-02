import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerLabel: React.SFC = props => {
  return <System.Label {...props} style={style} />;
};

export const Label = withHOC(InnerLabel);

Label.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Label, {
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
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
