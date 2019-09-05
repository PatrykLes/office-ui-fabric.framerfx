import { addPropertyControls, ControlType, Frame, Stack } from "framer";
import { mergeStyles } from "office-ui-fabric-react";
import * as React from "react";
import { colors } from "../canvas";
import { withHOC } from "../utils/withHOC";

const style = {
  width: "100%",
  height: "100%",
  display: "flex" as "flex",
  flexDirection: "column" as "column",
  color: colors["office.navbar.text"],
  fontSize: "14px",
  alignItems: "center" as "center",
  backgroundColor: colors["office.background"],
  selectors: {
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,.1)",
      color: colors["office.link"]
    }
  }
};

const InnerOfficeButton: React.SFC<any> = ({ text, image, ...props }) => {
  return (
    <Stack
      className={mergeStyles(style)}
      {...props}
      gap={0}
      background={colors["office.background"]}
    >
      <Frame
        style={{
          width: "100%",
          height: "51px",
          textAlign: "center",
          background: "transparent",
          backgroundColor: "pink"
        }}
      />
      <Frame
        style={{
          width: "100%",
          height: "46px",
          textAlign: "center",
          background: "transparent"
        }}
      >
        <p>{text}</p>
      </Frame>
    </Stack>
  );
};

export const OfficeButton = withHOC(InnerOfficeButton);

OfficeButton.defaultProps = {
  width: 97,
  height: 97
};

addPropertyControls(OfficeButton, {
  text: { type: ControlType.String, defaultValue: "Text" },
  image: { type: ControlType.Image }
});
