import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAnnouncedBase: React.SFC = props => {
  return <System.AnnouncedBase {...props} style={style} />;
};

export const AnnouncedBase = withHOC(InnerAnnouncedBase);

AnnouncedBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(AnnouncedBase, {
  message: { title: "Message", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
