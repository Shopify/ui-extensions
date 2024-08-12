import {Link as BaseLink} from '@shopify/ui-extensions/checkout';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {createRemoteComponent} from '@remote-dom/react';

export type LinkProps = ReactPropsFromRemoteComponentType<typeof BaseLink>;

export const Link = createRemoteComponent('ui-link', BaseLink);
