import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCompactPeoplePickerBase: React.SFC = props => {
  return <System.CompactPeoplePickerBase {...props} style={style} />;
};

export const CompactPeoplePickerBase = withHOC(InnerCompactPeoplePickerBase);

CompactPeoplePickerBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(CompactPeoplePickerBase, {});
