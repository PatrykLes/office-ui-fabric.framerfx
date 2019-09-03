import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerTeachingBubble: React.SFC<any> = ({ content, ...props }) => {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(true);
  if (!visible) {
    return null;
  }
  return (
    <>
      <div ref={ref} style={{ width: "100%", height: "100%" }}></div>
      <System.TeachingBubble
        target={ref}
        onDismiss={e => setVisible(false)}
        {...props}
      >
        {content}
      </System.TeachingBubble>
    </>
  );
};

export const TeachingBubble = withHOC(InnerTeachingBubble);

TeachingBubble.defaultProps = {
  width: 25,
  height: 25
};

addPropertyControls(TeachingBubble, {
  headline: {
    title: "Headline",
    defaultValue: "Headline",
    type: ControlType.String
  },
  content: {
    type: ControlType.String,
    defaultValue:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum?"
  },
  hasCondensedHeadline: {
    title: "HasCondensedHeadline",
    defaultValue: false,
    type: ControlType.Boolean
  },
  hasCloseIcon: {
    title: "HasCloseIcon",
    defaultValue: true,
    type: ControlType.Boolean
  },
  isWide: { title: "IsWide", defaultValue: false, type: ControlType.Boolean },
  hasSmallHeadline: {
    title: "HasSmallHeadline",
    defaultValue: false,
    type: ControlType.Boolean
  },
  isClickableOutsideFocusTrap: {
    title: "IsClickableOutsideFocusTrap",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
