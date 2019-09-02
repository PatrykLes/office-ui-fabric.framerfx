import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerScrollablePaneBase: React.SFC = props => {
  return <System.ScrollablePaneBase {...props} style={style} />;
};

export const ScrollablePaneBase = withHOC(InnerScrollablePaneBase);

ScrollablePaneBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ScrollablePaneBase, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  initialScrollPosition: {
    title: "InitialScrollPosition",
    type: ControlType.Number
  },
  scrollbarVisibility: {
    title: "ScrollbarVisibility",
    options: ["auto", "always"],
    optionTitles: ["Auto", "Always"],
    defaultValue: "auto",
    type: ControlType.Enum
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
