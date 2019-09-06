import { addPropertyControls, ControlType } from "framer";
import * as System from "office-ui-fabric-react";
import * as React from "react";
import { withHOC } from "../utils/withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerSimpleSpinner = ({ width, height, ...props }) => {
  const size = Math.min(width, height);
  const style = { width: `${size}px`, height: `${size}px` };
  return <System.Spinner {...props} styles={{ circle: style, root: style }} />;
};

export const SimpleSpinner = withHOC(InnerSimpleSpinner);

SimpleSpinner.defaultProps = {
  width: 50,
  height: 50
};

addPropertyControls(SimpleSpinner, {});
