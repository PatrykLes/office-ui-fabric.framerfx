import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerKeytip: React.SFC = props => {
  return <System.Keytip {...props} style={style} />;
};

export const Keytip = withHOC(InnerKeytip);

Keytip.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Keytip, {
  content: { title: "Content", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  visible: { title: "Visible", defaultValue: false, type: ControlType.Boolean },
  hasDynamicChildren: {
    title: "HasDynamicChildren",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasMenu: { title: "HasMenu", defaultValue: false, type: ControlType.Boolean }
});
