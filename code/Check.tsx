import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCheck: React.SFC = props => {
  return <System.Check {...props} style={style} />;
};

export const Check = withHOC(InnerCheck);

Check.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Check, {
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  alwaysShowCheck: {
    title: "AlwaysShowCheck",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  useFastIcons: {
    title: "UseFastIcons",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
