import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTagItemSuggestionBase: React.SFC = props => {
  return <System.TagItemSuggestionBase {...props} style={style} />;
};

export const TagItemSuggestionBase = withHOC(InnerTagItemSuggestionBase);

TagItemSuggestionBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TagItemSuggestionBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
