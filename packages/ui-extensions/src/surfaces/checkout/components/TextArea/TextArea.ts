import type {TextAreaProps as BaseTextAreaProps} from '@shopify/ui-api-design';

export interface TextAreaProps extends BaseTextAreaProps {}

export interface TextAreaElement
  extends Omit<TextAreaProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>,
    Omit<HTMLElement, 'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput'> {
  onblur: TextAreaProps['onBlur'];
  onchange: TextAreaProps['onChange'];
  onfocus: TextAreaProps['onFocus'];
  oninput: TextAreaProps['onInput'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-text-area': TextAreaElement;
  }
}
