/**
 * @fileoverview This file is used to generate the documentation for the customer-account surface. For component types, see the components folder.
 */
import {
  AvatarProps,
  AvatarElementProps,
  AvatarElement,
  AvatarEvents,
} from './components/Avatar';
import {
  ButtonGroupProps,
  ButtonGroupElement,
  ButtonGroupElementSlots,
} from './components/ButtonGroup';
import {
  CustomerAccountActionProps,
  CustomerAccountActionElement,
  CustomerAccountActionElementSlots,
} from './components/CustomerAccountAction';
import {ImageGroupProps, ImageGroupElement} from './components/ImageGroup';
import {MenuProps, MenuElement} from './components/Menu';
import {PageProps, PageElement, PageElementSlots} from './components/Page';
import {
  SectionProps,
  SectionElement,
  SectionElementSlots,
} from './components/Section';

/**
 * A modal to complete an order action flow. Use this component to populate the `customer-account.order.action.render` extension target.
 * @publicDocs
 */
export type CustomerAccountActionPropsDocs = CustomerAccountActionProps;

/**
 * The custom element interface for the CustomerAccountAction component.
 * @publicDocs
 */
export type CustomerAccountActionElementDocs = CustomerAccountActionElement;

/**
 * The slot interface for the CustomerAccountAction component.
 * @publicDocs
 */
export type CustomerAccountActionElementSlotsDocs =
  CustomerAccountActionElementSlots;

declare global {
  interface HTMLElementTagNameMap {
    ['s-customer-account-action']: CustomerAccountActionElementDocs;
  }
}

declare module 'preact' {
  interface BaseProps {
    children?: preact.ComponentChildren;
    slot?: Lowercase<string>;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-customer-account-action']: BaseProps & CustomerAccountActionPropsDocs;
    }
  }
}

/**
 * Display up to 4 images in a grid or stacked layout. For example, images of products in a wishlist or subscription.
 * @publicDocs
 */
export type ImageGroupPropsDocs = ImageGroupProps;

/**
 * The custom element interface for the ImageGroup component.
 * @publicDocs
 */
export type ImageGroupElementDocs = ImageGroupElement;

declare global {
  interface HTMLElementTagNameMap {
    ['s-image-group']: ImageGroupElementDocs;
  }
}

declare module 'preact' {
  interface BaseProps {
    children?: preact.ComponentChildren;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-image-group']: BaseProps & ImageGroupPropsDocs;
    }
  }
}

/**
 * The outer wrapper of the page—including the page title, subtitle, and page-level actions—displayed in a familiar and consistent style.
 * @publicDocs
 */
export type PagePropsDocs = PageProps;

/**
 * The custom element interface for the Page component.
 * @publicDocs
 */
export type PageElementDocs = PageElement;

/**
 * The slot interface for the Page component.
 * @publicDocs
 */
export type PageElementSlotsDocs = PageElementSlots;

declare global {
  interface HTMLElementTagNameMap {
    ['s-page']: PageElementDocs;
  }
}

declare module 'preact' {
  interface BaseProps {
    children?: preact.ComponentChildren;
    slot?: Lowercase<string>;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-page']: BaseProps & PagePropsDocs;
    }
  }
}

/**
 * The element props interface for the Avatar component.
 * @publicDocs
 */
export type AvatarElementPropsDocs = AvatarElementProps;

/**
 * Avatar is used to show a thumbnail representation of an individual or business in the interface.
 * @publicDocs
 */
export type AvatarPropsDocs = AvatarProps;

/**
 * The custom element interface for the Avatar component.
 * @publicDocs
 */
export type AvatarElementDocs = AvatarElement;

/**
 * The events interface for the Avatar component.
 * @publicDocs
 */
export type AvatarEventsDocs = AvatarEvents;

declare global {
  interface HTMLElementTagNameMap {
    ['s-avatar']: AvatarElementDocs;
  }
}

declare module 'preact' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-avatar']: BaseElementPropsWithChildren<AvatarElementDocs> &
        AvatarPropsDocs;
    }
  }
}

/**
 * Use a menu to display a list of actions in a popover. Actions can open a modal, trigger an event, or link to an external page.
 * @publicDocs
 */
export type MenuPropsDocs = MenuProps;

/**
 * The custom element interface for the Menu component.
 * @publicDocs
 */
export type MenuElementDocs = MenuElement;

declare global {
  interface HTMLElementTagNameMap {
    ['s-menu']: MenuElementDocs;
  }
}

declare module 'preact' {
  interface BaseProps {
    children?: preact.ComponentChildren;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-menu']: BaseProps & MenuProps;
    }
  }
}

/**
 * Display multiple buttons in a layout that is contextual based on the screen width or parent component.
 * @publicDocs
 */
export type ButtonGroupPropsDocs = ButtonGroupProps;

/**
 * The custom element interface for the ButtonGroup component.
 * @publicDocs
 */
export type ButtonGroupElementDocs = ButtonGroupElement;

/**
 * The slot interface for the ButtonGroup component.
 * @publicDocs
 */
export type ButtonGroupElementSlotsDocs = ButtonGroupElementSlots;

declare global {
  interface HTMLElementTagNameMap {
    ['s-button-group']: ButtonGroupElement;
  }
}

declare module 'preact' {
  interface BaseProps {
    children?: preact.ComponentChildren;
    slot?: Lowercase<string>;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-button-group']: BaseProps & ButtonGroupProps;
    }
  }
}

/**
 * Groups related content into clearly-defined thematic areas with consistent styling and structure.
 * @publicDocs
 */
export type SectionPropsDocs = SectionProps;

/**
 * The custom element interface for the Section component.
 * @publicDocs
 */
export type SectionElementDocs = SectionElement;

/**
 * The slot interface for the Section component.
 * @publicDocs
 */
export type SectionElementSlotsDocs = SectionElementSlots;

declare global {
  interface HTMLElementTagNameMap {
    ['s-section']: SectionElementDocs;
  }
}

declare module 'preact' {
  interface BaseProps {
    children?: preact.ComponentChildren;
    slot?: Lowercase<string>;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace createElement.JSX {
    interface IntrinsicElements {
      ['s-section']: BaseProps & SectionPropsDocs;
    }
  }
}
