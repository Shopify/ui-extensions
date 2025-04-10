import {createRemoteComponent} from '@remote-ui/core';
import type {LinkProps as BaseLinkProps} from '@shopify/ui-api-design/dist/components/Link';

import type {OverlayActivatorProps} from '../shared-legacy';

export interface LinkProps
  extends OverlayActivatorProps,
    Omit<
      BaseLinkProps,
      | 'command'
      | 'children'
      | 'download'
      | 'onBlur'
      | 'onFocus'
      | 'target'
      | 'tone'
    > {
  command?: Extract<BaseLinkProps['command'], '--auto' | '--toggle' | '--copy'>;

  target?: Extract<BaseLinkProps['target'], 'auto' | '_self' | '_blank'>;

  tone?: Extract<BaseLinkProps['tone'], 'auto' | 'neutral'>;
}

export const linkTargets = [
  'auto',
  '_blank',
  '_self',
] satisfies LinkProps['target'][];

export const linkTones = ['auto', 'neutral'] satisfies LinkProps['tone'][];

/**
 * Link makes text interactive so customers can perform an action, such as navigating to another location.
 */
export interface LinkElement
  extends Omit<LinkProps, 'onClick'>,
    Omit<HTMLElement, 'id' | 'lang' | 'onclick'> {
  onclick: LinkProps['onClick'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-link': LinkElement;
  }
}

export const Link = createRemoteComponent<'Link', LinkProps>('Link');
