import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDocumentCardLocation: React.SFC = props => {
  return <System.DocumentCardLocation {...props} style={style} />;
};

export const DocumentCardLocation = withHOC(InnerDocumentCardLocation);

DocumentCardLocation.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DocumentCardLocation, {
  location: { title: "Location", defaultValue: "", type: ControlType.String },
  locationHref: {
    title: "LocationHref",
    defaultValue: "",
    type: ControlType.String
  },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
