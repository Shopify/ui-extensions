import type {EmailFieldProps as BaseEmailFieldProps} from '@shopify/ui-api-design';

export interface EmailFieldProps extends BaseEmailFieldProps {}

export interface EmailFieldElement
  extends Omit<EmailFieldProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>,
    Omit<
      HTMLElement,
      'id' | 'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'prefix'
    > {
  onblur: EmailFieldProps['onBlur'];
  onchange: EmailFieldProps['onChange'];
  onfocus: EmailFieldProps['onFocus'];
  oninput: EmailFieldProps['onInput'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-email-field': EmailFieldElement;
  }
}
