import {createRemoteComponent} from '@remote-ui/core';
import {AccessibilityLabelProps, InputProps} from '../shared';

/**
 * Props for an individual choice within a ChoiceList. Each choice
 * represents a selectable option rendered as either a radio button or
 * a checkbox, depending on the `multiple` setting of the parent ChoiceList.
 */
export interface ChoiceProps
  extends AccessibilityLabelProps,
    Pick<
      InputProps<string>,
      'disabled' | 'label' | 'id' | 'readOnly' | 'error'
    > {
  /**
   * Whether this individual choice is checked. Use this to pre-select a
   * specific option when the choice list is first rendered.
   * @defaultValue false
   */
  checked?: boolean;
}

/**
 * Props for the ChoiceList component, which renders a group of selectable
 * choices as either radio buttons (single selection) or checkboxes
 * (multiple selection).
 */
export interface ChoiceListProps
  extends Pick<
    InputProps<string | string[]>,
    | 'value'
    | 'name'
    | 'onChange'
    | 'disabled'
    | 'error'
    | 'readOnly'
    | 'defaultValue'
  > {
  /**
   * The list of choices to render. Each choice is an object with properties
   * like `label`, `id`, `disabled`, `readOnly`, `error`, and `checked`.
   * Provide at least two choices for meaningful selection.
   */
  choices?: ChoiceProps[];
  /**
   * Whether the merchant can select more than one choice. When `true`, then each
   * choice is rendered as a checkbox. When `false`, then choices are rendered as
   * radio buttons and only one can be selected at a time.
   * @defaultValue false
   */
  multiple?: boolean;
}

/**
 * ChoiceList renders a group of selectable choices as either radio
 * buttons or checkboxes.
 */
export const ChoiceList = createRemoteComponent<'ChoiceList', ChoiceListProps>(
  'ChoiceList',
);
