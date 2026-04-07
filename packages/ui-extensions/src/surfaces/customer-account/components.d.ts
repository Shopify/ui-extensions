/**
 * @publicDocs
 */
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
 * The element props interface for the avatar component.
 * @publicDocs
 */
export type AvatarElementPropsDocs = AvatarElementProps;
/**
 * @publicDocs
 */
export type AvatarElementEventsDocs = AvatarEvents;

/**
 * @publicDocs
 */
export type CustomerAccountActionPropsDocs = CustomerAccountActionProps;
/**
 * The custom element interface for the customer account action component.
 * @publicDocs
 */
export type CustomerAccountActionElementDocs = CustomerAccountActionElement;
/**
 * The customer account action component supports slots for additional content placement within the modal. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
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
 * @publicDocs
 */
export type ImageGroupPropsDocs = ImageGroupProps;
/**
 * The custom element interface for the image group component.
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
 * @publicDocs
 */
export type PagePropsDocs = PageProps;
/**
 * @publicDocs
 */
export type PageElementDocs = PageElement;
/**
 * The page component supports slots for additional content placement within the page. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
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
 * @publicDocs
 */
export type AvatarPropsDocs = AvatarProps;
/**
 * The custom element interface for the avatar component.
 * @publicDocs
 */
export type AvatarElementDocs = AvatarElement;
/**
 * The avatar component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
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
 * @publicDocs
 */
export type MenuPropsDocs = MenuProps;
/**
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
 * @publicDocs
 */
export type ButtonGroupPropsDocs = ButtonGroupProps;
/**
 * The custom element interface for the button group component.
 * @publicDocs
 */
export type ButtonGroupElementDocs = ButtonGroupElement;
/**
 * The button group component supports slots for additional content placement within the group. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
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
 * @publicDocs
 */
export type SectionPropsDocs = SectionProps;
/**
 * @publicDocs
 */
export type SectionElementDocs = SectionElement;
/**
 * The section component supports slots for additional content placement within the section. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
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
