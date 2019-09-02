import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBaseSelectedItemsList: React.SFC = props => {
  return <System.BaseSelectedItemsList {...props} style={style} />;
};

export const BaseSelectedItemsList = withHOC(InnerBaseSelectedItemsList);

BaseSelectedItemsList.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(BaseSelectedItemsList, {
  removeButtonAriaLabel: {
    title: "RemoveButtonAriaLabel",
    defaultValue: "",
    type: ControlType.String
  }
});
