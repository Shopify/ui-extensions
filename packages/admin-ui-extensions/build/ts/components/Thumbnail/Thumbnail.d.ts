export declare type Size = 'small' | 'medium' | 'large';
export declare type ScaleType = 'fill' | 'fit' | 'crop';
export interface ThumbnailProps {
    size?: Size;
    scaleType?: ScaleType;
    /** URL for the thumbnail image. */
    source: string;
    /** Alt text for the thumbnail. */
    alt: string;
}
/**
 * Thumbnails are used as a visual anchor and identifier for an object. They should be used along with text to provide context.
 */
export declare const Thumbnail: import("@remote-ui/core").RemoteComponentType<"Thumbnail", ThumbnailProps, true>;
//# sourceMappingURL=Thumbnail.d.ts.map