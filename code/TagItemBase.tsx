import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTagItemBase: React.SFC = props => {
  return <System.TagItemBase {...props} style={style} />;
};

export const TagItemBase = withHOC(InnerTagItemBase);

TagItemBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TagItemBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  enableTagFocusInDisabledPicker: {
    title: "EnableTagFocusInDisabledPicker",
    defaultValue: false,
    type: ControlType.Boolean
  },
  index: { title: "Index", type: ControlType.Number },
  selected: {
    title: "Selected",
    defaultValue: false,
    type: ControlType.Boolean
  },
  key: { title: "Key", defaultValue: "", type: ControlType.String },
  removeButtonAriaLabel: {
    title: "RemoveButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
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
