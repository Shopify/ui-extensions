export interface IndexTableHeading {
    title: string;
    new?: boolean;
    hidden?: boolean;
}
export interface IndexTableProps {
    headings: IndexTableHeading[];
    itemCount: number;
    selectedItemsCount: "All" | number;
    onSelectionChange: (selectionType: string, toggleType: boolean, selection: string | Range) => void;
}
/**
 * `IndexTable` displays a filterable collection of objects of the same type, like products or customers.
 *
 * `IndexTable` should help merchants find an object and navigate to a full-page representation of it.
 * An index table should contain `IndexTableRow` components.
 */
export declare const IndexTable: import("@remote-ui/core").RemoteComponentType<"IndexTable", IndexTableProps, true>;
//# sourceMappingURL=IndexTable.d.ts.map