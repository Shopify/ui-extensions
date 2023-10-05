import {createRemoteComponent} from '@remote-ui/core';
import type {SizeScale, Tone} from '../shared';
import {IconName} from '../Icon/IconName';

interface BadgeBaseProps {
  accessibilityLabel?: string;
  tone?: Tone;
  size?: Extract<SizeScale, 'small-100' | 'base'>;
}

interface BadgeIconProps {
  icon: IconName;
  iconPosition?: 'start' | 'end';
}

interface BadgeNoIconProps {
  icon: never;
  iconPosition: never;
}

export type BadgeProps = BadgeBaseProps & (BadgeIconProps | BadgeNoIconProps);

export const Badge = createRemoteComponent<'Badge', BadgeProps>('Badge');
