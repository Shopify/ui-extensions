import {createRemoteComponent} from '@remote-ui/core';

import {MaybeResponsiveConditionalStyle} from '../../style';
import type {
  BlockAlignment,
  BorderProps,
  InlineAlignment,
  SizingProps,
  SpacingProps,
  VisibilityProps,
  Display,
  MultiPick,
  ViewLikeAccessibilityRole,
} from '../shared';

type AccessibilityVisibility = 'hidden';

type Opacity = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export type PositionType = 'absolute' | 'relative' | 'sticky';

export type Coordinate = number | `${number}%`;
interface BaseCoordinates {
  /**
   * Adjust the block start offset.
   *
   * `number`: size in pixels.
   *
   * `` `${number}%` ``: size in percentages. It refers to the block size of the parent component.
   */
  blockStart: Coordinate;
  /**
   * Adjust the inline start offset.
   *
   * `number`: size in pixels.
   *
   * `` `${number}%` ``: size in percentages. It refers to the block size of the parent component.
   */
  inlineStart: Coordinate;
  /**
   * Adjust the block end offset.
   *
   * `number`: size in pixels.
   *
   * `` `${number}%` ``: size in percentages. It refers to the block size of the parent component.
   */
  blockEnd: Coordinate;
  /**
   * Adjust the inline end offset.
   *
   * `number`: size in pixels.
   *
   * `` `${number}%` ``: size in percentages. It refers to the block size of the parent component.
   */
  inlineEnd: Coordinate;
}

type PositionCoordinates = MultiPick<
  BaseCoordinates,
  [
    'blockStart' | 'inlineStart',
    'blockStart' | 'inlineEnd',
    'blockEnd' | 'inlineStart',
    'blockEnd' | 'inlineEnd',
    'blockStart',
    'blockEnd',
    'inlineStart',
    'inlineEnd',
  ]
>;

export type Position = {
  /**
   * Changes how the View is positioned. For setting the position, only properties
   * that set the offset on a different axis can be set simultaneously. This means
   * that these combinations are not allowed:
   *
   * ```
   * { blockStart, blockEnd }
   * ```
   *
   * ```
   * { inlineStart, inlineEnd }
   * ```
   *
   * @defaultValue 'relative'
   */
  type?: PositionType;
} & PositionCoordinates;

export interface Translate {
  /**
   * Adjust the translation on the cross axis.
   *
   * A percentage value refers to the block size of the View.
   */
  block?: number | `${number}%`;
  /**
   * Adjust the translation on the main axis.
   *
   * A percentage value refers to the inline size of the View.
   */
  inline?: number | `${number}%`;
}

export interface ViewProps
  extends BorderProps,
    SizingProps,
    SpacingProps,
    VisibilityProps {
  /**
   * Changes the visibility of the element to assistive technologies.
   *
   * `hidden` hides the component from assistive technology (for example,
   * a screen reader) but remains visually visible.
   */
  accessibilityVisibility?: AccessibilityVisibility;

  /**
   * Changes the display of the View.
   *
   *
   * `inline` follows the direction of words in a sentence based on the document’s writing mode.
   *
   * `block` follows the direction of paragraphs based on the document’s writing mode.
   *
   *
   * @defaultValue 'block'
   */
  display?: Display;

  /**
   * A unique identifier for the View.
   */
  id?: string;

  /**
   * Sets the opacity of the View. The opacity will be applied to the background as well as all
   * the children of the View. Use carefully as this could decrease the contrast ratio between
   * the background and foreground elements, resulting in unreadable and inaccessible text.
   */
  opacity?: Opacity;
  /**
   * A label that describes the purpose or contents of the element. When set,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help buyers
   * navigate the page.
   *
   *
   * For example:
   *
   * - In an HTML host a `['listItem', 'separator']` tuple will render: <li role='separator'>
   *
   * - In an HTML host a `listItem` string will render: <li>
   */
  accessibilityRole?: ViewLikeAccessibilityRole;
  /**
   * Changes how the View is positioned.
   */
  position?: MaybeResponsiveConditionalStyle<Position>;
  /**
   * Specifies a two-dimensional translation of the View.
   */
  translate?: MaybeResponsiveConditionalStyle<Translate>;
  /**
   * Position children along the cross axis
   */
  blockAlignment?: MaybeResponsiveConditionalStyle<
    Extract<BlockAlignment, 'start' | 'center' | 'end'>
  >;
  /**
   * Position children along the main axis
   */
  inlineAlignment?: MaybeResponsiveConditionalStyle<InlineAlignment>;
  /**
   * Adjust the inline size.
   *
   * `fill`: takes all the available space.
   */
  inlineSize?: MaybeResponsiveConditionalStyle<'fill'>;
}

/**
 *  View is a generic container component. Its contents will always be their
 * “natural” size, so this component can be useful in layout components (like `Grid`,
 * `BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.
 *
 * Note: View’s box model related properties like `padding`, `border`, `borderRadius`, and `borderColor` are implemented as
 * [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts).
 */
export const View = createRemoteComponent<'View', ViewProps>('View');