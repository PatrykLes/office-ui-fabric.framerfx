import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerTagPicker: React.SFC = ({ items, ...props }) => {
  items = items.map(item => ({
    key: item,
    name: item
  }));

  const onFilterChanged = React.useCallback(
    (filterText: string, tagList: System.ITag[]) => {
      return filterText
        ? items
            .filter(
              tag =>
                tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0
            )
            .filter(tag => {
              if (!tagList || !tagList.length || tagList.length === 0) {
                return true;
              }
              return (
                tagList.filter(compareTag => compareTag.key === tag.key)
                  .length === 0
              );
            })
        : [];
    },
    [items]
  );

  return (
    <System.TagPicker
      {...props}
      onResolveSuggestions={onFilterChanged}
      getTextFromItem={item => item.name}
      items={items}
    />
  );
};

export const TagPicker = withHOC(InnerTagPicker);

TagPicker.defaultProps = {
  width: 210,
  height: 50
};

addPropertyControls(TagPicker, {
  resolveDelay: { title: "ResolveDelay", type: ControlType.Number },
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
  items: {
    title: "Items",
    type: ControlType.Array,
    defaultValue: ["Tag 1", "Tag 2", "Tag 3"],
    propertyControl: {
      type: ControlType.String
    }
  },
  itemLimit: { title: "ItemLimit", type: ControlType.Number },
  enableSelectedSuggestionAlert: {
    title: "EnableSelectedSuggestionAlert",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
