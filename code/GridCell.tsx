import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerGridCell: React.SFC = props => {
  return <System.GridCell {...props} style={style} />;
};

export const GridCell = withHOC(InnerGridCell);

GridCell.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(GridCell, {
  id: { title: "Id", defaultValue: "", type: ControlType.String },
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
  role: { title: "Role", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  index: { title: "Index", type: ControlType.Number },
  label: { title: "Label", defaultValue: "", type: ControlType.String }
});
