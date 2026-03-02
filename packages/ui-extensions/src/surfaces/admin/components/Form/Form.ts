import {createRemoteComponent} from '@remote-ui/core';

/**
 * Props for the Form component, a container that groups related input
 * fields and manages submission and reset behavior through the
 * save bar.
 *
 * @publicDocs
 */
export interface FormProps {
  /**
   * A unique identifier for the form. Use this when you need to reference
   * the form from outside its tree, for example from a submit button that
   * isn't a child of the form.
   */
  id?: string;

  /**
   * A callback that fires when the form is submitted. This is triggered
   * by the save bar's **Save** action or by a submit button
   * inside the form. Return a `Promise` if you need to perform async work
   * (like a network request), and the Shopify admin will wait for it to resolve
   * before treating the submission as complete.
   */
  onSubmit(): void | Promise<void>;

  /**
   * A callback that fires when the form is reset. This is triggered
   * by the save bar's **Discard** action. Use it to revert
   * your extension's state back to its last saved values. Return a
   * `Promise` if you need to perform async cleanup.
   */
  onReset(): void | Promise<void>;
}

/**
 * A form container that groups related input fields and integrates with
 * the Shopify admin's save bar for submit and discard actions.
 */
export const Form = createRemoteComponent<'Form', FormProps>('Form');
