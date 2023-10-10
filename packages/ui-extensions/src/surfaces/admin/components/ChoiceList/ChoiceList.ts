import {createRemoteComponent} from '@remote-ui/core';
import {InputProps} from '../shared';

export interface ChoiceListProps
  extends Pick<
    InputProps<string | string[]>,
    'value' | 'name' | 'onChange' | 'disabled' | 'error'
  > {}

export const ChoiceList = createRemoteComponent<'ChoiceList', ChoiceListProps>(
  'ChoiceList',
);
