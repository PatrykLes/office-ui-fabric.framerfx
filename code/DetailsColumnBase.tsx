import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDetailsColumnBase: React.SFC = props => {
  return <System.DetailsColumnBase {...props} style={style} />;
};

export const DetailsColumnBase = withHOC(InnerDetailsColumnBase);

DetailsColumnBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DetailsColumnBase, {
  columnIndex: { title: "ColumnIndex", type: ControlType.Number },
  parentId: { title: "ParentId", defaultValue: "", type: ControlType.String },
  isDraggable: {
    title: "IsDraggable",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isDropped: {
    title: "IsDropped",
    defaultValue: false,
    type: ControlType.Boolean
  },
  useFastIcons: {
    title: "UseFastIcons",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
