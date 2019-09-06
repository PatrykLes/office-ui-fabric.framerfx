import * as React from "react";

type Props = {
  centerLayout: "flex" | "table";
};

export const CenteredWrapper: React.FC<Props> = props => {
  if (props.centerLayout === "table") {
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

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {props.children}
    </div>
  );
};

export const centeredChildStyles = {
  display: "table-cell" as "table-cell",
  verticalAlign: "middle" as "middle"
};
