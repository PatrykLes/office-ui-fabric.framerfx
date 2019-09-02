import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDialogContent: React.SFC = props => {
  return <System.DialogContent {...props} style={style} />;
};

export const DialogContent = withHOC(InnerDialogContent);

DialogContent.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogContent, {
  isMultiline: {
    title: "IsMultiline",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showCloseButton: {
    title: "ShowCloseButton",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  subTextId: { title: "SubTextId", defaultValue: "", type: ControlType.String },
  subText: { title: "SubText", defaultValue: "", type: ControlType.String },
  titleId: { title: "TitleId", defaultValue: "", type: ControlType.String },
  title: { title: "Title", defaultValue: "", type: ControlType.String },
  responsiveMode: { title: "ResponsiveMode", type: ControlType.Number },
  closeButtonAriaLabel: {
    title: "CloseButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  type: { title: "Type", type: ControlType.Number },
  draggableHeaderClassName: {
    title: "DraggableHeaderClassName",
    defaultValue: "",
    type: ControlType.String
  }
});
