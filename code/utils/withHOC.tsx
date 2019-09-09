import { initializeIcons } from "@uifabric/icons";
import * as React from "react";
import { centeredWrapper as CenteredWrapper } from "./CenteredWrapper";

declare global {
  interface Window {
    iconsInitialized: boolean;
  }
}

export function withHOC(Component): React.SFC {
  if (!window.iconsInitialized) {
    initializeIcons(undefined, { disableWarnings: true });
    window.iconsInitialized = true;
  }

  return (props: any) => {
    return (
      <CenteredWrapper centerLayout="flex">
        <Component {...props} />
      </CenteredWrapper>
    );
  };
}
