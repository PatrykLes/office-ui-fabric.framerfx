import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDetailsList: React.SFC = props => {
  return <System.DetailsList {...props} style={style} />;
};

export const DetailsList = withHOC(InnerDetailsList);

DetailsList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DetailsList, {
  setKey: { title: "SetKey", defaultValue: "", type: ControlType.String },
  isPlaceholderData: {
    title: "IsPlaceholderData",
    defaultValue: false,
    type: ControlType.Boolean
  },
  initialFocusedIndex: {
    title: "InitialFocusedIndex",
    type: ControlType.Number
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  indentWidth: { title: "IndentWidth", type: ControlType.Number },
  selectionMode: { title: "SelectionMode", type: ControlType.Number },
  selectionPreservedOnEmptyClick: {
    title: "SelectionPreservedOnEmptyClick",
    defaultValue: false,
    type: ControlType.Boolean
  },
  layoutMode: { title: "LayoutMode", type: ControlType.Number },
  checkboxVisibility: { title: "CheckboxVisibility", type: ControlType.Number },
  isHeaderVisible: {
    title: "IsHeaderVisible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  constrainMode: { title: "ConstrainMode", type: ControlType.Number },
  ariaLabelForListHeader: {
    title: "AriaLabelForListHeader",
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
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  checkButtonAriaLabel: {
    title: "CheckButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  ariaLabelForGrid: {
    title: "AriaLabelForGrid",
    defaultValue: "",
    type: ControlType.String
  },
  shouldApplyApplicationRole: {
    title: "ShouldApplyApplicationRole",
    defaultValue: false,
    type: ControlType.Boolean
  },
  minimumPixelsForDrag: {
    title: "MinimumPixelsForDrag",
    type: ControlType.Number
  },
  compact: { title: "Compact", defaultValue: false, type: ControlType.Boolean },
  usePageCache: {
    title: "UsePageCache",
    defaultValue: false,
    type: ControlType.Boolean
  },
  checkboxCellClassName: {
    title: "CheckboxCellClassName",
    defaultValue: "",
    type: ControlType.String
  },
  enterModalSelectionOnTouch: {
    title: "EnterModalSelectionOnTouch",
    defaultValue: false,
    type: ControlType.Boolean
  },
  useReducedRowRenderer: {
    title: "UseReducedRowRenderer",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disableSelectionZone: {
    title: "DisableSelectionZone",
    defaultValue: false,
    type: ControlType.Boolean
  },
  enableUpdateAnimations: {
    title: "EnableUpdateAnimations",
    defaultValue: false,
    type: ControlType.Boolean
  },
  useFastIcons: {
    title: "UseFastIcons",
    defaultValue: false,
    type: ControlType.Boolean
  },
  skipViewportMeasures: {
    title: "SkipViewportMeasures",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
