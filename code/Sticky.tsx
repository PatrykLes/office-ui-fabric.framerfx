import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSticky: React.SFC = props => {
  return <System.Sticky {...props} style={style} />;
};

export const Sticky = withHOC(InnerSticky);

Sticky.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Sticky, {
  stickyClassName: {
    title: "StickyClassName",
    defaultValue: "",
    type: ControlType.String
  },
  stickyBackgroundColor: {
    title: "StickyBackgroundColor",
    defaultValue: "",
    type: ControlType.String
  },
  stickyPosition: { title: "StickyPosition", type: ControlType.Number },
  isScrollSynced: {
    title: "IsScrollSynced",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
