import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDocumentCardDetails: React.SFC = props => {
  return <System.DocumentCardDetails {...props} style={style} />;
};

export const DocumentCardDetails = withHOC(InnerDocumentCardDetails);

DocumentCardDetails.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DocumentCardDetails, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
