import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerColorPickerGridCell: React.SFC = props => {
  return <System.ColorPickerGridCell {...props} style={style} />;
};

export const ColorPickerGridCell = withHOC(InnerColorPickerGridCell);

ColorPickerGridCell.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ColorPickerGridCell, {
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  color: { title: "Color", defaultValue: "", type: ControlType.String },
  index: { title: "Index", type: ControlType.Number },
  circle: { title: "Circle", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  selected: {
    title: "Selected",
    defaultValue: false,
    type: ControlType.Boolean
  },
  height: { title: "Height", type: ControlType.Number },
  width: { title: "Width", type: ControlType.Number },
  borderWidth: { title: "BorderWidth", type: ControlType.Number }
});
