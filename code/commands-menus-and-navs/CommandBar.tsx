import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCommandBar: React.SFC = props => {
  return <System.CommandBar {...props} style={style} />;
};

export const CommandBar = withHOC(InnerCommandBar);

CommandBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CommandBar, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
