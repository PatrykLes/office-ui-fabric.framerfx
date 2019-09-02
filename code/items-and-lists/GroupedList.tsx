import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerGroupedList: React.SFC = props => {
  return <System.GroupedList {...props} style={style} />;
};

export const GroupedList = withHOC(InnerGroupedList);

GroupedList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(GroupedList, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  compact: { title: "Compact", defaultValue: false, type: ControlType.Boolean },
  selectionMode: { title: "SelectionMode", type: ControlType.Number },
  usePageCache: {
    title: "UsePageCache",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
