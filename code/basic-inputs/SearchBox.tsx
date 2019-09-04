import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { compose } from "../utils/compose";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";

const InnerSearchBox: React.SFC = ({ ["children"]: _, ...props }) => {
  const onChange = React.useCallback(
    (e, searchTerm) => props.onChange(searchTerm),
    [props.onChange]
  );
  return <System.SearchBox {...props} onChange={onChange} />;
};

export const SearchBox = compose(
  withHOC,
  withManagedState
)(InnerSearchBox);

SearchBox.defaultProps = {
  width: 274,
  height: 32,
  valuePropName: "value"
};

addPropertyControls(SearchBox, {
  placeholder: {
    title: "Placeholder",
    defaultValue: "Search",
    type: ControlType.String
  },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  underlined: {
    title: "Underlined",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disableAnimation: {
    title: "DisableAnimation",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ...WithManagedStatePropertyControls
});
