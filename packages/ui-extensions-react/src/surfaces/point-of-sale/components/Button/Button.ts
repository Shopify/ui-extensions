import {Button as BaseButton} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {ButtonProps} from '@shopify/ui-extensions/point-of-sale';

export const Button = createRemoteReactComponent(BaseButton);
