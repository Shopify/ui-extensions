import type {NumberFieldProps as BaseNumberFieldProps} from '@shopify/ui-api-design';

export interface NumberFieldProps extends BaseNumberFieldProps {}

export interface NumberFieldElement
  extends Omit<NumberFieldProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'>,
    Omit<
      HTMLElement,
      | 'id'
      | 'inputMode'
      | 'onblur'
      | 'onchange'
      | 'onfocus'
      | 'oninput'
      | 'prefix'
    > {
  onblur: NumberFieldProps['onBlur'];
  onchange: NumberFieldProps['onChange'];
  onfocus: NumberFieldProps['onFocus'];
  oninput: NumberFieldProps['onInput'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-number-field': NumberFieldElement;
  }
}
