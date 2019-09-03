import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerNormalPeoplePickerBase: React.SFC = props => {
  return <System.NormalPeoplePickerBase {...props} style={style} />;
};

export const NormalPeoplePickerBase = withHOC(InnerNormalPeoplePickerBase);

NormalPeoplePickerBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(NormalPeoplePickerBase, {});
