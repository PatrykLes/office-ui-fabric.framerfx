import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPivotBase: React.SFC = props => {
  return <System.PivotBase {...props} style={style} />;
};

export const PivotBase = withHOC(InnerPivotBase);

PivotBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(PivotBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  defaultSelectedKey: {
    title: "DefaultSelectedKey",
    defaultValue: "",
    type: ControlType.String
  },
  defaultSelectedIndex: {
    title: "DefaultSelectedIndex",
    type: ControlType.Number
  },
  initialSelectedIndex: {
    title: "InitialSelectedIndex",
    type: ControlType.Number
  },
  initialSelectedKey: {
    title: "InitialSelectedKey",
    defaultValue: "",
    type: ControlType.String
  },
  selectedKey: {
    title: "SelectedKey",
    defaultValue: "",
    type: ControlType.String
  },
  linkSize: { title: "LinkSize", type: ControlType.Number },
  linkFormat: { title: "LinkFormat", type: ControlType.Number },
  headersOnly: {
    title: "HeadersOnly",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
