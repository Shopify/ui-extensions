import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Spinner as BaseSpinner} from '../../core';

export type SpinnerProps = ReactPropsFromRemoteComponentType<typeof BaseSpinner>;
export const Spinner = createRemoteReactComponent(BaseSpinner);
