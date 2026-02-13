/**
 * A 2D point in normalized image coordinates.
 *
 * Coordinates are normalized to 0.0–1.0 relative to image dimensions,
 * with origin at the top-left corner.
 *
 * To convert to pixel coordinates, multiply by imageSize:
 *   pixelX = point.x * result.imageSize.width
 *   pixelY = point.y * result.imageSize.height
 */
export interface Point2D {
  /** Horizontal position (0.0 = left edge, 1.0 = right edge). */
  x: number;
  /** Vertical position (0.0 = top edge, 1.0 = bottom edge). */
  y: number;
}

/**
 * An axis-aligned bounding rectangle in normalized image coordinates.
 *
 * All values normalized to 0.0–1.0. Origin is the top-left corner
 * of the source image; x increases rightward, y increases downward.
 */
export interface OcrBoundingBox {
  /** Distance from the left edge of the image (0.0 to 1.0). */
  x: number;
  /** Distance from the top edge of the image (0.0 to 1.0). */
  y: number;
  /** Width of the bounding box as a fraction of image width (0.0 to 1.0). */
  width: number;
  /** Height of the bounding box as a fraction of image height (0.0 to 1.0). */
  height: number;
}

/**
 * A recognized word — the smallest text unit in the hierarchy.
 */
export interface OcrTextWord {
  /** The recognized text content of this word. */
  text: string;

  /**
   * Recognition confidence for this word (0.0 to 1.0).
   *
   * - \> 0.9: High confidence — safe for automated processing
   * - 0.7–0.9: Moderate — may need human review
   * - < 0.7: Low — likely needs manual verification
   */
  confidence: number;

  /** Axis-aligned bounding rectangle in normalized image coordinates. */
  boundingBox: OcrBoundingBox;

  /**
   * Four corner points of the text region as a quadrilateral.
   * Ordered: top-left, top-right, bottom-right, bottom-left.
   *
   * Unlike `boundingBox` (axis-aligned), `cornerPoints` represents
   * the actual oriented boundary, which may be rotated or skewed.
   */
  cornerPoints: [Point2D, Point2D, Point2D, Point2D];
}

/**
 * A single line of recognized text, containing one or more words.
 */
export interface OcrTextLine {
  /** The full text content of this line (all words concatenated with spaces). */
  text: string;

  /** Recognition confidence for this line (0.0 to 1.0). Average of word confidences. */
  confidence: number;

  /** Axis-aligned bounding rectangle in normalized image coordinates. */
  boundingBox: OcrBoundingBox;

  /**
   * Four corner points of the line region as a quadrilateral.
   * Ordered: top-left, top-right, bottom-right, bottom-left.
   */
  cornerPoints: [Point2D, Point2D, Point2D, Point2D];

  /** Individual words within this line, in reading order. */
  words: OcrTextWord[];

  /**
   * Detected language of this line as a BCP-47 code, if available.
   * May be undefined if the platform cannot determine the language.
   *
   * @example 'en', 'fr', 'zh-Hans', 'ja'
   */
  language?: string;
}

/**
 * A block of related text — typically a paragraph, section, or visually
 * grouped region. Contains one or more lines.
 */
export interface OcrTextBlock {
  /** The full text content of this block (all lines joined with newlines). */
  text: string;

  /** Recognition confidence for this block (0.0 to 1.0). Average of line confidences. */
  confidence: number;

  /** Axis-aligned bounding rectangle in normalized image coordinates. */
  boundingBox: OcrBoundingBox;

  /**
   * Four corner points of the block region as a quadrilateral.
   * Ordered: top-left, top-right, bottom-right, bottom-left.
   */
  cornerPoints: [Point2D, Point2D, Point2D, Point2D];

  /** Individual lines within this block, in reading order (top to bottom). */
  lines: OcrTextLine[];

  /**
   * Detected language of this block as a BCP-47 code, if available.
   * This is the dominant language of the block; individual lines may differ.
   */
  language?: string;
}

/**
 * The complete result of a text recognition operation.
 *
 * Provides both a convenience `text` property (full recognized text as a
 * single string) and a structured `blocks` hierarchy for spatial analysis.
 *
 * Progressive consumption pattern:
 *   - Simple: `result.text` — just the full text
 *   - Moderate: `result.blocks[i].text` + `result.blocks[i].confidence`
 *   - Advanced: word-level boundingBox/cornerPoints for spatial analysis
 */
export interface OcrResult {
  /**
   * The full recognized text as a single string.
   *
   * Blocks are joined with double newlines; lines within blocks
   * with single newlines.
   *
   * Returns empty string `""` if no text was found in the image.
   */
  text: string;

  /**
   * Overall recognition confidence across the entire image (0.0 to 1.0).
   * Weighted average of block confidences. Returns 0 if no text was found.
   */
  confidence: number;

  /**
   * Detected primary language of the document as a BCP-47 code.
   * This is the most frequently occurring language across all blocks.
   * Undefined if no language could be determined.
   */
  language?: string;

  /**
   * Hierarchical text blocks detected in the image, in reading order.
   *
   * Empty array `[]` if no text was found.
   */
  blocks: OcrTextBlock[];

  /**
   * Dimensions of the source image that was processed, in pixels.
   *
   * Use to convert normalized coordinates to pixels:
   *   pixelX = boundingBox.x * imageSize.width
   *   pixelY = boundingBox.y * imageSize.height
   */
  imageSize: {
    /** Source image width in pixels. */
    width: number;
    /** Source image height in pixels. */
    height: number;
  };
}

/**
 * Configuration options for text recognition.
 *
 * All properties are optional. The API works well with zero configuration:
 *   `shopify.ocr.recognizeText(image)`
 */
export interface OcrOptions {
  /**
   * Controls the speed/accuracy tradeoff for text recognition.
   *
   * - `'fast'`:     Optimized for speed. Best for printed text in good lighting.
   * - `'accurate'`: Optimized for accuracy. Better for challenging text
   *                 (small fonts, low contrast, slight blur).
   *
   * @defaultValue `'accurate'`
   */
  recognitionLevel?: 'fast' | 'accurate';

  /**
   * Preferred languages for text recognition, as BCP-47 language codes.
   * Providing hints improves accuracy when you know the expected language(s).
   *
   * If omitted, automatic language detection is used.
   *
   * @example ['en-US']
   * @example ['en', 'fr']
   * @example ['zh-Hans']
   */
  languages?: string[];
}

/**
 * Describes the OCR capabilities available on the current device.
 *
 * @example
 * const caps = await shopify.ocr.getCapabilities();
 * if (!caps.isAvailable) {
 *   shopify.toast.show('OCR is not available on this device.');
 *   return;
 * }
 */
export interface OcrCapabilities {
  /**
   * Whether OCR text recognition is available on this device.
   * False if the OS version is too old or the required ML models are missing.
   */
  isAvailable: boolean;

  /** BCP-47 language codes supported for text recognition on this device. */
  supportedLanguages: string[];

  /**
   * Recognition levels supported on this device.
   * Typically `['fast', 'accurate']` on iOS; `['accurate']` on Android.
   */
  supportedRecognitionLevels: ('fast' | 'accurate')[];
}

/**
 * Error codes for OCR API failures.
 *
 * Note: "no text found" is NOT an error. It returns a valid
 * OcrResult with `text: ""` and `blocks: []`.
 */
export type OcrErrorCode =
  /** The provided image data could not be decoded. */
  | 'INVALID_IMAGE'
  /** The image dimensions are outside acceptable bounds (10×10 to 4096×4096). */
  | 'IMAGE_SIZE_OUT_OF_RANGE'
  /** Another OCR operation is already in progress. */
  | 'OPERATION_IN_PROGRESS'
  /** OCR is not available on this device. */
  | 'NOT_AVAILABLE'
  /** The requested language is not supported on this device. */
  | 'UNSUPPORTED_LANGUAGE'
  /** The OCR engine encountered an internal error during processing. */
  | 'INTERNAL_ERROR'
  /** Processing exceeded the maximum allowed time (10 seconds). */
  | 'TIMEOUT';

/**
 * Error thrown by OCR API operations.
 * Extends the standard Error with a typed `code` property for
 * programmatic error handling.
 *
 * @example
 * try {
 *   const result = await shopify.ocr.recognizeText(image);
 * } catch (error) {
 *   const ocrError = error as OcrError;
 *   if (ocrError.code === 'INVALID_IMAGE') {
 *     shopify.toast.show('Could not read the image. Please try again.');
 *   }
 * }
 */
export interface OcrError extends Error {
  /** Machine-readable error code for programmatic handling. */
  code: OcrErrorCode;
}

/**
 * The OCR API content — methods available on `shopify.ocr`.
 */
export interface OcrApiContent {
  /**
   * Recognize text in an image using on-device OCR.
   *
   * Processing happens entirely on the device with no network dependency.
   *
   * @param image - Base64-encoded image data string.
   *   Typically obtained from `shopify.camera.takePhoto().base64`.
   *   Supported formats: JPEG, PNG.
   * @param options - Optional configuration for recognition.
   * @returns A promise that resolves with recognized text and spatial metadata.
   *   If no text is found, returns `{ text: "", blocks: [], confidence: 0 }`.
   * @throws {OcrError} `INVALID_IMAGE` — Image data is corrupt or cannot be decoded
   * @throws {OcrError} `IMAGE_SIZE_OUT_OF_RANGE` — Image too small or too large
   * @throws {OcrError} `OPERATION_IN_PROGRESS` — Another OCR call is active
   * @throws {OcrError} `NOT_AVAILABLE` — Device does not support OCR
   * @throws {OcrError} `UNSUPPORTED_LANGUAGE` — Requested language not available
   * @throws {OcrError} `INTERNAL_ERROR` — Internal OCR engine failure
   * @throws {OcrError} `TIMEOUT` — Processing exceeded 10 second limit
   */
  recognizeText: (image: string, options?: OcrOptions) => Promise<OcrResult>;

  /**
   * Query the OCR capabilities of the current device.
   *
   * Use this to check availability, supported languages, and recognition
   * levels before calling `recognizeText()`.
   *
   * @returns A promise that resolves with the device's OCR capabilities.
   */
  getCapabilities: () => Promise<OcrCapabilities>;
}

/**
 * The `OcrApi` object provides access to on-device text recognition functionality.
 * Access these properties through `shopify.ocr`.
 */
export interface OcrApi {
  ocr: OcrApiContent;
}
