import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerKeytipData: React.SFC = props => {
  return <System.KeytipData {...props} style={style} />;
};

export const KeytipData = withHOC(InnerKeytipData);

KeytipData.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(KeytipData, {
  ariaDescribedBy: {
    title: "AriaDescribedBy",
    defaultValue: "",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
