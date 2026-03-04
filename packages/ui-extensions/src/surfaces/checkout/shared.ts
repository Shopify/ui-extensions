import type {ComponentsBuilder, AnyComponentBuilder} from '../../shared';

import type * as ComponentsModule from './components';

/** @publicDocs */
export type Components = ComponentsBuilder<typeof ComponentsModule>;
/** @publicDocs */
export type AnyComponent = AnyComponentBuilder<typeof ComponentsModule>;
