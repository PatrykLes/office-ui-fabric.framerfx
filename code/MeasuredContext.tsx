import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerMeasuredContext: React.SFC = props => {
  return <System.MeasuredContext {...props} style={style} />;
};

export const MeasuredContext = withHOC(InnerMeasuredContext);

MeasuredContext.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MeasuredContext, {
  isMeasured: {
    title: "IsMeasured",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
