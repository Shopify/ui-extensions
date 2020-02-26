import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface StackProps {
  vertical: boolean;
  distribution: Distribution;
  spacing: Spacing;
}

enum Distribution {
  Leading,
  Trailing,
  Center,
  Fill,
}

enum Spacing {
  ExtraTight,
  Tight,
  Loose,
  ExtraLoose,
  None,
}

export const Stack = createRemoteComponent<'Stack', StackProps>('Stack');
