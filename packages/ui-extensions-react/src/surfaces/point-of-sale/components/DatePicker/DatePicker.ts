import {DatePicker as BaseDatePicker} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {DatePickerProps} from '@shopify/ui-extensions/point-of-sale';

export const DatePicker = createRemoteReactComponent(BaseDatePicker);
