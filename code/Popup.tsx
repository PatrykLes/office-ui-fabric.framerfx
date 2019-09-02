import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPopup: React.SFC = props => {
  return <System.Popup {...props} style={style} />;
};

export const Popup = withHOC(InnerPopup);

Popup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Popup, {
  role: { title: "Role", defaultValue: "", type: ControlType.String },
  ariaLabel: { title: "AriaLabel", defaultValue: "", type: ControlType.String },
  ariaLabelledBy: {
    title: "AriaLabelledBy",
    defaultValue: "",
    type: ControlType.String
  },
  ariaDescribedBy: {
    title: "AriaDescribedBy",
    defaultValue: "",
    type: ControlType.String
  },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  shouldRestoreFocus: {
    title: "ShouldRestoreFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
