import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerDocumentCardImage: React.SFC = props => {
  return <System.DocumentCardImage {...props} style={style} />;
};

export const DocumentCardImage = withHOC(InnerDocumentCardImage);

DocumentCardImage.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(DocumentCardImage, {
  className: { title: "ClassName", defaultValue: "", type: ControlType.String },
  imageSrc: { title: "ImageSrc", defaultValue: "", type: ControlType.String },
  width: { title: "Width", type: ControlType.Number },
  height: { title: "Height", type: ControlType.Number },
  imageFit: { title: "ImageFit", type: ControlType.Number }
});
