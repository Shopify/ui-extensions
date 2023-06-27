import {DatePicker as BaseDatePicker} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {DatePickerProps} from '@shopify/retail-ui-extensions';

export const DatePicker = createRemoteReactComponent(BaseDatePicker);
