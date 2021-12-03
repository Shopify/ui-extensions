/// <reference types="react" />
export interface TabDescriptor {
    /** A unique identifier for the tab */
    id: string;
    /** A destination to link to */
    url?: string;
    /** Content for the tab */
    content: React.ReactNode;
    /** A unique identifier for the panel */
    panelID?: string;
    /** Visually hidden text for screen readers */
    accessibilityLabel?: string;
}
export interface TabsProps {
    /** Content to display in tabs */
    children?: React.ReactNode;
    /** Index of selected tab */
    selected: number;
    /** List of tabs */
    tabs: TabDescriptor[];
    /** Fit tabs to container */
    fitted?: boolean;
    /** Text to replace disclosures horizontal dots */
    disclosureText?: string;
    /** Callback when tab is selected */
    onSelect?(selectedTabIndex: number): void;
}
/**
 * Use to alternate among related views within the same context.
 */
export declare const Tabs: import("@remote-ui/core").RemoteComponentType<"Tabs", TabsProps, true>;
//# sourceMappingURL=Tabs.d.ts.map