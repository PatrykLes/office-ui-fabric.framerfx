import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerPlainCard: React.SFC = props => {
  return <System.PlainCard {...props} style={style} />;
};

export const PlainCard = withHOC(InnerPlainCard);

PlainCard.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(PlainCard, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  directionalHint: { title: "DirectionalHint", type: ControlType.Number },
  directionalHintFixed: {
    title: "DirectionalHintFixed",
    defaultValue: false,
    type: ControlType.Boolean
  },
  firstFocus: {
    title: "FirstFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  gapSpace: { title: "GapSpace", type: ControlType.Number },
  trapFocus: {
    title: "TrapFocus",
    defaultValue: false,
    type: ControlType.Boolean
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
