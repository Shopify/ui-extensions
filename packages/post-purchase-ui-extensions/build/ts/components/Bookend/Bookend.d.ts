declare type Spacing = 'xtight' | 'tight' | 'loose' | 'xloose';
declare type Alignment = 'leading' | 'center' | 'trailing' | 'baseline';
export interface BookendProps {
    /** Sets the leading child to its inherent size */
    leading?: boolean;
    /** Sets the trailing child to its inherent size */
    trailing?: boolean;
    /** Position children along the cross axis */
    alignment?: Alignment;
    /** Adjust spacing between children */
    spacing?: Spacing;
}
/**
 * Bookend sets the leading and/or trailing child to its inherent size while the remaining
 * children fill the available space
 */
export declare const Bookend: import("@remote-ui/core").RemoteComponentType<"Bookend", BookendProps, true>;
export {};
//# sourceMappingURL=Bookend.d.ts.map