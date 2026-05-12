// ComponentChildren is defined in shared.d.ts — we re-declare it here so this
// non-generated .ts file can reference it without importing from a .d.ts path,
// and so the type harvester records the correct type name in generated docs.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentChildren = any;

/**
 * Configure the following properties on the app nav component.
 *
 * @publicDocs
 */
export interface AppNav {
  /**
   * A unique identifier for the element.
   */
  id?: string;
  /**
   * The navigation items to inject into the Shopify admin sidebar.
   * Provide `<s-link>` children where each link represents a navigation item.
   * One `<s-link>` with `rel="home"` is required and represents the home/root navigation item.
   * This component does not render any visible UI itself.
   */
  children?: ComponentChildren;
}
