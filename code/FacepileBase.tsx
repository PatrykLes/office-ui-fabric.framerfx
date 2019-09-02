import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFacepileBase: React.SFC = props => {
  return <System.FacepileBase {...props} style={style} />;
};

export const FacepileBase = withHOC(InnerFacepileBase);

FacepileBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FacepileBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  maxDisplayablePersonas: {
    title: "MaxDisplayablePersonas",
    type: ControlType.Number
  },
  personaSize: { title: "PersonaSize", type: ControlType.Number },
  ariaDescription: {
    title: "AriaDescription",
    defaultValue: "",
    type: ControlType.String
  },
  showAddButton: {
    title: "ShowAddButton",
    defaultValue: false,
    type: ControlType.Boolean
  },
  overflowButtonType: { title: "OverflowButtonType", type: ControlType.Number }
});
