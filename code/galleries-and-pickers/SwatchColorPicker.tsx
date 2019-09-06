import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const exampleColorSwatches: System.IColorCellProps[] = [
  { id: "a", label: "orange", color: "#ca5010" },
  { id: "b", label: "cyan", color: "#038387" },
  { id: "c", label: "blueMagenta", color: "#8764b8" },
  { id: "d", label: "magenta", color: "#881798" },
  { id: "e", label: "white", color: "#ffffff" }
];

const InnerSwatchColorPicker: React.SFC = props => {
  const [selectedColorId, setSelectedColorId] = React.useState(
    props.selectedId
  );

  return (
    <System.SwatchColorPicker
      {...props}
      selectedId={selectedColorId}
      columnCount={5}
      colorCells={exampleColorSwatches}
    />
  );
};

export const SwatchColorPicker = withHOC(InnerSwatchColorPicker);

SwatchColorPicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SwatchColorPicker, {
  columnCount: { title: "ColumnCount", type: ControlType.Number },
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
