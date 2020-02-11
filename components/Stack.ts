interface Stack {
    vertical: boolean;
    distribution: Distribution;
    spacing: Spacing;
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