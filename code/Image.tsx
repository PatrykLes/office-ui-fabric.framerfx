import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerImage: React.SFC = props => {
  return <System.Image {...props} style={style} />;
};

export const Image = withHOC(InnerImage);

Image.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Image, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  shouldFadeIn: {
    title: "ShouldFadeIn",
    defaultValue: false,
    type: ControlType.Boolean
  },
  shouldStartVisible: {
    title: "ShouldStartVisible",
    defaultValue: false,
    type: ControlType.Boolean
  },
  imageFit: { title: "ImageFit", type: ControlType.Number },
  errorSrc: { title: "ErrorSrc", defaultValue: "", type: ControlType.String },
  maximizeFrame: {
    title: "MaximizeFrame",
    defaultValue: false,
    type: ControlType.Boolean
  },
  coverStyle: { title: "CoverStyle", type: ControlType.Number },
  placeholder: {
    title: "Placeholder",
    defaultValue: "",
    type: ControlType.String
  }
});
