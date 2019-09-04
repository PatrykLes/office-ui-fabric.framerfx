import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";
import { compose } from "../utils/compose";

const InnerLabel: React.SFC = props => {
  return <System.Label {...props}>{props.text}</System.Label>;
};

export const Label = compose(
  withHOC,
  withManagedState
)(InnerLabel);

Label.defaultProps = {
  width: 50,
  height: 27,
  valuePropName: "text"
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
  },
  ...WithManagedStatePropertyControls
});
