import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDocumentCardPreview: React.SFC = props => {
  return <System.DocumentCardPreview {...props} style={style} />;
};

export const DocumentCardPreview = withHOC(InnerDocumentCardPreview);

DocumentCardPreview.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DocumentCardPreview, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
