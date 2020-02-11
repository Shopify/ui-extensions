interface ResourceList {
    items: any[];
    selectedItems: (string[] | "All"); // Collection of IDs for currently selected items
    headings?: string[]; // not rendered on mobile
    resourceName?: {plural: string, singular: string}; // used in filterbar
    filterControl?: Filter
    bulkActions?: {content: string, onAction: () => void}[];
    renderItem: (item: any) => ResourceItem
}

interface Filter {
    queryValue: string;
    onQueryChange: (query: string) => void;
}

interface ResourceItem {
    id: string;
    onPress: () => void;
}