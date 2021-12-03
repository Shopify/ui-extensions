import type { BaseHeadingProps } from '@shopify/ui-extensions';
declare type Level = 1 | 2 | 3 | 4 | 5 | 6;
export interface HeadingProps extends Omit<BaseHeadingProps, 'level'> {
    /**
     * @default 2
     */
    level?: Level;
}
/**
 * Headings are used as the titles of each major section of an extension.
 */
export declare const Heading: import("@remote-ui/core").RemoteComponentType<"Heading", HeadingProps, true>;
export {};
//# sourceMappingURL=Heading.d.ts.map