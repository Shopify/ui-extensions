interface Stack {
    vertical?: boolean;
    distribution?: Distribution;
    spacing?: Spacing;
    children: React.ReactNode;
}

enum Distribution {
    Leading,
    Trailing,
    Center,
    Fill
}

enum Spacing {
    ExtraTight,
    Tight,
    Loose,
    ExtraLoose,
    None
}
