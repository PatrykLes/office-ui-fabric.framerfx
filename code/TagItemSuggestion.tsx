import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTagItemSuggestion: React.SFC = props => {
  return <System.TagItemSuggestion {...props} style={style} />;
};

export const TagItemSuggestion = withHOC(InnerTagItemSuggestion);

TagItemSuggestion.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TagItemSuggestion, {
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
