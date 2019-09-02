import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerLayer: React.SFC = props => {
  return <System.Layer {...props} style={style} />;
};

export const Layer = withHOC(InnerLayer);

Layer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Layer, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  hostId: { title: "HostId", defaultValue: "", type: ControlType.String },
  eventBubblingEnabled: {
    title: "EventBubblingEnabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  insertFirst: {
    title: "InsertFirst",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
