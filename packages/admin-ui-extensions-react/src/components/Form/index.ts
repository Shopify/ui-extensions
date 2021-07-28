import type {PropsWithChildren} from 'react';
import type {FormProps as BaseFormProps} from '@shopify/admin-ui-extensions';

export type FormProps = PropsWithChildren<BaseFormProps>;
export {Form} from './Form';
