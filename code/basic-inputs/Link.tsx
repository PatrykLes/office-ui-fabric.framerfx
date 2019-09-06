import { addPropertyControls, ControlType, Frame } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { compose } from "../utils/compose";
import { WithManagedStatePropertyControls } from "../utils/stateManagement/propertyControls";
import { withManagedState } from "../utils/stateManagement/withManagedState";
import { withHOC } from "../utils/withHOC";

const InnerLink = ({ willChangeTransform, href, ...props }) => {
  return (
    <Frame
      background="transparent"
      size="100%"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <System.Link {...props} href={href || undefined}>
        {props.text}
      </System.Link>
    </Frame>
  );
};

export const Link = compose(
  withHOC,
  withManagedState
)(InnerLink);

Link.defaultProps = {
  width: 25,
  height: 18,
  valuePropName: "text",
  centerLayout: "flex"
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
