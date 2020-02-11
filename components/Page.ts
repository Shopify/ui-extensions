interface Page {
    title: string;
    subTitle?: string;
    primaryAction?: Action;
    secondaryActions?: Action[];
}

interface Action {
    text: string;
    destructive?: boolean
    onPress: () => void;
}