import { DestructableAction } from '../types';
export interface CallbackAction {
    /** A unique identifier for the action */
    id?: string;
    /** Content the action displays */
    content?: string;
    /** Visually hidden text for screen readers */
    accessibilityLabel?: string;
    /** Callback when an action takes place */
    onAction(): void;
}
export interface LinkAction {
    /** A unique identifier for the action */
    id?: string;
    /** Content the action displays */
    content?: string;
    /** Visually hidden text for screen readers */
    accessibilityLabel?: string;
    /** Callback when an action takes place */
    url: string;
}
export declare type DestructableActionWithIcon = DestructableAction & {
    icon?: string;
};
export interface PageProps {
    /** Remove the normal max-width on the page */
    fullWidth?: boolean;
    /** Decreases the maximum layout width. Intended for single-column layouts */
    narrowWidth?: boolean;
    /** Displays a divider between the page header and the page content */
    divider?: boolean;
    /** Primary page-level action */
    primaryAction?: DestructableActionWithIcon;
    /** Collection of breadcrumbs */
    breadcrumbs?: (CallbackAction | LinkAction)[];
    /** Collection of secondary page-level actions */
    secondaryActions?: DestructableActionWithIcon[];
    /** Title of Page */
    title?: string;
    thumbnail?: string;
    pagination?: {
        hasNext: boolean;
        hasPrevious: boolean;
    };
}
export declare const Page: import("@remote-ui/core").RemoteComponentType<"Page", PageProps, true>;
//# sourceMappingURL=Page.d.ts.map