import type {ButtonProps as BaseButtonProps} from '@shopify/ui-api-design';

export interface ButtonProps
  extends Omit<
    BaseButtonProps,
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
  target?: Extract<BaseButtonProps['target'], 'auto' | '_self' | '_blank'>;

  tone?: Extract<BaseButtonProps['tone'], 'auto' | 'neutral' | 'critical'>;

  type?: Extract<BaseButtonProps['type'], 'submit' | 'button'>;

  variant?: Extract<
    BaseButtonProps['variant'],
    'auto' | 'primary' | 'secondary'
  >;
}

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
