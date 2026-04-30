import {AnyComponent} from '../../checkout';

export type StandardComponents =
  | Exclude<AnyComponent, 'ConsentCheckbox' | 'ConsentPhoneField'>
  | 'Avatar'
  | 'ButtonGroup'
  | 'CustomerAccountAction'
  | 'ImageGroup'
  | 'Menu'
  | 'Page'
  | 'Section';

export default StandardComponents;
