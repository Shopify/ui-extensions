/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  IconProps$1,
  BadgeProps$1,
  IconType,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface IconProps
  extends Required<
    Pick<IconProps$1, 'type' | 'tone' | 'color' | 'size' | 'interestFor'>
  > {
  /**
   * The type of icon that will be displayed. You can specify an icon name from the available icon set, or use an empty string to show no icon.
   */
  type: '' | IconType | 'empty';
  /**
   * The color tone of the icon based on its semantic meaning. Choose from `'auto'` to let the icon inherit its context, `'neutral'` for standard icons, `'info'` for informational content, `'success'` for positive actions, `'caution'` or `'warning'` for warnings, or `'critical'` for errors.
   *
   * @default 'auto'
   */
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  /**
   * The color emphasis of the icon. Use `'base'` for the standard color intensity, or `'subdued'` for a lighter, less prominent appearance.
   *
   * @default 'base'
   */
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  /**
   * The size of the icon. Use `'small'` for compact layouts, or `'base'` for standard sizing.
   *
   * @default 'base'
   */
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

/**
 * The properties for the badge component. Badges display status information through compact visual indicators with customizable tones, sizes, and optional icons.
 * @publicDocs
 */
export interface BadgeProps
  extends Pick<BadgeProps$1, 'color' | 'icon' | 'size' | 'tone'> {
  /**
   * Controls the visual weight and emphasis of the badge. Available options:
   * - `'base'` - Standard weight with moderate emphasis, suitable for most use cases.
   * - `'strong'` - Increased visual weight for higher emphasis and prominence.
   *
   * @default 'base'
   */
  color: Extract<BadgeProps$1['color'], 'base' | 'strong'>;
  /**
   * The icon to display inside the badge. Accepts any valid icon type or an empty string to display no icon.
   *
   * @default ''
   */
  icon: IconProps['type'] | '';
  /**
   * Determines the size of the badge. Available options:
   * - `'base'` - Standard size for most use cases.
   * - `'large'` - Larger size for increased visibility and prominence.
   * - `'large-100'` - Extra large size for maximum visibility in specific contexts.
   *
   * @default 'base'
   */
  size: Extract<BadgeProps$1['size'], 'base' | 'large' | 'large-100'>;
  /**
   * Determines the visual appearance and semantic meaning of the badge. Badges rely on the tone system for semantic meaning, so using custom styling might not clearly convey meaning to merchants. Available options:
   * - `'auto'` - Lets the system automatically choose the appropriate tone based on context.
   * - `'neutral'` - Gray styling for general status information that doesn't require emphasis.
   * - `'info'` - Blue styling for informational content and neutral updates.
   * - `'success'` - Green styling for positive states, completed actions, and successful operations.
   * - `'caution'` - Yellow styling for situations that need attention but aren't urgent.
   * - `'warning'` - Orange styling for important notices that require merchant awareness.
   * - `'critical'` - Red styling for errors, failures, and urgent issues requiring immediate action.
   *
   * @default 'auto'
   */
  tone: Extract<
    BadgeProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare abstract class BadgeBase
  extends PolarisCustomElement
  implements Pick<BadgeProps, 'color' | 'size'>
{
  /**
   * The visual weight of the badge. Available options: `'base'` for standard weight or `'strong'` for increased emphasis.
   */
  accessor color: BadgeProps['color'];
  /**
   * The size of the badge. Available options: `'base'` for standard size, `'large'` for larger size, or `'large-100'` for extra large size.
   */
  accessor size: BadgeProps['size'];
  abstract tone: string;
  abstract icon: string;
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

/**
 * The badge custom element class that renders status indicators in the Shopify admin interface. This component displays compact visual indicators with customizable tones, sizes, and optional icons to communicate status information to merchants.
 */
declare class Badge extends BadgeBase implements BadgeProps {
  /**
   * The icon to display inside the badge. Accepts any valid icon type from the admin icon set, or an empty string to display no icon.
   */
  accessor icon: BadgeProps['icon'];
  /**
   * The tone that determines the badge's visual appearance and semantic meaning. Available options: `'auto'`, `'neutral'`, `'info'`, `'success'`, `'caution'`, `'warning'`, or `'critical'`.
   */
  accessor tone: BadgeProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Badge;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BadgeJSXProps & PreactBaseElementPropsWithChildren<Badge>;
    }
  }
}

declare const tagName = 's-badge';
/**
 * The JSX props for the badge component. These properties extend `BadgeProps` with an optional `id` and `children` for rendering badge content in JSX.
 * @publicDocs
 */
export interface BadgeJSXProps
  extends Partial<BadgeProps>,
    Pick<BadgeProps$1, 'id' | 'children'> {
  /**
   * The text content to display inside the badge. Typically a short status label like "Fulfilled", "Draft", or "Active".
   */
  children?: ComponentChildren;
}

export {Badge};
export type {BadgeJSXProps};
