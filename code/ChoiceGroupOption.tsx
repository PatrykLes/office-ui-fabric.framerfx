import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerChoiceGroupOption: React.SFC = props => {
  return <System.ChoiceGroupOption {...props} style={style} />;
};

export const ChoiceGroupOption = withHOC(InnerChoiceGroupOption);

ChoiceGroupOption.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ChoiceGroupOption, {
  focused: { title: "Focused", defaultValue: false, type: ControlType.Boolean },
  required: {
    title: "Required",
    defaultValue: false,
    type: ControlType.Boolean
  },
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  key: { title: "Key", defaultValue: "", type: ControlType.String },
  text: { title: "Text", defaultValue: "", type: ControlType.String },
  imageSrc: { title: "ImageSrc", defaultValue: "", type: ControlType.String },
  imageAlt: { title: "ImageAlt", defaultValue: "", type: ControlType.String },
  selectedImageSrc: {
    title: "SelectedImageSrc",
    defaultValue: "",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  labelId: { title: "LabelId", defaultValue: "", type: ControlType.String },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
