import {
  FormLayout as BaseFormLayout,
  FormLayoutGroup as BaseFormLayoutGroup,
} from '@shopify/argo-post-purchase';
import {createRemoteReactComponent} from '@remote-ui/react';

export const FormLayout = createRemoteReactComponent(BaseFormLayout);
export const FormLayoutGroup = createRemoteReactComponent(BaseFormLayoutGroup);
