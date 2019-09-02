import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSuggestionsCore: React.SFC = props => {
  return <System.SuggestionsCore {...props} style={style} />;
};

export const SuggestionsCore = withHOC(InnerSuggestionsCore);

SuggestionsCore.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SuggestionsCore, {
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
