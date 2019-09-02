import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDialogFooterBase: React.SFC = props => {
  return <System.DialogFooterBase {...props} style={style} />;
};

export const DialogFooterBase = withHOC(InnerDialogFooterBase);

DialogFooterBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DialogFooterBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
