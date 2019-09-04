import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";
import { centeredChildStyles } from "../utils/CenteredWrapper";

const InnerMessageBar: React.SFC<any> = ({ title, message, ...props }) => {
  const [visible, setVisible] = React.useState(true);

  if (!visible) {
    return null;
  }

  return (
    <System.MessageBar onDismiss={e => setVisible(false)} {...props}>
      <b>{title}</b> {message}
    </System.MessageBar>
  );
};

export const MessageBar = withHOC(InnerMessageBar);

MessageBar.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(MessageBar, {
  messageBarType: {
    title: "MessageBarType",
    type: ControlType.Number,
    min: 0,
    max: 5,
    displayStepper: true,
    defaultValue: 4
  },
  isMultiline: {
    title: "IsMultiline",
    defaultValue: true,
    type: ControlType.Boolean
  },
  title: {
    title: "Title",
    defaultValue: "Title",
    type: ControlType.String
  },
  message: {
    title: "Message",
    defaultValue:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. ",
    type: ControlType.String
  }
});
