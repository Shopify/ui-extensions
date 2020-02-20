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

interface Text {
    text: string;
    size?: TextSize;
    variation?: Variation
}
