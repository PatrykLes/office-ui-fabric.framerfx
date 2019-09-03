import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCompactPeoplePicker: React.SFC = props => {
  return <System.CompactPeoplePicker {...props} style={style} />;
};

export const CompactPeoplePicker = withHOC(InnerCompactPeoplePicker);

CompactPeoplePicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CompactPeoplePicker, {
  resolveDelay: { title: "ResolveDelay", type: ControlType.Number },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  searchingText: {
    title: "SearchingText",
    defaultValue: "",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  itemLimit: { title: "ItemLimit", type: ControlType.Number },
  removeButtonAriaLabel: {
    title: "RemoveButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  enableSelectedSuggestionAlert: {
    title: "EnableSelectedSuggestionAlert",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
