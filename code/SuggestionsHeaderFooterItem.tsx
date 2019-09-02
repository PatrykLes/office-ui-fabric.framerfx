import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSuggestionsHeaderFooterItem: React.SFC = props => {
  return <System.SuggestionsHeaderFooterItem {...props} style={style} />;
};

export const SuggestionsHeaderFooterItem = withHOC(
  InnerSuggestionsHeaderFooterItem
);

SuggestionsHeaderFooterItem.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SuggestionsHeaderFooterItem, {
  isSelected: {
    title: "IsSelected",
    defaultValue: false,
    type: ControlType.Boolean
  },
  id: { title: "Id", defaultValue: "", type: ControlType.String },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
