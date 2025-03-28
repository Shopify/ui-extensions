import type {TimeProps as BaseTimeProps} from '@shopify/ui-api-design/dist/components/Time';

export interface TimeProps extends Pick<BaseTimeProps, 'dateTime'> {}
