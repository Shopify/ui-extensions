import type {ComponentsBuilder, AnyComponentBuilder} from '../../shared';

type ComponentTypes = typeof import('./components');

/**
 * @publicDocs
 */
export type Components = ComponentsBuilder<ComponentTypes>;
/**
 * @publicDocs
 */
export type AnyComponent = AnyComponentBuilder<ComponentTypes>;
