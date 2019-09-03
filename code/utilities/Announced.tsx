import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAnnounced: React.SFC = props => {
  return <System.Announced {...props} style={style} />;
};

export const Announced = withHOC(InnerAnnounced);

Announced.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Announced, {
  message: { title: "Message", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
