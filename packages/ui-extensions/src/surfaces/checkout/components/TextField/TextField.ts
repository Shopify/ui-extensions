import type {TextFieldProps as BaseTextFieldProps} from '@shopify/ui-api-design';

export interface TextFieldProps extends Omit<BaseTextFieldProps, 'icon'> {}

export interface TextFieldElement
  extends Omit<TextFieldProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>,
    Omit<
      HTMLElement,
      'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'
    > {
  onblur: TextFieldProps['onBlur'];
  onchange: TextFieldProps['onChange'];
  onfocus: TextFieldProps['onFocus'];
  oninput: TextFieldProps['onInput'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-text-field': TextFieldElement;
  }
}
