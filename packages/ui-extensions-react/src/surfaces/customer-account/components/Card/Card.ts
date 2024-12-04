import {Card as BaseCard} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';
import {CustomElement} from '../types';
import {forwardRef, PropsWithChildren} from 'react';
import {useCustomElementProperties} from '../shared';

export type CardProps = ReactPropsFromRemoteComponentType<typeof BaseCard>;

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['shopify-card']: CustomElement<CardProps>;
    }
  }
}

export const Card = forwardRef<any, PropsWithChildren<CardProps>>(function Card(
  props,
  ref,
) {
  const {children, ...rest} = props;

  const wrapperRef = useCustomElementProperties(rest, ref);

  return <shopify-card ref={wrapperRef}>{children}</shopify-card>;
});
