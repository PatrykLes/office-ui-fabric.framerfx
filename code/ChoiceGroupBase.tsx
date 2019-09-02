import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerChoiceGroupBase: React.SFC = props => {
  return <System.ChoiceGroupBase {...props} style={style} />;
};

export const ChoiceGroupBase = withHOC(InnerChoiceGroupBase);

ChoiceGroupBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ChoiceGroupBase, {
  defaultSelectedKey: {
    title: "DefaultSelectedKey",
    defaultValue: "",
    type: ControlType.String
  },
  selectedKey: {
    title: "SelectedKey",
    defaultValue: "",
    type: ControlType.String
  },
  label: { title: "Label", defaultValue: "", type: ControlType.String },
  ariaLabelledBy: {
    title: "AriaLabelledBy",
    defaultValue: "",
    type: ControlType.String
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
