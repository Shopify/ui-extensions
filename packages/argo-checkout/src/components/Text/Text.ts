import {createRemoteComponent} from '../../utilities';

type Size = 'small' | 'medium' | 'large' | 'xlarge';
type Variation = 'subdued' | 'emphasized' | 'critical' | 'deleted';
type Alignment = 'leading' | 'trailing' | 'center';

export interface TextProps {
  id?: string;
  size?: Size;
  variation?: Variation;
  alignment?: Alignment;
  inline?: boolean;
  nowrap?: boolean;
  ariaHidden?: boolean;
}

export const Text = createRemoteComponent<'Text', TextProps>('Text');
