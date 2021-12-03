declare type Source = 'cancelSmallMinor' | 'deleteMinor' | 'searchMinor' | 'starHollow' | 'starFilled' | 'sortMinor' | 'plusMinor';
export interface IconProps {
    /** Pre-defined glyph content to display. */
    source: Source;
    /** Text describing the icon, to be read to screenreaders. */
    accessibilityLabel?: string;
}
/**
 * Icons are small visual indicators from a set of pre-defined glyphs.
 */
export declare const Icon: import("@remote-ui/core").RemoteComponentType<"Icon", IconProps, true>;
export {};
//# sourceMappingURL=Icon.d.ts.map