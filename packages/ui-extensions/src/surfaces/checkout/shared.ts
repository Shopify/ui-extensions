import type {ComponentsBuilder, AnyComponentBuilder} from '../../shared';

import type * as ComponentsModule from './components';

export type Components = ComponentsBuilder<typeof ComponentsModule>;
export type AnyComponent = AnyComponentBuilder<typeof ComponentsModule>;
