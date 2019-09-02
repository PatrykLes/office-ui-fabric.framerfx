import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFocusTrapZone: React.SFC = props => {
  return <System.FocusTrapZone {...props} style={style} />;
};

export const FocusTrapZone = withHOC(InnerFocusTrapZone);

FocusTrapZone.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(FocusTrapZone, {
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ariaLabelledBy: {
    title: "AriaLabelledBy",
    defaultValue: "",
    type: ControlType.String
  },
  isClickableOutsideFocusTrap: {
    title: "IsClickableOutsideFocusTrap",
    defaultValue: false,
    type: ControlType.Boolean
  },
  ignoreExternalFocusing: {
    title: "IgnoreExternalFocusing",
    defaultValue: false,
    type: ControlType.Boolean
  },
  forceFocusInsideTrap: {
    title: "ForceFocusInsideTrap",
    defaultValue: false,
    type: ControlType.Boolean
  },
  firstFocusableSelector: {
    title: "FirstFocusableSelector",
    defaultValue: "",
    type: ControlType.String
  },
  disableFirstFocus: {
    title: "DisableFirstFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  focusPreviouslyFocusedInnerElement: {
    title: "FocusPreviouslyFocusedInnerElement",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
