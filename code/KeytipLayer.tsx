import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerKeytipLayer: React.SFC = props => {
  return <System.KeytipLayer {...props} style={style} />;
};

export const KeytipLayer = withHOC(InnerKeytipLayer);

KeytipLayer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(KeytipLayer, {
  content: { title: "Content", defaultValue: "", type: ControlType.String }
});
