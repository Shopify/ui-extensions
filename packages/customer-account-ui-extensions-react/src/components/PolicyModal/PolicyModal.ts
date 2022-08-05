import {PolicyModal as BasePolicyModal} from '@shopify/customer-account-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type PolicyModalProps = ReactPropsFromRemoteComponentType<
  typeof BasePolicyModal
>;

export const PolicyModal = createRemoteReactComponent(BasePolicyModal);
