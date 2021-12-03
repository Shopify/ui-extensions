declare type SizeClass = 'regular' | 'compact';
export interface LayoutValue {
    horizontal: SizeClass;
}
interface LayoutApiContent {
    initialValue: LayoutValue;
    setOnChange: (onChange: (layout: LayoutValue) => void) => void;
}
/**
 * You can use the Layout utility to adjust your content based on the user's screen size.
 * Layout returns `'compact'` on mobile devices and at narrow screen widths, and `'regular'` otherwise.
 */
export interface LayoutApi {
    layout: LayoutApiContent;
}
export declare function isLayoutApi(api: any): api is LayoutApi;
export {};
//# sourceMappingURL=index.d.ts.map