import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerDefaultButton: React.SFC = props => {
  const menuProps =
    props.split && !!props.menuItems.length
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
  return <System.DefaultButton {...props} menuProps={menuProps} />;
};

export const DefaultButton = withHOC(InnerDefaultButton);

DefaultButton.defaultProps = {
  width: 88,
  height: 33
};

addPropertyControls(DefaultButton, {
  text: { title: "Text", defaultValue: "Button", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  },
  secondaryText: {
    title: "SecondaryText",
    defaultValue: "",
    type: ControlType.String
  },
  primary: { title: "Primary", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  allowDisabledFocus: {
    title: "AllowDisabledFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  primaryDisabled: {
    title: "PrimaryDisabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  toggle: { title: "Toggle", defaultValue: false, type: ControlType.Boolean },
  buttonType: { title: "ButtonType", type: ControlType.Number },
  split: { title: "Split", defaultValue: false, type: ControlType.Boolean },
  menuItems: {
    title: "Menu Items",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: [],
    hidden: props => !props.split
  },
  menuIcons: {
    title: "Menu Icons",
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: [],
    hidden: props => !props.split
  }
});
