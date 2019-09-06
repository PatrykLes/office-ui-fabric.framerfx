import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";

const InnerActionButton = props => {
  return (
    <System.ActionButton {...props} iconProps={{ iconName: props.icon }} />
  );
};

export const ActionButton = withHOC(InnerActionButton);

ActionButton.defaultProps = {
  width: 150,
  height: 40
};

addPropertyControls(ActionButton, {
  text: {
    title: "Text",
    defaultValue: "This is the defaul text",
    type: ControlType.String
  },
  icon: {
    title: "Icon",
    type: ControlType.String,
    defaultValue: "AddFriend"
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
