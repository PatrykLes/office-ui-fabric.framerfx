import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerList: React.SFC = props => {
  return <System.List {...props} style={style} />;
};

export const List = withHOC(InnerList);

List.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(List, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  renderedWindowsAhead: {
    title: "RenderedWindowsAhead",
    type: ControlType.Number
  },
  renderedWindowsBehind: {
    title: "RenderedWindowsBehind",
    type: ControlType.Number
  },
  startIndex: { title: "StartIndex", type: ControlType.Number },
  renderCount: { title: "RenderCount", type: ControlType.Number },
  usePageCache: {
    title: "UsePageCache",
    defaultValue: false,
    type: ControlType.Boolean
  },
  role: { title: "Role", defaultValue: "", type: ControlType.String },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
