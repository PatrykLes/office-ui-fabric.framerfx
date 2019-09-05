import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { compose } from "../utils/compose";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { withHOC } from "../utils/withHOC";

const InnerText: React.SFC<any> = ({ text, color, ...props }) => {
  return (
    <System.Text {...props} style={{ color }}>
      {text}
    </System.Text>
  );
};

export const Text = compose(
  withHOC,
  withManagedState
)(InnerText);

Text.defaultProps = {
  width: 150,
  height: 50,
  valuePropName: "text"
};

addPropertyControls(Text, {
  text: { type: ControlType.String, defaultValue: "Text" },
  color: {
    type: ControlType.Color,
    defaultValue: "#000"
  },
  variant: {
    title: "Variant",
    options: [
      "small",
      "tiny",
      "xSmall",
      "smallPlus",
      "medium",
      "mediumPlus",
      "large",
      "xLarge",
      "xLargePlus",
      "xxLarge",
      "xxLargePlus",
      "superLarge",
      "mega"
    ],
    optionTitles: [
      "Small",
      "Tiny",
      "XSmall",
      "SmallPlus",
      "Medium",
      "MediumPlus",
      "Large",
      "XLarge",
      "XLargePlus",
      "XxLarge",
      "XxLargePlus",
      "SuperLarge",
      "Mega"
    ],
    defaultValue: "small",
    type: ControlType.Enum
  },
  block: { title: "Block", defaultValue: false, type: ControlType.Boolean },
  nowrap: { title: "Nowrap", defaultValue: false, type: ControlType.Boolean },
  ...WithManagedStatePropertyControls
});
