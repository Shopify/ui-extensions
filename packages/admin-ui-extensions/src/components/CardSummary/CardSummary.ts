import {createRemoteComponent} from '@remote-ui/core';

export interface CardSummaryProps {
  label: string;
  value: string;
}

export const CardSummary = createRemoteComponent<
  'CardSummary',
  CardSummaryProps
>('CardSummary');
