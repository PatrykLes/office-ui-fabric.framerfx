import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerBaseFloatingPeoplePicker: React.SFC = props => {
  return <System.BaseFloatingPeoplePicker {...props} style={style} />;
};

export const BaseFloatingPeoplePicker = withHOC(InnerBaseFloatingPeoplePicker);

BaseFloatingPeoplePicker.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(BaseFloatingPeoplePicker, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  text: { title: "Text", defaultValue: "", type: ControlType.String },
  size: { title: "Size", type: ControlType.Number },
  imageShouldFadeIn: {
    title: "ImageShouldFadeIn",
    defaultValue: false,
    type: ControlType.Boolean
  },
  imageShouldStartVisible: {
    title: "ImageShouldStartVisible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  imageUrl: { title: "ImageUrl", defaultValue: "", type: ControlType.String },
  imageAlt: { title: "ImageAlt", defaultValue: "", type: ControlType.String },
  imageInitials: {
    title: "ImageInitials",
    defaultValue: "",
    type: ControlType.String
  },
  allowPhoneInitials: {
    title: "AllowPhoneInitials",
    defaultValue: false,
    type: ControlType.Boolean
  },
  initialsColor: {
    title: "InitialsColor",
    defaultValue: "",
    type: ControlType.String
  },
  presence: { title: "Presence", type: ControlType.Number },
  presenceTitle: {
    title: "PresenceTitle",
    defaultValue: "",
    type: ControlType.String
  },
  isOutOfOffice: {
    title: "IsOutOfOffice",
    defaultValue: false,
    type: ControlType.Boolean
  },
  secondaryText: {
    title: "SecondaryText",
    defaultValue: "",
    type: ControlType.String
  },
  tertiaryText: {
    title: "TertiaryText",
    defaultValue: "",
    type: ControlType.String
  },
  optionalText: {
    title: "OptionalText",
    defaultValue: "",
    type: ControlType.String
  },
  hidePersonaDetails: {
    title: "HidePersonaDetails",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showSecondaryText: {
    title: "ShowSecondaryText",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showUnknownPersonaCoin: {
    title: "ShowUnknownPersonaCoin",
    defaultValue: false,
    type: ControlType.Boolean
  },
  showInitialsUntilImageLoads: {
    title: "ShowInitialsUntilImageLoads",
    defaultValue: false,
    type: ControlType.Boolean
  },
  coinSize: { title: "CoinSize", type: ControlType.Number },
  primaryText: {
    title: "PrimaryText",
    defaultValue: "",
    type: ControlType.String
  },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
