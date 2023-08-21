import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export interface Segment extends TestableComponentProps {
  id: string;
  label: string;
  disabled: boolean;
}

export interface SegmentedControlProps extends TestableComponentProps {
  segments: Segment[];
  selected: string;
  onSelect: (id: string) => void;
}

export const SegmentedControl = createRemoteComponent<
  'SegmentedControl',
  SegmentedControlProps
>('SegmentedControl');
