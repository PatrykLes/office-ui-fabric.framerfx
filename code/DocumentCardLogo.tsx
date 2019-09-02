import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDocumentCardLogo: React.SFC = props => {
  return <System.DocumentCardLogo {...props} style={style} />;
};

export const DocumentCardLogo = withHOC(InnerDocumentCardLogo);

DocumentCardLogo.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DocumentCardLogo, {
  logoIcon: { title: "LogoIcon", defaultValue: "", type: ControlType.String },
  logoName: { title: "LogoName", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
