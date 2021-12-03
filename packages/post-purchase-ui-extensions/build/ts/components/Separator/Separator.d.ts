declare type Direction = 'horizontal' | 'vertical';
declare type Width = 'thin' | 'medium' | 'thick' | 'xthick';
export interface SeparatorProps {
    width?: Width;
    direction?: Direction;
}
/**
 * Separators create visual separation between sections of an interface.
 */
export declare const Separator: import("@remote-ui/core").RemoteComponentType<"Separator", SeparatorProps, true>;
export {};
//# sourceMappingURL=Separator.d.ts.map