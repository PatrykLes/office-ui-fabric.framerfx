import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBaseFloatingPicker: React.SFC = props => {
  return <System.BaseFloatingPicker {...props} style={style} />;
};

export const BaseFloatingPicker = withHOC(InnerBaseFloatingPicker);

BaseFloatingPicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(BaseFloatingPicker, {
  resolveDelay: { title: "ResolveDelay", type: ControlType.Number },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  searchingText: {
    title: "SearchingText",
    defaultValue: "",
    type: ControlType.String
  },
  calloutWidth: { title: "CalloutWidth", type: ControlType.Number }
});
