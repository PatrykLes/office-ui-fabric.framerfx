import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSuggestionsItem: React.SFC = props => {
  return <System.SuggestionsItem {...props} style={style} />;
};

export const SuggestionsItem = withHOC(InnerSuggestionsItem);

SuggestionsItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SuggestionsItem, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  showRemoveButton: {
    title: "ShowRemoveButton",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isSelectedOverride: {
    title: "IsSelectedOverride",
    defaultValue: false,
    type: ControlType.Boolean
  },
  removeButtonAriaLabel: {
    title: "RemoveButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  }
});
