enum Variation {
    Subdued, // grey
    Strong,  // bold
    Positive, // green
    Negative, // red
    Code // monospace
}

enum TextSize {
    Small,
    Medium,
    Large,
    ExtraLarge
}

interface Label {
    text: string;
    size?: TextSize;
    variation?: Variation
}
