import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerKeytipLayerBase: React.SFC = props => {
  return <System.KeytipLayerBase {...props} style={style} />;
};

export const KeytipLayerBase = withHOC(InnerKeytipLayerBase);

KeytipLayerBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(KeytipLayerBase, {
  content: { title: "Content", defaultValue: "", type: ControlType.String }
});
