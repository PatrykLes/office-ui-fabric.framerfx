import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDocumentCardStatus: React.SFC = props => {
  return <System.DocumentCardStatus {...props} style={style} />;
};

export const DocumentCardStatus = withHOC(InnerDocumentCardStatus);

DocumentCardStatus.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DocumentCardStatus, {
  statusIcon: {
    title: "StatusIcon",
    defaultValue: "",
    type: ControlType.String
  },
  status: { title: "Status", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
