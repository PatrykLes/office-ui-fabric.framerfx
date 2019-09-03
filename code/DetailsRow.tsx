import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDetailsRow: React.SFC = props => {
  return <System.DetailsRow {...props} style={style} />;
};

export const DetailsRow = withHOC(InnerDetailsRow);

DetailsRow.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DetailsRow, {
  itemIndex: { title: "ItemIndex", type: ControlType.Number },
  compact: { title: "Compact", defaultValue: false, type: ControlType.Boolean },
  collapseAllVisibility: {
    title: "CollapseAllVisibility",
    type: ControlType.Number
  },
  checkButtonAriaLabel: {
    title: "CheckButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  checkboxCellClassName: {
    title: "CheckboxCellClassName",
    defaultValue: "",
    type: ControlType.String
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  enableUpdateAnimations: {
    title: "EnableUpdateAnimations",
    defaultValue: false,
    type: ControlType.Boolean
  },
  useReducedRowRenderer: {
    title: "UseReducedRowRenderer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  useFastIcons: {
    title: "UseFastIcons",
    defaultValue: false,
    type: ControlType.Boolean
  },
  groupNestingDepth: { title: "GroupNestingDepth", type: ControlType.Number },
  indentWidth: { title: "IndentWidth", type: ControlType.Number },
  selectionMode: { title: "SelectionMode", type: ControlType.Number },
  checkboxVisibility: { title: "CheckboxVisibility", type: ControlType.Number },
  rowWidth: { title: "RowWidth", type: ControlType.Number }
});
