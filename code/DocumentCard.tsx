import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDocumentCard: React.SFC = props => {
  return <System.DocumentCard {...props} style={style} />;
};

export const DocumentCard = withHOC(InnerDocumentCard);

DocumentCard.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DocumentCard, {
  type: { title: "Type", type: ControlType.Number },
  onClickHref: {
    title: "OnClickHref",
    defaultValue: "",
    type: ControlType.String
  },
  role: { title: "Role", defaultValue: "", type: ControlType.String },
  accentColor: {
    title: "AccentColor",
    defaultValue: "",
    type: ControlType.String
  },
  children: { title: "Children", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
