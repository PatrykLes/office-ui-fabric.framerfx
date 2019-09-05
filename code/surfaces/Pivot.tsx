import { addPropertyControls, ControlType, Frame } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";

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
    title: "Tab Names",
    type: ControlType.Array,
    defaultValue: ["First", "Second", "Third"],
    propertyControl: { type: ControlType.String }
  },
  tabs: {
    title: "Tabs",
    type: ControlType.Array,
    propertyControl: { type: ControlType.ComponentInstance }
  }
});
