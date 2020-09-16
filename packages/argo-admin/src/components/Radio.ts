import {createRemoteComponent} from '@remote-ui/core';

export interface RadioProps {
  label: string;
  helpText?: string;
  checked?: boolean;
  id?: string;
  name: string;
  value: string;
  onChange: (newValue: string) => void;
}

export const Radio = createRemoteComponent<'Radio', RadioProps>('Radio');
