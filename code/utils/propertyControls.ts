import { ControlType, EnumControlDescription } from "framer";

/**
 * This utility function takes a TypeScript enum as input, and generates an EnumControlDescription with a default value assigned.
 *
 * @param title Title of the property control
 * @param providedEnum TypeScript enum
 * @param defaultValue Default value for this property control
 */
export function parseEnumAsPropertyControl(
  title: string,
  providedEnum: any,
  defaultValue: any
): EnumControlDescription {
  const providedEnumKeys = Object.keys(providedEnum).filter(
    (key: string | number) => isNaN(key as any)
  );

  return {
    title,
    type: ControlType.Enum,
    options: providedEnumKeys.map(key => String(providedEnum[key])), // We have to parse the key as a string otherwise the property controls panel won't display it correctly
    optionTitles: providedEnumKeys,
    defaultValue
  };
}
