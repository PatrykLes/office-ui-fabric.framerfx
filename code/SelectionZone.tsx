import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSelectionZone: React.SFC = props => {
  return <System.SelectionZone {...props} style={style} />;
};

export const SelectionZone = withHOC(InnerSelectionZone);

SelectionZone.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(SelectionZone, {
  selectionMode: { title: "SelectionMode", type: ControlType.Number },
  selectionPreservedOnEmptyClick: {
    title: "SelectionPreservedOnEmptyClick",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disableAutoSelectOnInputElements: {
    title: "DisableAutoSelectOnInputElements",
    defaultValue: false,
    type: ControlType.Boolean
  },
  enterModalOnTouch: {
    title: "EnterModalOnTouch",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isSelectedOnFocus: {
    title: "IsSelectedOnFocus",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
