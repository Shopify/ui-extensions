import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';
import {OptionList as BaseOptionList} from '@shopify/argo/components';

export type OptionListProps = ReactPropsFromRemoteComponentType<typeof BaseOptionList>;
export const OptionList = createRemoteReactComponent(BaseOptionList);
