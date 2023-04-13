import {createRemoteComponent} from '@remote-ui/core';

export interface Segment {
  id: string;
  label: string;
  disabled: boolean;
}

export interface SegmentedControlProps {
  segments: Segment[];
  selected: string;
  onSelect: (id: string) => void;
}

export const SegmentedControl = createRemoteComponent<
  'SegmentedControl',
  SegmentedControlProps
>('SegmentedControl');
