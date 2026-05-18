// ComponentChildren is defined in shared.d.ts — we re-declare it here so this
// non-generated .ts file can reference it without importing from a .d.ts path,
// and so the type harvester records the correct type name in generated docs.
type ComponentChildren = any;

/**
 * Configure the following properties on the app nav component.
 *
 * @publicDocs
 */
export interface AppNavAttributes {
  /**
   * A unique identifier for the element.
   */
  id?: string;
  /**
   * The navigation items to inject into the Shopify admin sidebar.
   * Provide `<s-link>` children where each link represents a navigation item.
   * This component does not render any visible UI itself.
   */
  children?: ComponentChildren;
}

/**
 * Attributes for link elements used as children of app nav. Each link defines a navigation destination in your app's menu.
 *
 * @publicDocs
 */
export interface AppNavLinkAttributes {
  /**
   * The URL path for the navigation item. Must be a relative path within your app, such as `/products` or `/settings`. When clicked, it navigates the app to this route without a full page reload. The path should match a route defined in your app's routing configuration.
   */
  href: string;
  /**
   * The visible label text for the navigation item. Keep labels short (1-2 words) and use nouns that describe the destination (such as "Products", "Settings", or "Reports"). Avoid verbs like "Manage" or "View" to maintain consistency with Shopify admin navigation patterns.
   */
  children?: string;
}
