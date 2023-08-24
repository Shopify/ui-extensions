import {PolicyModal as BasePolicyModal} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type PolicyModalProps = ReactPropsFromRemoteComponentType<
  typeof BasePolicyModal
>;

export const PolicyModal = createRemoteReactComponent(BasePolicyModal);
