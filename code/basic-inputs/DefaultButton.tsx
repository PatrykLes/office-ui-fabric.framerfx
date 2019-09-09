import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";

const InnerDefaultButton = props => {
  return <System.DefaultButton {...props} />;
};

export const DefaultButton = withHOC(InnerDefaultButton);

DefaultButton.defaultProps = {
  width: 158,
  height: 33
};

addPropertyControls(DefaultButton, {
  text: {
    title: "Text",
    defaultValue: "Default Button",
    type: ControlType.String
  },
  primary: { title: "Primary", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
