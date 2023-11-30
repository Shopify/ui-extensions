import {TimePicker as BaseTimePicker} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {TimePickerProps} from '@shopify/ui-extensions/point-of-sale';

export const TimePicker = createRemoteReactComponent(BaseTimePicker);
