enum Size {
    Small,
    Medium,
    Large
}

enum ScaleType {
    Fill, // may stretch image to fit the content view
    Fit, // preserves aspect ratio, padding remaining space
    Crop // preserves aspect ratio, fills content view, crops area outside content view
}

interface Thumbnail {
    size?: Size
    scaleType?: ScaleType
    url: string;
    alt: string;
}
