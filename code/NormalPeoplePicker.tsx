import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNormalPeoplePicker: React.SFC = props => {
  return <System.NormalPeoplePicker {...props} style={style} />;
};

export const NormalPeoplePicker = withHOC(InnerNormalPeoplePicker);

NormalPeoplePicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NormalPeoplePicker, {
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
