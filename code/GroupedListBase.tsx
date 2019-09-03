import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerGroupedListBase: React.SFC = props => {
  return <System.GroupedListBase {...props} style={style} />;
};

export const GroupedListBase = withHOC(InnerGroupedListBase);

GroupedListBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(GroupedListBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  compact: { title: "Compact", defaultValue: false, type: ControlType.Boolean },
  selectionMode: { title: "SelectionMode", type: ControlType.Number },
  usePageCache: {
    title: "UsePageCache",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
