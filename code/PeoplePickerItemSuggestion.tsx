import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPeoplePickerItemSuggestion: React.SFC = props => {
  return <System.PeoplePickerItemSuggestion {...props} style={style} />;
};

export const PeoplePickerItemSuggestion = withHOC(
  InnerPeoplePickerItemSuggestion
);

PeoplePickerItemSuggestion.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(PeoplePickerItemSuggestion, {
  compact: { title: "Compact", defaultValue: false, type: ControlType.Boolean },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String }
});
