import type {DOMAttributes} from 'react';

export type CustomElement<T> = Partial<
  T & DOMAttributes<T> & {children: any; ref: any}
>;
