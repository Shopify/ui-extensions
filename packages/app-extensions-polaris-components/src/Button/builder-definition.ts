import {AppExtensionMinor} from '@shopify/polaris-icons';
import * as Types from '../constants';

export default {
  componentType: 'Button',
  icon: AppExtensionMinor,
  editableProps: {
    label: Types.STRING,
    onClick: Types.FUNCTION,
    primary: Types.BOOLEAN,
    secondary: Types.BOOLEAN,
    textAlign: ['left', 'right', 'center'],
  },
};
