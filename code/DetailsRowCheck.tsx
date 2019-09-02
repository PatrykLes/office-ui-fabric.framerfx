import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDetailsRowCheck: React.SFC = props => {
  return <System.DetailsRowCheck {...props} style={style} />;
};

export const DetailsRowCheck = withHOC(InnerDetailsRowCheck);

DetailsRowCheck.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DetailsRowCheck, {
  isHeader: {
    title: "IsHeader",
    defaultValue: false,
    type: ControlType.Boolean
  },
  selected: {
    title: "Selected",
    defaultValue: false,
    type: ControlType.Boolean
  },
  anySelected: {
    title: "AnySelected",
    defaultValue: false,
    type: ControlType.Boolean
  },
  canSelect: {
    title: "CanSelect",
    defaultValue: false,
    type: ControlType.Boolean
  },
  compact: { title: "Compact", defaultValue: false, type: ControlType.Boolean },
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  checkClassName: {
    title: "CheckClassName",
    defaultValue: "",
    type: ControlType.String
  },
  isVisible: {
    title: "IsVisible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  useFastIcons: {
    title: "UseFastIcons",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
