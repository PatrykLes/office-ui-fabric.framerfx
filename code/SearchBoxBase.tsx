import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSearchBoxBase: React.SFC = props => {
  return <System.SearchBoxBase {...props} style={style} />;
};

export const SearchBoxBase = withHOC(InnerSearchBoxBase);

SearchBoxBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SearchBoxBase, {
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  },
  labelText: { title: "LabelText", defaultValue: "", type: ControlType.String },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  defaultValue: {
    title: "DefaultValue",
    defaultValue: "",
    type: ControlType.String
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  underlined: {
    title: "Underlined",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disableAnimation: {
    title: "DisableAnimation",
    defaultValue: false,
    type: ControlType.Boolean
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
