import {createRemoteComponent} from '@remote-ui/core';

export interface FormProps {
  /**
   * Whether input elements within the form can be automatically completed by the browser.
   */
  autocomplete?: boolean;

  /**
   * A unique identifier for the form.
   */
  id?: string;

  /**
   * Whether the form is able to be submitted.
   *
   * When set to `true`, this will also disable the implicit submit behavior of the form.
   */
  disabled?: boolean;

  /**
   * A callback that is run when the form is submitted.
   */
  onSubmit?(values: Record<string, string | string[]>): void | Promise<void>;

  /**
   * A callback that is run when the form is resetted.
   */
  onReset?(): void | Promise<void>;
}

export const Form = createRemoteComponent<'Form', FormProps>('Form');
