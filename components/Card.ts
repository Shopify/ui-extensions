interface Card {
    title?: string;
    primaryFooterAction?: Action;
    secondaryFooterActions?: Action[];
    children?: React.ReactNode;
}
