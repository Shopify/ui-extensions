import { Responsive } from '../shared';
declare type Alignment = 'center' | 'leading' | 'trailing';
declare type Spacing = 'extraTight' | 'tight' | 'base' | 'loose' | 'extraLoose';
export interface LayoutProps {
    /**
     * Specifies the inline alignment of the layout in its container.
     * @defaultValue 'center'
     */
    inlineAlignment?: Alignment;
    /**
     * Specifies the block alignment of the layout in its container.
     * @defaultValue 'leading'
     */
    blockAlignment?: Alignment;
    /**
     * Default maximum inline size of the layout within its viewport.
     * The size specified will constrain the space available for its sections and will
     * be centered in the viewport unless specified otherwise with `inlineAlignment`.
     *
     * Numbers less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
     *
     * Examples:
     * - `500` represents `500px`
     * - `0.5` represents `50%`
     * - `1` represents `100%`
     */
    maxInlineSize?: number | Responsive<number>;
    /**
     * Default sizes for each section of the layout.
     */
    sizes?: Size[] | Responsive<Size[]>;
    /**
     * Default spacing between sections
     */
    spacing?: Spacing | Responsive<Spacing>;
}
/**
 * Options available for section sizes.
 *
 * `auto` will fit to the size of its content.
 * `fill` will take the remaining space available.
 * `Number` less than or equal to 1 are treated as percentages and numbers greater than 1 are treated as pixels.
 *
 * Examples:
 * - `500` represents `500px`
 * - `0.5` represents `50%`
 * - `1` represents `100%`
 */
declare type Size = 'auto' | 'fill' | number;
/**
 * Layout is used to create macro layouts that responds to different media sizes.
 */
export declare const Layout: import("@remote-ui/core").RemoteComponentType<"Layout", LayoutProps, true>;
export {};
//# sourceMappingURL=Layout.d.ts.map