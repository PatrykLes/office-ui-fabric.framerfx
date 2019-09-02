import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDocumentCardTitle: React.SFC = props => {
  return <System.DocumentCardTitle {...props} style={style} />;
};

export const DocumentCardTitle = withHOC(InnerDocumentCardTitle);

DocumentCardTitle.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DocumentCardTitle, {
  title: { title: "Title", defaultValue: "", type: ControlType.String },
  shouldTruncate: {
    title: "ShouldTruncate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showAsSecondaryTitle: {
    title: "ShowAsSecondaryTitle",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
