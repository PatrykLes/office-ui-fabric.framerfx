import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerLink: React.SFC = ({ willChangeTransform, ...props }) => {
  return <System.Link {...props}>{props.text}</System.Link>;
};

export const Link = withHOC(InnerLink);

Link.defaultProps = {
  width: 25,
  height: 18
};

addPropertyControls(Link, {
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  text: {
    title: "Text",
    defaultValue: "Link",
    type: ControlType.String
  },
  href: { title: "Href", defaultValue: "", type: ControlType.String }
});
