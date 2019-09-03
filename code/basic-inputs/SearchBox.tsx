import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerSearchBox: React.SFC = ({ children, ...props }) => {
  return <System.SearchBox {...props} />;
};

export const SearchBox = withHOC(InnerSearchBox);

SearchBox.defaultProps = {
  width: 274,
  height: 32
};

addPropertyControls(SearchBox, {
  placeholder: {
    title: "Placeholder",
    defaultValue: "Search",
    type: ControlType.String
  },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
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
