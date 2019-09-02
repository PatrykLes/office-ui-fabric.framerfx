import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerLayerHost: React.SFC = props => {
  return <System.LayerHost {...props} style={style} />;
};

export const LayerHost = withHOC(InnerLayerHost);

LayerHost.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(LayerHost, {
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
