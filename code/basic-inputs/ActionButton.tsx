import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";
import {
  IconPropertyControlDescription,
  IconColorPropertyControlDescription
} from "../utils/icons";
import { colors } from "../canvas";

const InnerActionButton = props => {
  return (
    <System.ActionButton
      {...props}
      iconProps={{ iconName: props.icon }}
      styles={{
        icon: {
          color: props.iconColor
        },
        label: {
          color: props.labelColor
        }
      }}
    />
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
  icon: IconPropertyControlDescription,
  iconColor: IconColorPropertyControlDescription,
  labelColor: {
    title: "LabelColor",
    defaultValue: colors["exchange.primary"],
    type: ControlType.Color
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
