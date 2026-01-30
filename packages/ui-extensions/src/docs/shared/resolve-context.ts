import type {
  SharedReferenceEntityTemplateSchema,
  DeploymentContext,
} from './docs-type';

/**
 * Resolves context-specific content for a shared component schema.
 *
 * When a component has context-specific overrides defined, this function
 * merges the base schema with the appropriate context overrides.
 *
 * @param schema - The shared component schema
 * @param context - The deployment context to resolve for (e.g., 'admin' or 'app-home')
 * @returns The schema with context-specific overrides applied
 *
 * @example
 * ```ts
 * import badgeContent from './components/Badge';
 * import { resolveContext } from './resolve-context';
 *
 * // Get admin-specific description
 * const adminBadge = resolveContext(badgeContent, 'admin');
 * console.log(adminBadge.description); // Admin-specific description
 *
 * // Get app-home-specific description
 * const appHomeBadge = resolveContext(badgeContent, 'app-home');
 * console.log(appHomeBadge.description); // App Home-specific description
 * ```
 */
export function resolveContext(
  schema: SharedReferenceEntityTemplateSchema,
  context: DeploymentContext,
): Omit<SharedReferenceEntityTemplateSchema, 'contexts'> {
  const contextOverride = schema.contexts?.[context];

  if (!contextOverride) {
    // No context-specific overrides, return base schema without contexts field
    const {contexts, ...baseSchema} = schema;
    return baseSchema;
  }

  // Merge context-specific overrides with base schema
  const {contexts, ...baseSchema} = schema;
  return {
    ...baseSchema,
    ...(contextOverride.description && {
      description: contextOverride.description,
    }),
    ...(contextOverride.related && {related: contextOverride.related}),
  };
}

/**
 * Type guard to check if a schema has context-specific overrides.
 *
 * @param schema - The shared component schema to check
 * @returns True if the schema has context overrides defined
 */
export function hasContextOverrides(
  schema: SharedReferenceEntityTemplateSchema,
): boolean {
  return Boolean(schema.contexts && Object.keys(schema.contexts).length > 0);
}

/**
 * Gets all available contexts for a schema.
 *
 * @param schema - The shared component schema
 * @returns Array of deployment contexts that have overrides defined
 */
export function getAvailableContexts(
  schema: SharedReferenceEntityTemplateSchema,
): DeploymentContext[] {
  if (!schema.contexts) {
    return [];
  }
  return Object.keys(schema.contexts) as DeploymentContext[];
}
