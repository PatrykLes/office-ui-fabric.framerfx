import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerLink: React.SFC = props => {
  return <System.Link {...props} style={style} />;
};

export const Link = withHOC(InnerLink);

Link.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Link, {
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  as: { title: "As", defaultValue: "", type: ControlType.String },
  type: { title: "Type", defaultValue: "", type: ControlType.String },
  href: { title: "Href", defaultValue: "", type: ControlType.String },
  hrefLang: { title: "HrefLang", defaultValue: "", type: ControlType.String },
  media: { title: "Media", defaultValue: "", type: ControlType.String },
  rel: { title: "Rel", defaultValue: "", type: ControlType.String },
  target: { title: "Target", defaultValue: "", type: ControlType.String },
  autoFocus: {
    title: "AutoFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  form: { title: "Form", defaultValue: "", type: ControlType.String },
  formAction: {
    title: "FormAction",
    defaultValue: "",
    type: ControlType.String
  },
  formEncType: {
    title: "FormEncType",
    defaultValue: "",
    type: ControlType.String
  },
  formMethod: {
    title: "FormMethod",
    defaultValue: "",
    type: ControlType.String
  },
  formNoValidate: {
    title: "FormNoValidate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  formTarget: {
    title: "FormTarget",
    defaultValue: "",
    type: ControlType.String
  },
  name: { title: "Name", defaultValue: "", type: ControlType.String },
  value: { title: "Value", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
