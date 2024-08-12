import {Button as BaseButton} from '@shopify/ui-extensions/checkout';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {createRemoteComponent} from '@remote-dom/react';

// @ts-ignore
export type ButtonProps = ReactPropsFromRemoteComponentType<typeof BaseButton>;

export const Button = createRemoteComponent('ui-button', BaseButton, {
  eventProps: {
    onPress: {event: 'press'},
  },
  slots: ['overlay'],
});
