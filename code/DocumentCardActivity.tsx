import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDocumentCardActivity: React.SFC = props => {
  return <System.DocumentCardActivity {...props} style={style} />;
};

export const DocumentCardActivity = withHOC(InnerDocumentCardActivity);

DocumentCardActivity.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DocumentCardActivity, {
  activity: { title: "Activity", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
