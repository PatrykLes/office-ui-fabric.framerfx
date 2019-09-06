import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { people } from "@uifabric/example-data";
import { withHOC } from "../utils/withHOC";

const suggestionProps: System.IBasePickerSuggestionsProps = {
  suggestionsHeaderText: "Suggested People",
  mostRecentlyUsedHeaderText: "Suggested Contacts",
  noResultsFoundText: "No results found",
  loadingText: "Loading",
  showRemoveButtons: true,
  suggestionsAvailableAlertText: "People Picker Suggestions available",
  suggestionsContainerAriaLabel: "Suggested contacts"
};

const InnerCompactPeoplePicker: React.SFC = props => {
  const [peopleList, setPeopleList] = React.useState(people);

  const filterPersonasByText = React.useCallback(
    (filterText: string): System.IPersonaProps[] => {
      return peopleList.filter(
        item => item.text.toLowerCase().indexOf(filterText.toLowerCase()) === 0
      );
    },
    [peopleList]
  );

  const onResolveSuggestions = React.useCallback(
    (
      filterText: string,
      currentPersonas: System.IPersonaProps[],
      limitResults?: number
    ): System.IPersonaProps[] | Promise<System.IPersonaProps[]> => {
      if (filterText) {
        let filteredPersonas: System.IPersonaProps[] = filterPersonasByText(
          filterText
        );

        filteredPersonas = limitResults
          ? filteredPersonas.splice(0, limitResults)
          : filteredPersonas;

        return filteredPersonas;
      } else {
        return peopleList;
      }
    },
    [filterPersonasByText, peopleList]
  );

  return (
    <System.CompactPeoplePicker
      {...props}
      onResolveSuggestions={onResolveSuggestions}
      getTextFromItem={(persona: System.IPersonaProps) => persona.text}
      pickerSuggestionsProps={suggestionProps}
    />
  );
};

export const CompactPeoplePicker = withHOC(InnerCompactPeoplePicker);

CompactPeoplePicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CompactPeoplePicker, {
  resolveDelay: {
    title: "ResolveDelay",
    type: ControlType.Number,
    defaultValue: 50,
    unit: "ms"
  },
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
