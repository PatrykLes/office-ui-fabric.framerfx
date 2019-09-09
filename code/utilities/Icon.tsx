import { mergeStyles } from "@uifabric/styling";
import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react/lib/Icon";
import * as React from "react";
import { withHOC } from "../utils/withHOC";
import { colors } from "../canvas";
import { iconNames } from "../utils/icons";

const InnerIcon: React.SFC<any> = ({
  width,
  height,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <System.FontIcon
      {...props}
      className={mergeStyles({
        fontSize: Math.min(width, height),
        height: `${height}px`,
        width: `${width}px`,
        color,
        selectors: {
          ":hover": {
            color: hoverColor
          }
        }
      })}
    />
  );
};

export const Icon = withHOC(InnerIcon);

Icon.defaultProps = {
  width: 12,
  height: 12
};

addPropertyControls(Icon, {
  iconName: {
    title: "IconName",
    defaultValue: "Dictionary",
    type: ControlType.Enum,
    options: iconNames
  },
  color: {
    title: "Color",
    defaultValue: "#000",
    type: ControlType.Color
  },
  hoverColor: {
    title: "Hover Color",
    defaultValue: colors["exchange.primary"],
    type: ControlType.Color
  }
});
