import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";

const InnerCompoundButton = props => {
  return <System.CompoundButton {...props} />;
};

export const CompoundButton = withHOC(InnerCompoundButton);

CompoundButton.defaultProps = {
  width: 150,
  height: 80,
  centerLayout: "flex"
};

addPropertyControls(CompoundButton, {
  text: {
    title: "Text",
    defaultValue: "Compound Button",
    type: ControlType.String
  },
  secondaryText: {
    title: "Secondary Text",
    defaultValue: "Text",
    type: ControlType.String
  },
  primary: { title: "Primary", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
