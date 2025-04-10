export interface PageProps {
  /**
   * The main page heading
   */
  heading?: string;

  /**
   * The text to be used as subheading.
   */
  subheading?: string;
}

declare class PageComponent extends HTMLElement implements PageProps {}

declare global {
  interface HTMLElementTagNameMap {
    ['s-page']: PageComponent;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-page']: HTMLAttributes<HTMLElement> & PageProps;
    }
  }
}
