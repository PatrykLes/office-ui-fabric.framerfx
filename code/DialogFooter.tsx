import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDialogFooter: React.SFC = props => {
  return <System.DialogFooter {...props} style={style} />;
};

export const DialogFooter = withHOC(InnerDialogFooter);

DialogFooter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogFooter, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
