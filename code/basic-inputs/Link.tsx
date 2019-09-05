import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { compose } from "../utils/compose";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";

const InnerLink: React.SFC = ({ willChangeTransform, ...props }) => {
  return <System.Link {...props}>{props.text}</System.Link>;
};

export const Link = compose(
  withHOC,
  withManagedState
)(InnerLink);

Link.defaultProps = {
  width: 25,
  height: 18,
  valuePropName: "text"
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
  href: { title: "Href", defaultValue: "", type: ControlType.String },
  ...WithManagedStatePropertyControls
});
