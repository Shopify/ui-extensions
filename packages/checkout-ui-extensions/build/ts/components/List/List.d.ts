export declare type Marker = 'none' | 'bullet' | 'number';
export declare type Spacing = 'none' | 'extraTight' | 'tight' | 'base' | 'loose' | 'extraLoose';
export interface ListProps {
    /**
     * Adjust spacing between list items
     * @defaultValue 'base'
     */
    spacing?: Spacing;
    /**
     * Type of marker to display
     * @defaultValue 'bullet'
     */
    marker?: Marker;
}
export interface ListItemProps {
}
/**
 * Lists display a set of related content. Each list item usually begins with a bullet or a number.
 */
export declare const List: import("@remote-ui/core").RemoteComponentType<"List", ListProps, true>;
export declare const ListItem: import("@remote-ui/core").RemoteComponentType<"ListItem", ListItemProps, true>;
//# sourceMappingURL=List.d.ts.map