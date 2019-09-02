import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDocumentCardActions: React.SFC = props => {
  return <System.DocumentCardActions {...props} style={style} />;
};

export const DocumentCardActions = withHOC(InnerDocumentCardActions);

DocumentCardActions.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DocumentCardActions, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
