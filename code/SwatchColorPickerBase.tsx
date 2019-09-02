import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSwatchColorPickerBase: React.SFC = props => {
  return <System.SwatchColorPickerBase {...props} style={style} />;
};

export const SwatchColorPickerBase = withHOC(InnerSwatchColorPickerBase);

SwatchColorPickerBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SwatchColorPickerBase, {
  columnCount: { title: "ColumnCount", type: ControlType.Number },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  cellShape: {
    title: "CellShape",
    options: ["circle", "square"],
    optionTitles: ["Circle", "Square"],
    defaultValue: "circle",
    type: ControlType.Enum
  },
  selectedId: {
    title: "SelectedId",
    defaultValue: "",
    type: ControlType.String
  },
  isControlled: {
    title: "IsControlled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  positionInSet: { title: "PositionInSet", type: ControlType.Number },
  setSize: { title: "SetSize", type: ControlType.Number },
  shouldFocusCircularNavigate: {
    title: "ShouldFocusCircularNavigate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  doNotContainWithinFocusZone: {
    title: "DoNotContainWithinFocusZone",
    defaultValue: false,
    type: ControlType.Boolean
  },
  cellMargin: { title: "CellMargin", type: ControlType.Number },
  cellHeight: { title: "CellHeight", type: ControlType.Number },
  cellWidth: { title: "CellWidth", type: ControlType.Number },
  cellBorderWidth: { title: "CellBorderWidth", type: ControlType.Number },
  focusOnHover: {
    title: "FocusOnHover",
    defaultValue: false,
    type: ControlType.Boolean
  },
  mouseLeaveParentSelector: {
    title: "MouseLeaveParentSelector",
    defaultValue: "",
    type: ControlType.String
  }
});
