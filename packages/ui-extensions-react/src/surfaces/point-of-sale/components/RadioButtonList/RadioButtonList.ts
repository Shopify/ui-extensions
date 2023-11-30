import {RadioButtonList as BaseRadioButtonList} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {RadioButtonListProps} from '@shopify/ui-extensions/point-of-sale';

export const RadioButtonList = createRemoteReactComponent(BaseRadioButtonList);
