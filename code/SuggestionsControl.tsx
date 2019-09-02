import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSuggestionsControl: React.SFC = props => {
  return <System.SuggestionsControl {...props} style={style} />;
};

export const SuggestionsControl = withHOC(InnerSuggestionsControl);

SuggestionsControl.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SuggestionsControl, {
  suggestionsHeaderContainerAriaLabel: {
    title: "SuggestionsHeaderContainerAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  suggestionsFooterContainerAriaLabel: {
    title: "SuggestionsFooterContainerAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  suggestionsAvailableAlertText: {
    title: "SuggestionsAvailableAlertText",
    defaultValue: "",
    type: ControlType.String
  },
  suggestionsContainerAriaLabel: {
    title: "SuggestionsContainerAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  suggestionsItemClassName: {
    title: "SuggestionsItemClassName",
    defaultValue: "",
    type: ControlType.String
  },
  resultsMaximumNumber: {
    title: "ResultsMaximumNumber",
    type: ControlType.Number
  },
  showRemoveButtons: {
    title: "ShowRemoveButtons",
    defaultValue: false,
    type: ControlType.Boolean
  },
  shouldLoopSelection: {
    title: "ShouldLoopSelection",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
