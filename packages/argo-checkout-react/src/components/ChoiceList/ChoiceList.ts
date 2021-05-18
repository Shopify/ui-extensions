import {
  ChoiceList as BaseChoiceList,
  Choice as BaseChoice,
} from '@shopify/argo-checkout';
import {createRemoteReactComponent} from '@remote-ui/react';

export const ChoiceList = createRemoteReactComponent(BaseChoiceList);
export const Choice = createRemoteReactComponent(BaseChoice);
