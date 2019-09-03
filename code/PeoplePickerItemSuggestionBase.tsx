import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPeoplePickerItemSuggestionBase: React.SFC = props => {
  return <System.PeoplePickerItemSuggestionBase {...props} style={style} />;
};

export const PeoplePickerItemSuggestionBase = withHOC(
  InnerPeoplePickerItemSuggestionBase
);

PeoplePickerItemSuggestionBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(PeoplePickerItemSuggestionBase, {
  compact: { title: "Compact", defaultValue: false, type: ControlType.Boolean },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
