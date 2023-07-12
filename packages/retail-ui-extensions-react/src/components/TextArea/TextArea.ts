import {TextArea as BaseTextArea} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {TextAreaProps} from '@shopify/retail-ui-extensions';

export const TextArea = createRemoteReactComponent(BaseTextArea);
