import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBreadcrumb: React.SFC = props => {
  return <System.Breadcrumb {...props} style={style} />;
};

export const Breadcrumb = withHOC(InnerBreadcrumb);

Breadcrumb.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Breadcrumb, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  maxDisplayedItems: { title: "MaxDisplayedItems", type: ControlType.Number },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  overflowAriaLabel: {
    title: "OverflowAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  overflowIndex: { title: "OverflowIndex", type: ControlType.Number },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
