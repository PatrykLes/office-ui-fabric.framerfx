import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerListPeoplePickerBase: React.SFC = props => {
  return <System.ListPeoplePickerBase {...props} style={style} />;
};

export const ListPeoplePickerBase = withHOC(InnerListPeoplePickerBase);

ListPeoplePickerBase.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ListPeoplePickerBase, {});
