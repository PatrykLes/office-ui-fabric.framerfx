import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerLabel: React.SFC = props => {
  return <System.Label {...props}>{props.text}</System.Label>;
};

export const Label = withHOC(InnerLabel);

Label.defaultProps = {
  width: 50,
  height: 27
};

addPropertyControls(Label, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Label"
  },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
