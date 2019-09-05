import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerScrollablePane: React.SFC = props => {
  return <System.ScrollablePane {...props} style={style} />;
};

export const ScrollablePane = withHOC(InnerScrollablePane);

ScrollablePane.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ScrollablePane, {
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
