declare type Level = 1 | 2 | 3;
export interface HeadingProps {
    /**
     * Unique identifier. Typically used to make the heading a target
     * that another component can refer to in order to provide an alternative
     * accessibility label.
     */
    id?: string;
    /**
     * The visual level of the heading. When not provided, the heading will use
     * its “automatic” heading level, which is determined by the level of nesting
     * within ancestor `HeadingGroup`s. No matter what value you provide here,
     * the semantic level (e.g., how the heading contributes to the document outline)
     * is determined exclusively by the “automatic” heading level.
     */
    level?: Level;
    /**
     * A custom accessibility role for this heading. Currently, only `presentation`
     * is supported, which will strip the semantic meaning of the heading, but leave
     * the visual styling intact.
     */
    role?: 'presentation';
}
/**
 * Headings control the visual style of headings. Use headings to introduce major
 * sections, like Contact information, Shipping address, or Shipping method.
 *
 * Unlike HTML headings, you don’t explicitly specify the position of the heading in the
 * document outline. Nest headings within the heading group component to control
 * the document outline structure used by assistive technologies.
 */
export declare const Heading: import("@remote-ui/core").RemoteComponentType<"Heading", HeadingProps, true>;
export {};
//# sourceMappingURL=Heading.d.ts.map