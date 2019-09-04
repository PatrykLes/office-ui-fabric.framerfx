import { PropertyControls, ControlType } from "framer";

/**
 * Adds controls for global state management, to be used in conjunction with the `withManagedState` HoC.
 *
 * @TODO - Add a "Global State Scope" to allow scoping of global variables
 */
export const UseGlobalStatePropertyControls: PropertyControls = {
  shouldUseGlobalState: {
    title: "Global Variable",
    type: ControlType.Boolean,
    defaultValue: false
  },
  globalStateKey: {
    title: "Variable",
    type: ControlType.String,
    hidden: props => !props.shouldUseGlobalState
  }
};
