import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerExtendedPeoplePicker: React.SFC = props => {
  return <System.ExtendedPeoplePicker {...props} style={style} />;
};

export const ExtendedPeoplePicker = withHOC(InnerExtendedPeoplePicker);

ExtendedPeoplePicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ExtendedPeoplePicker, {});
