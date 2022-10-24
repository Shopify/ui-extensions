import {createRemoteComponent} from '@remote-ui/core';

export type IconName =
  | 'add-customer'
  | 'checkmark'
  | 'checkmark-active'
  | 'checkmark-inactive'
  | 'chevron-down'
  | 'chevron-right'
  | 'chevron-up'
  | 'circle-cancel'
  | 'circle-solid'
  | 'circle-checkmark'
  | 'circle-info'
  | 'circle-alert'
  | 'custom-sale'
  | 'radio-inactive'
  | 'radio-active'
  | 'discount'
  | 'clock'
  | 'collections'
  | 'menu'
  | 'horizontal-dots'
  | 'list'
  | 'star'
  | 'note'
  | 'products'
  | 'help'
  | 'plus'
  | 'minus'
  | 'send'
  | 'settings'
  | 'not-stocked'
  | 'sold-out'
  | 'gift-card';

export interface IconProps {
  name: IconName;
}

export const Icon = createRemoteComponent<'Icon', IconProps>('Icon');
