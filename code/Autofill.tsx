import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAutofill: React.SFC = props => {
  return <System.Autofill {...props} style={style} />;
};

export const Autofill = withHOC(InnerAutofill);

Autofill.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Autofill, {
  suggestedDisplayValue: {
    title: "SuggestedDisplayValue",
    defaultValue: "",
    type: ControlType.String
  },
  defaultVisibleValue: {
    title: "DefaultVisibleValue",
    defaultValue: "",
    type: ControlType.String
  },
  preventValueSelection: {
    title: "PreventValueSelection",
    defaultValue: false,
    type: ControlType.Boolean
  },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
