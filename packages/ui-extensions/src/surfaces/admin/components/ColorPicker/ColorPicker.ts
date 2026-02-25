import {createRemoteComponent} from '@remote-ui/core';

/**
 * Props for the ColorPicker component, which provides a visual interface
 * for the merchant to select a color, with optional alpha (transparency)
 * support.
 */
export interface ColorPickerProps {
  /**
   * A unique identifier for the color picker. Use this when you need to
   * reference the component programmatically or for form association.
   */
  id?: string;

  /**
   * Whether to show an alpha (transparency) slider, allowing the merchant
   * to select a color with transparency. When `true`, then `onChange` emits an
   * 8-character hex string (`#RRGGBBAA`). When `false`, then `onChange` emits a
   * 6-character hex string (`#RRGGBB`).
   * @defaultValue false
   */
  allowAlpha?: boolean;

  /**
   * A callback fired when the merchant selects a new color. The value is
   * always emitted as a hex string. If `allowAlpha` is `true`, then the value
   * is an 8-character hex (`#RRGGBBAA`). If `allowAlpha` is `false`, then the
   * value is a 6-character hex (`#RRGGBB`).
   */
  onChange?(value: string): void;

  /**
   * The currently selected color value. Accepts
   * [hex](https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color),
   * [rgb, and rgba](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb)
   * strings. Defaults to `rgb(0, 0, 0)` if the value is invalid.
   */
  value?: string;
}

/**
 * ColorPicker provides a visual interface for the merchant to select a
 * color, with optional alpha (transparency) support.
 */
export const ColorPicker = createRemoteComponent<
  'ColorPicker',
  ColorPickerProps
>('ColorPicker');
