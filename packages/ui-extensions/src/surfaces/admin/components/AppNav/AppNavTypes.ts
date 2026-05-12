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
