import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerGrid: React.SFC = props => {
  return <System.Grid {...props} style={style} />;
};

export const Grid = withHOC(InnerGrid);

Grid.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Grid, {
  columnCount: { title: "ColumnCount", type: ControlType.Number },
  shouldFocusCircularNavigate: {
    title: "ShouldFocusCircularNavigate",
    defaultValue: false,
    type: ControlType.Boolean
  },
  doNotContainWithinFocusZone: {
    title: "DoNotContainWithinFocusZone",
    defaultValue: false,
    type: ControlType.Boolean
  },
  containerClassName: {
    title: "ContainerClassName",
    defaultValue: "",
    type: ControlType.String
  },
  positionInSet: { title: "PositionInSet", type: ControlType.Number },
  setSize: { title: "SetSize", type: ControlType.Number }
});
