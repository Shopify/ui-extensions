import {TimePicker as BaseTimePicker} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {TimePickerProps} from '@shopify/retail-ui-extensions';

export const TimePicker = createRemoteReactComponent(BaseTimePicker);
