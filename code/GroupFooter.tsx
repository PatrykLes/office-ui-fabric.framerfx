import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerGroupFooter: React.SFC = props => {
  return <System.GroupFooter {...props} style={style} />;
};

export const GroupFooter = withHOC(InnerGroupFooter);

GroupFooter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(GroupFooter, {
  compact: { title: "Compact", defaultValue: false, type: ControlType.Boolean },
  loadingText: {
    title: "LoadingText",
    defaultValue: "",
    type: ControlType.String
  },
  groupIndex: { title: "GroupIndex", type: ControlType.Number },
  groupLevel: { title: "GroupLevel", type: ControlType.Number },
  indentWidth: { title: "IndentWidth", type: ControlType.Number },
  selected: {
    title: "Selected",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isSelected: {
    title: "IsSelected",
    defaultValue: false,
    type: ControlType.Boolean
  },
  selectionMode: { title: "SelectionMode", type: ControlType.Number },
  footerText: {
    title: "FooterText",
    defaultValue: "",
    type: ControlType.String
  },
  showAllLinkText: {
    title: "ShowAllLinkText",
    defaultValue: "",
    type: ControlType.String
  },
  isCollapsedGroupSelectVisible: {
    title: "IsCollapsedGroupSelectVisible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
