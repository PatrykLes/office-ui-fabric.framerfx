import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDetailsHeader: React.SFC = props => {
  return <System.DetailsHeader {...props} style={style} />;
};

export const DetailsHeader = withHOC(InnerDetailsHeader);

DetailsHeader.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DetailsHeader, {
  layoutMode: { title: "LayoutMode", type: ControlType.Number },
  collapseAllVisibility: {
    title: "CollapseAllVisibility",
    type: ControlType.Number
  },
  isAllCollapsed: {
    title: "IsAllCollapsed",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  ariaLabelForToggleAllGroupsButton: {
    title: "AriaLabelForToggleAllGroupsButton",
    defaultValue: "",
    type: ControlType.String
  },
  ariaLabelForSelectAllCheckbox: {
    title: "AriaLabelForSelectAllCheckbox",
    defaultValue: "",
    type: ControlType.String
  },
  ariaLabelForSelectionColumn: {
    title: "AriaLabelForSelectionColumn",
    defaultValue: "",
    type: ControlType.String
  },
  selectAllVisibility: {
    title: "SelectAllVisibility",
    type: ControlType.Number
  },
  minimumPixelsForDrag: {
    title: "MinimumPixelsForDrag",
    type: ControlType.Number
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
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
