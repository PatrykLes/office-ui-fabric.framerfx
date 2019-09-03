import * as React from "react";
import { initializeIcons } from "@uifabric/icons";

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
    return <Component {...props} />;
  };
}
