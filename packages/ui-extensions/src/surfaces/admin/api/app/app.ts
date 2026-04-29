/**
 * The type of extension.
 * @publicDocs
 */
export type ExtensionType = 'ui_extension' | 'theme_app_extension';

/**
 * The status of an extension indicating whether it's active, available for activation, or unavailable.
 * @publicDocs
 */
export type ExtensionStatus = 'active' | 'available' | 'unavailable';

/**
 * The target location for theme app blocks within a theme section.
 * @publicDocs
 */
export type ThemeAppBlockTarget = 'section';

/**
 * The target location for theme app embeds within the document.
 * @publicDocs
 */
export type ThemeAppEmbedTarget = 'head' | 'body' | 'compliance_head';

/**
 * Represents an activation of a UI extension at a specific target.
 * @publicDocs
 */
export interface UiExtensionActivation {
  /**
   * The extension target where this extension is activated.
   */
  target: string;
}

/**
 * Represents an activation of a theme block at a specific target within a theme.
 * @publicDocs
 */
export interface ThemeBlockActivation {
  /**
   * The target location within the theme.
   */
  target: string;

  /**
   * The ID of the theme where this block is activated.
   */
  themeId: string;
}

/**
 * Represents a theme extension block activation with its status and nested activations.
 * @publicDocs
 */
export interface ThemeExtensionBlockActivation {
  /**
   * The target location for this theme extension block or embed.
   */
  target: ThemeAppBlockTarget | ThemeAppEmbedTarget;

  /**
   * The handle identifier for this theme extension block.
   */
  handle: string;

  /**
   * The display name of this theme extension block.
   */
  name: string;

  /**
   * The current status of this theme extension block.
   */
  status: ExtensionStatus;

  /**
   * The list of theme-specific activations for this block.
   */
  activations: ThemeBlockActivation[];
}

/**
 * Information about an extension registered for the current app.
 * @publicDocs
 */
export interface ExtensionInfo {
  /**
   * The unique handle identifier for this extension, if available.
   */
  handle?: string | null;

  /**
   * The list of activations for this extension. For UI extensions, this contains target information.
   * For theme extensions, this contains detailed block activation information.
   */
  activations: UiExtensionActivation[] | ThemeExtensionBlockActivation[];

  /**
   * The current status of this extension.
   */
  status?: ExtensionStatus;

  /**
   * The type of extension.
   */
  type?: ExtensionType;
}

/**
 * The `AppApi` object provides methods for interacting with app-level data and functionality.
 * Use this API to query information about extensions registered for the current app.
 * @publicDocs
 */
export interface AppApi {
  /**
   * Returns a list of all extensions registered for the current app, including their activation status and target information.
   * Use this to discover what extensions are available and where they are activated.
   *
   * @returns A promise that resolves to an array of extension information objects.
   */
  extensions: () => Promise<ExtensionInfo[]>;
}
