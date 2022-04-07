import {createRemoteComponent} from '@remote-ui/core';

type Size = 'extraSmall' | 'small' | 'base' | 'medium' | 'large' | 'extraLarge';
type AccessibilityRole =
  /** Indicate the text is a contact information. Typically used for addresses. */
  | 'address'
  /** Indicate the text has been deleted. Typically used for discounted prices. */
  | 'deletion'
  /**
   * Indicate the text is marked or highlighted and relevant to the buyer’s current action.
   * Typically used to indicate the characters that matched a search query.
   */
  | 'marking'
  /**
   * Indicate the text is an abbreviation or acronym. Use the “for” option to
   * provide a description of the abbreviation.
   */
  | {type: 'abbreviation'; for?: string}
  /** Override the text directionality. Typically used for email and phone numbers. */
  | {type: 'directional-override'; direction: 'ltr' | 'rtl'}
  /**
   * Indicate the text is a date, a time or a duration. Use the “machineReadable” option
   * to help browsers, tools or software understand the human-readable date. Valid format
   * for “machineReadable” can be found here:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#Valid_datetime_Values
   */
  | {type: 'datetime'; machineReadable?: string};

export interface TextProps {
  /** Size of the text */
  size?: Size;
  /**
   * Use to emphasize a word or a group of words compared to other nearby text.
   *
   * `strong`:
   * Indicate strong importance, seriousness, or urgency.
   * By default the text will be bold.
   *
   * `stress`:
   * Indicate emphatic stress. By default the text will be italic.
   *
   * `offset`:
   * Indicate an offset from the normal prose of the text. Typically used to indicate
   * a foreign word, fictional character thoughts, or when the text refers to the definition of a word
   * instead of representing its semantic meaning.
   * By default the text will be italic.
   */
  emphasis?: 'stress' | 'offset' | 'strong';
  /** Set the semantic of the component’s content */
  accessibilityRole?: AccessibilityRole;
  /**
   * Unique identifier. Typically used as a target for another component’s controls
   * to associate an accessible label with an action.
   */
  id?: string;
  /** Changes the visual appearance */
  appearance?:
    | 'critical'
    | 'warning'
    | 'success'
    | 'accent'
    | 'subdued'
    | 'information';
}

/**
 * Text is used to visually style and provide semantic value for a small piece of text
 * content.
 */
export const Text = createRemoteComponent<'Text', TextProps>('Text');
