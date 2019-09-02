import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerGroupSpacer: React.SFC = props => {
  return <System.GroupSpacer {...props} style={style} />;
};

export const GroupSpacer = withHOC(InnerGroupSpacer);

GroupSpacer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(GroupSpacer, {
  count: { title: "Count", type: ControlType.Number },
  indentWidth: { title: "IndentWidth", type: ControlType.Number }
});
