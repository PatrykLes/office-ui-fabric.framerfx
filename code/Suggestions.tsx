import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSuggestions: React.SFC = props => {
  return <System.Suggestions {...props} style={style} />;
};

export const Suggestions = withHOC(InnerSuggestions);

Suggestions.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Suggestions, {
  suggestionsHeaderText: {
    title: "SuggestionsHeaderText",
    defaultValue: "",
    type: ControlType.String
  },
  mostRecentlyUsedHeaderText: {
    title: "MostRecentlyUsedHeaderText",
    defaultValue: "",
    type: ControlType.String
  },
  searchForMoreText: {
    title: "SearchForMoreText",
    defaultValue: "",
    type: ControlType.String
  },
  forceResolveText: {
    title: "ForceResolveText",
    defaultValue: "",
    type: ControlType.String
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  suggestionsClassName: {
    title: "SuggestionsClassName",
    defaultValue: "",
    type: ControlType.String
  },
  searchErrorText: {
    title: "SearchErrorText",
    defaultValue: "",
    type: ControlType.String
  },
  noResultsFoundText: {
    title: "NoResultsFoundText",
    defaultValue: "",
    type: ControlType.String
  },
  suggestionsItemClassName: {
    title: "SuggestionsItemClassName",
    defaultValue: "",
    type: ControlType.String
  },
  moreSuggestionsAvailable: {
    title: "MoreSuggestionsAvailable",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isLoading: {
    title: "IsLoading",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isSearching: {
    title: "IsSearching",
    defaultValue: false,
    type: ControlType.Boolean
  },
  loadingText: {
    title: "LoadingText",
    defaultValue: "",
    type: ControlType.String
  },
  searchingText: {
    title: "SearchingText",
    defaultValue: "",
    type: ControlType.String
  },
  isMostRecentlyUsedVisible: {
    title: "IsMostRecentlyUsedVisible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isResultsFooterVisible: {
    title: "IsResultsFooterVisible",
    defaultValue: false,
    type: ControlType.Boolean
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
  removeSuggestionAriaLabel: {
    title: "RemoveSuggestionAriaLabel",
    defaultValue: "",
    type: ControlType.String
  },
  suggestionsListId: {
    title: "SuggestionsListId",
    defaultValue: "",
    type: ControlType.String
  }
});
