import * as React from "react";
import { IStyle } from "@uifabric/styling";

export function CenteredWrapper(props) {
  return (
    <div
      style={{
        display: "table",
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%"
      }}
    >
      {props.children}
    </div>
  );
}

export const centeredChildStyles: IStyle & React.CSSProperties = {
  display: "table-cell",
  verticalAlign: "middle"
};
