import {createRemoteComponent} from '@remote-ui/core';
import type {ButtonProps as BaseButtonProps} from '@shopify/ui-api-design/dist/components/Button';

import type {OverlayActivatorProps} from '../shared-legacy';

export interface ButtonProps
  extends OverlayActivatorProps,
    Omit<
      BaseButtonProps,
      | 'command'
      | 'children'
      | 'download'
      | 'icon'
      | 'lang'
      | 'onBlur'
      | 'onFocus'
      | 'target'
      | 'tone'
      | 'type'
      | 'variant'
    > {
  command?: Extract<
    BaseButtonProps['command'],
    '--auto' | '--toggle' | '--copy'
  >;

  target?: Extract<BaseButtonProps['target'], 'auto' | '_self' | '_blank'>;

  tone?: Extract<BaseButtonProps['tone'], 'auto' | 'neutral' | 'critical'>;

  type?: Extract<BaseButtonProps['type'], 'submit' | 'button'>;

  variant?: Extract<
    BaseButtonProps['variant'],
    'auto' | 'primary' | 'secondary'
  >;
}

export const buttonTones = [
  'auto',
  'neutral',
  'critical',
] satisfies ButtonProps['tone'][];

export const buttonTypes = ['button', 'submit'] satisfies ButtonProps['type'][];

export const buttonVariants = [
  'auto',
  'primary',
  'secondary',
] satisfies ButtonProps['variant'][];

/**
 * Buttons are used for actions, such as “Add”, “Continue”, “Pay now”, or “Save”.
 */
export interface ButtonElement
  extends Omit<ButtonProps, 'onClick'>,
    Omit<HTMLElement, 'id' | 'onclick'> {
  onclick: ButtonProps['onClick'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-button': ButtonElement;
  }
}

export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
