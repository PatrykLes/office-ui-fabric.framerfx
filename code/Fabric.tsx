import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFabric: React.SFC = props => {
  return <System.Fabric {...props} style={style} />;
};

export const Fabric = withHOC(InnerFabric);

Fabric.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Fabric, {
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
