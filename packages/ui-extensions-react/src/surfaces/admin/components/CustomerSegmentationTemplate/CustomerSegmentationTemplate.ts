import {CustomerSegmentationTemplate as BaseCustomerSegmentationTemplate} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const CustomerSegmentationTemplate = createRemoteReactComponent(
  BaseCustomerSegmentationTemplate,
);
export type {CustomerSegmentationTemplateProps} from '@shopify/ui-extensions/admin';
