import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTagPickerBase: React.SFC = props => {
  return <System.TagPickerBase {...props} style={style} />;
};

export const TagPickerBase = withHOC(InnerTagPickerBase);

TagPickerBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TagPickerBase, {
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  key: { title: "Key", defaultValue: "", type: ControlType.String }
});
