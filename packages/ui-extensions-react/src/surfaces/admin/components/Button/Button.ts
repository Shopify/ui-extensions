import {Button as BaseButton} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export {type ButtonProps} from '@shopify/ui-extensions/admin';
export const Button = createRemoteReactComponent(BaseButton);
