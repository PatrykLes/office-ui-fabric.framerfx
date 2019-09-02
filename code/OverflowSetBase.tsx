import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerOverflowSetBase: React.SFC = props => {
  return <System.OverflowSetBase {...props} style={style} />;
};

export const OverflowSetBase = withHOC(InnerOverflowSetBase);

OverflowSetBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(OverflowSetBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  vertical: {
    title: "Vertical",
    defaultValue: false,
    type: ControlType.Boolean
  },
  doNotContainWithinFocusZone: {
    title: "DoNotContainWithinFocusZone",
    defaultValue: false,
    type: ControlType.Boolean
  },
  role: { title: "Role", defaultValue: "", type: ControlType.String }
});
