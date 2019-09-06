import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";

const InnerSplitButton = props => {
  const menuProps = !!props.menuItems.length
    ? {
        items: props.menuItems.map((item, index) => ({
          key: item,
          text: item,
          iconProps: props.menuIcons[index]
            ? {
                iconName: props.menuIcons[index]
              }
            : undefined
        }))
      }
    : undefined;
  return <System.DefaultButton {...props} split={true} menuProps={menuProps} />;
};

export const SplitButton = withHOC(InnerSplitButton);

SplitButton.defaultProps = {
  width: 158,
  height: 33,
  centerLayout: "flex"
};

addPropertyControls(SplitButton, {
  text: {
    title: "Text",
    defaultValue: "Split Button",
    type: ControlType.String
  },
  primary: { title: "Primary", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  menuItems: {
    title: "Menu Items",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: ["First", "Second", "Third"]
  },
  menuIcons: {
    title: "Menu Icons",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: ["Download", "Search"]
  }
});
