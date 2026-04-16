import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps, DisclosureActivatorProps} from '../shared';

/** @publicDocs */
export interface SwitchProps extends IdProps, DisclosureActivatorProps {
  /**
   * An identifier for the field that is unique within the nearest
   * containing `Form` component.
   */
  name?: string;

  /**
   * Whether the switch is active.
   */
  checked?: boolean;

  /**
   * The text displayed as the switch label, which identifies the purpose of the switch to users.
   */
  label?: string;

  /**
   * Whether the switch is selected. This prop is an alias for `checked`,
   * and can be useful in form libraries that provide a normalized API for
   * dealing with both `boolean` and `string` values. If both `value` and
   * `checked` are set, `checked` takes precedence.
   */
  value?: boolean;

  /**
   * Whether the switch is disabled, preventing any user interaction.
   */
  disabled?: boolean;

  /**
   * A label used for users of assistive technologies.
   */
  accessibilityLabel?: string;

  /**
   * A callback fired when the switch value changes. This callback
   * is called with a boolean indicating whether the switch should now be
   * active or inactive. This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components),
   * so you must store this value in state and reflect it back in the
   * `checked` or `value` props.
   */
  onChange?(value: boolean): void;
}

export const Switch = createRemoteComponent<'Switch', SwitchProps>('Switch');
