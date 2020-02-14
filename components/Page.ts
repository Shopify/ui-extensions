interface Page {
    title: string;
    subTitle?: string;
    primaryAction?: Action;
    secondaryActions?: Action[];
    children?: React.ReactNode;
}

interface Action {
    text: string;
    destructive?: boolean
    onPress: () => void;
}
