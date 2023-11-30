import {TextArea as BaseTextArea} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {TextAreaProps} from '@shopify/ui-extensions/point-of-sale';

export const TextArea = createRemoteReactComponent(BaseTextArea);
