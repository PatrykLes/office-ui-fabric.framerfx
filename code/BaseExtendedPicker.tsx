import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBaseExtendedPicker: React.SFC = props => {
  return <System.BaseExtendedPicker {...props} style={style} />;
};

export const BaseExtendedPicker = withHOC(InnerBaseExtendedPicker);

BaseExtendedPicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(BaseExtendedPicker, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  itemLimit: { title: "ItemLimit", type: ControlType.Number },
  currentRenderedQueryString: {
    title: "CurrentRenderedQueryString",
    defaultValue: "",
    type: ControlType.String
  }
});
