import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";
import { colors } from "../canvas";

const InnerSwatchColorPicker = ({ cellSize, colors, ...props }) => {
  const colorCells = colors.map(color => {
    return { id: color, color, label: color };
  });

  return (
    <System.SwatchColorPicker
      {...props}
      cellHeight={cellSize}
      cellWidth={cellSize}
      columnCount={colorCells.length}
      colorCells={colorCells}
    />
  );
};

export const SwatchColorPicker = withHOC(InnerSwatchColorPicker);

SwatchColorPicker.defaultProps = {
  width: 200,
  height: 100
};

addPropertyControls(SwatchColorPicker, {
  cellShape: {
    title: "CellShape",
    options: ["circle", "square"],
    optionTitles: ["Circle", "Square"],
    defaultValue: "circle",
    type: ControlType.Enum
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  cellMargin: {
    title: "CellMargin",
    type: ControlType.Number,
    min: 1,
    max: 200,
    defaultValue: 5
  },
  cellSize: {
    title: "CellHeight",
    type: ControlType.Number,
    min: 1,
    max: 200,
    defaultValue: 50
  },
  cellBorderWidth: { title: "CellBorderWidth", type: ControlType.Number },
  colors: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.Color
    },
    defaultValue: [
      colors["exchange.primary"],
      colors["office.primary"],
      colors["excel.primary"]
    ]
  }
});
