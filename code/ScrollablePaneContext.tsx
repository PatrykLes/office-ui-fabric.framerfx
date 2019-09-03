import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerScrollablePaneContext: React.SFC = props => {
  return <System.ScrollablePaneContext {...props} style={style} />;
};

export const ScrollablePaneContext = withHOC(InnerScrollablePaneContext);

ScrollablePaneContext.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ScrollablePaneContext, {});
