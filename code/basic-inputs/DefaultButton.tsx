import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";

const InnerDefaultButton = props => {
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
