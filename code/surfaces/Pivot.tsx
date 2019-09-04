import * as React from "react";
import * as System from "office-ui-fabric-react";
import { addPropertyControls, ControlType, Frame } from "framer";

export const Pivot = props => {
  return (
    <System.Pivot>
      {props.tabNames.map((tabName, index) => {
        const child = props.tabs[index] || "no contents";
        return (
          <System.PivotItem key={tabName} headerText={tabName}>
            <Frame size="100%" background="transparent">
              {child}
            </Frame>
          </System.PivotItem>
        );
      })}
    </System.Pivot>
  );
};

Pivot.defaultProps = {
  width: 300,
  height: 300
};

addPropertyControls(Pivot, {
  tabNames: {
    type: ControlType.Array,
    defaultValue: ["First", "Second", "Third"],
    propertyControl: { type: ControlType.String }
  },
  tabs: {
    type: ControlType.Array,
    propertyControl: { type: ControlType.ComponentInstance }
  }
});
