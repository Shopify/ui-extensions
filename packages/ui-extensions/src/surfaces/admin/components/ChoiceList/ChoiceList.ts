import {createRemoteComponent} from '@remote-ui/core';

export interface ChoiceListProps {
  /**
   * Whether the choicelist can be modified.
   */
  disabled?: boolean;

  /**
   * Indicate an error to the user. The field will be given a specific stylistic treatment
   * to communicate problems that have to be resolved immediately.
   */
  error?: string;

  /**
   * An identifier for the choicelist that is unique within the nearest
   * containing `Form` component.
   */
  name?: string;

  /**
   * A callback that is run whenever the choicelist is changed. This callback
   * is called with a string value of the selected option. This component is
   * [controlled](https://reactjs.org/docs/forms.html#controlled-components),
   * so you must store this value in state and reflect it back in the
   * `checked` or `value` props.
   */
  onChange?: (value: boolean) => void;

  /**
   * The current value for the field. If omitted, the field will be empty. You should
   * update this value in response to the `onChange` callback.
   */
  value?: boolean;
}

export const ChoiceList = createRemoteComponent<'ChoiceList', ChoiceListProps>(
  'ChoiceList',
);
