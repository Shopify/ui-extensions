import {createRemoteComponent} from '@remote-ui/core';

import {DestructableAction} from '../types';

export declare type LineStyle = 'dashed' | 'solid' | 'dotted';

export interface Data {
  label: string;
  rawValue: number;
}

export interface DataSeries<T, C> {
  name: string;
  data: T[];
  color?: C;
}

export interface GradientStop {
  offset: number;
  color: string;
  stopOpacity?: number;
}

export declare type Color = string | GradientStop[];

export declare type SeriesWithDefaults = Required<DataSeries<Data, Color>> & {
  lineStyle: LineStyle;
  areaColor?: string | null;
};
export interface TooltipData {
  name: string;
  point: {
    label: string;
    value: number;
  };
  color: Color;
  lineStyle: LineStyle;
}
export interface RenderTooltipContentData {
  data: TooltipData[];
}

export declare type StringLabelFormatter = (
  value: string,
  index?: number,
  data?: string[],
) => string;
export declare type NumberLabelFormatter = (value: number) => string;

export interface XAxisOptions {
  labelFormatter: StringLabelFormatter;
  xAxisLabels: string[];
  useMinimalLabels: boolean;
  hide?: boolean;
}
export interface YAxisOptions {
  labelFormatter: NumberLabelFormatter;
  integersOnly: boolean;
}

export interface LineChartProps {
  series: any[];
  emptyStateText?: string;
  isAnimated?: boolean;
  renderTooltipContent?: (data: RenderTooltipContentData) => React.ReactNode;
  skipLinkText?: string;
  theme?: string;
  xAxisOptions?: Partial<XAxisOptions>;
  yAxisOptions?: Partial<YAxisOptions>;
}

/**
 * LineChart
 *
 */
export const LineChart = createRemoteComponent<'LineChart', LineChartProps>(
  'LineChart',
);
