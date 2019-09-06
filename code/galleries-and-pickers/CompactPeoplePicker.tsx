import { people } from "@uifabric/example-data";
import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
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
  width: 250,
  height: 100
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
    defaultValue: "Searching",
    type: ControlType.String
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  itemLimit: {
    title: "ItemLimit",
    type: ControlType.Number,
    min: 1,
    max: 20,
    displayStepper: true,
    defaultValue: 3
  }
});
