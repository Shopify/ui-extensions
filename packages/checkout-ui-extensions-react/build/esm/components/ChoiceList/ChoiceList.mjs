import { ChoiceList as BaseChoiceList, Choice as BaseChoice } from '@shopify/checkout-ui-extensions';
import { createRemoteReactComponent } from '@remote-ui/react';
export var ChoiceList = createRemoteReactComponent(BaseChoiceList);
export var Choice = createRemoteReactComponent(BaseChoice);