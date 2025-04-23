import type {FormProps as BaseFormProps} from '@shopify/ui-api-design';

export interface FormProps
  extends Omit<BaseFormProps, 'autocomplete' | 'onReset' | 'onSubmit'> {
  onSubmit?: () => void;
}

export interface FormElement
  extends Omit<FormProps, 'onSubmit'>,
    Omit<HTMLElement, 'id' | 'onsubmit'> {
  onsubmit: FormProps['onSubmit'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-form': FormElement;
  }
}
