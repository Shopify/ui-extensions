import type {
  ReferenceEntityTemplateSchema,
  LinkType,
} from '@shopify/generate-docs';

/**
 * Defines the deployment contexts where a component can be used.
 * Each context can have its own description and related components.
 */
export type DeploymentContext = 'admin' | 'app-home';

/**
 * Context-specific overrides for component metadata.
 * Use this to provide different descriptions or related components for different deployment contexts.
 */
export interface ContextOverride {
  /** Override description for this specific context */
  description?: string;
  /** Override related components for this specific context */
  related?: LinkType[];
}

export interface SharedReferenceEntityTemplateSchema
  extends Pick<
    ReferenceEntityTemplateSchema,
    'name' | 'description' | 'category' | 'subCategory' | 'related'
  > {
  /**
   * Context-specific overrides for different deployment contexts.
   * When specified, these values override the base description and related fields.
   *
   * @example
   * ```ts
   * contexts: {
   *   'admin': {
   *     description: 'Admin-specific description...',
   *     related: ['AdminComponent'],
   *   },
   *   'app-home': {
   *     description: 'App Home-specific description...',
   *     related: ['AppHomeComponent'],
   *   }
   * }
   * ```
   */
  contexts?: Partial<Record<DeploymentContext, ContextOverride>>;
}
