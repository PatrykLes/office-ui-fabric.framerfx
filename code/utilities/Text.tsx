import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerText: React.SFC<any> = ({ text, ...props }) => {
  return <System.Text {...props}>{text}</System.Text>;
};

export const Text = withHOC(InnerText);

Text.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Text, {
  text: { type: ControlType.String, defaultValue: "Text" },
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
  nowrap: { title: "Nowrap", defaultValue: false, type: ControlType.Boolean }
});
