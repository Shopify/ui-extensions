/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="WebWorker" />

export interface CardProps {
  /**
   * Adjust the padding of all edges.
   *
   * `true` applies a default padding that is appropriate for the component.
   */
  padding?: boolean;
}

declare class CardComponent extends HTMLElement implements CardProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-card']: CardComponent;
  }
  namespace JSX {
    interface IntrinsicElements {
      ['s-card']: Card;
    }
  }
}
