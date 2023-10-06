import {createRemoteComponent} from '@remote-ui/core';
import type {AccessibilityLabelProps, SizeScale, Tone} from '../shared';
import {IconName} from '../Icon/IconName';

interface BadgeBaseProps extends AccessibilityLabelProps {
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
