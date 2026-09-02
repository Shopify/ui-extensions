/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  ModalProps$1,
  PreactCustomElement,
  RenderImpl,
  InteractionProps,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 * @publicDocs
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`. Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 * @publicDocs
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
/**
 * Base props for Preact custom elements without children support. Includes common properties like key, ref, and slot for elements that don't accept child content.
 * @publicDocs
 */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /**
   * A unique identifier for this element, used by the virtual DOM to efficiently track and update elements in lists.
   * Essential for maintaining component state and optimizing re-renders when lists change.
   */
  key?: preact.Key;
  /**
   * A reference to access the underlying DOM element directly.
   * Typically created using `useRef()` to interact with the element imperatively or measure its properties.
   */
  ref?: preact.Ref<TClass>;
  /**
   * The named slot to which this element is assigned in the parent component's shadow DOM.
   *
   * Used for advanced component composition with web components.
   */
  slot?: Lowercase<string>;
}
/**
 * Base props for Preact custom elements with children support. Extends PreactBaseElementProps with the ability to render child elements.
 * @publicDocs
 */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  /**
   * The child elements to be rendered within this component.
   */
  children?: preact.ComponentChildren;
}

export type ReactIntrinsicElementChildren<PreactProps extends object> =
  'children' extends keyof PreactProps
    ? {
        children?: ReactNode;
      }
    : Record<never, never>;
export type ReactIntrinsicElementProps<
  PreactProps extends object,
  ElementType,
> = Omit<PreactProps, 'children' | 'key' | 'ref' | 'slot'> &
  ReactIntrinsicElementChildren<PreactProps> &
  RefAttributes<ElementType> & {
    slot?: Lowercase<string>;
  };
export type ReactIntrinsicElements = {
  [Tag in Exclude<
    Extract<keyof preact$1.createElement.JSX.IntrinsicElements, `s-${string}`>,
    `s-test-${string}`
  >]: ReactIntrinsicElementProps<
    preact$1.createElement.JSX.IntrinsicElements[Tag],
    Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
  >;
};
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ReactIntrinsicElements {}
  }
}

/**
 * Represents the modal component props with all properties marked as required.
 * @publicDocs
 */
export type RequiredAlignedModalProps = Required<ModalProps$1>;
/**
 * Configure the following properties on the modal component.
 */
export interface ModalProps
  extends Pick<
    RequiredAlignedModalProps,
    | 'accessibilityLabel'
    | 'heading'
    | 'padding'
    | 'size'
    | 'hideOverlay'
    | 'showOverlay'
    | 'toggleOverlay'
  > {
  /**
   * The size of the modal component, controlling its width and height. Larger sizes provide more space for content while smaller sizes are more compact.
   */
  size: Extract<
    ModalProps$1['size'],
    'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;
  /**
   * A title that describes the content of the modal.
   *
   */
  heading: RequiredAlignedModalProps['heading'];
  /**
   * A label that describes the purpose of the modal. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   *
   * This overrides the `heading` prop for screen readers.
   */
  accessibilityLabel: RequiredAlignedModalProps['accessibilityLabel'];
  /**
   * Adjust the padding around the modal content.
   *
   * `base`: applies padding that is appropriate for the element.
   *
   * `none`: removes all padding from the element. This can be useful when elements inside the modal need to span
   * to the edge of the modal. For example, a full-width image. In this case, rely on box with a padding of 'base'
   * to bring back the desired padding for the rest of the content.
   *
   * @default 'base'
   */
  padding: RequiredAlignedModalProps['padding'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

export interface PreactOverlayControlProps
  extends Pick<InteractionProps, 'commandFor' | 'interestFor'> {
  /**
   * The action that [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this component is activated.
   *
   * - `--auto`: A default action for the target component.
   * - `--show`: Shows the target component.
   * - `--hide`: Hides the target component.
   * - `--toggle`: Toggles the visibility of the target component.
   *
   * @default '--auto'
   */
  command: Extract<
    InteractionProps['command'],
    '--show' | '--hide' | '--toggle' | '--auto'
  >;
  /**
   * The component that [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this component is activated.
   */
  commandFor: Extract<InteractionProps['commandFor'], string>;
  /**
   * The ID of the component to show when users hover over or focus on this component. Use this to connect interactive components to popovers or tooltips that provide additional context or information.
   */
  interestFor: Extract<InteractionProps['interestFor'], string>;
}

/**
 * Shared symbols for overlay control functionality.
 * These symbols are used by components that implement overlay behavior
 * (like Popover, Tooltip, Modal, etc.) to communicate with the overlay control system.
 */
/**
 * Symbol used to track the open or closed state of the overlay.
 */
declare const overlayHidden: unique symbol;
/**
 * Symbol used to track the element that opened the overlay. In some cases, like tooltips and popovers, the overlay is positioned against this element. In all cases, focus should be restored to this element when the overlay is closed.
 */
declare const overlayActivator: unique symbol;
declare const overlayHideFrameId: unique symbol;
/**
 * Represents the initialization object for creating a polyfill command event. Used for overlay control commands in environments that require polyfills.
 * @publicDocs
 */
export type PolyfillCommandEventInit = EventInit & {
  source: HTMLElement | null | undefined;
  command: PreactOverlayControlProps['command'];
  rootActivator?: HTMLElement | null;
};
/**
 * Represents a polyfill command event for overlay controls. Used in environments where native command events are not available.
 * @publicDocs
 */
export type PolyfillCommandEvent = Event & {
  source: PolyfillCommandEventInit['source'];
  command: PolyfillCommandEventInit['command'];
  /** Have to use `_s_shadowSource` because `source` is retargeted to the shadow host by browsers */
  _s_shadowSource: PolyfillCommandEventInit['source'];
  /** Root activator for nested overlays (e.g., menu button when modal opened from menu item) */
  _s_rootActivator?: HTMLElement | null;
};
declare global {
  interface GlobalEventHandlersEventMap {
    command: PolyfillCommandEvent;
  }
}

declare class PreactOverlayElement extends PolarisCustomElement {
  constructor(renderImpl: RenderImpl);
  /** @private */
  disconnectedCallback(): void;
  /** @private */
  [overlayHidden]: boolean;
  /** @private */
  [overlayActivator]: HTMLElement | null | undefined;
  /** @private */
  [overlayHideFrameId]?: number;
}

declare const hasOpenChildModal: unique symbol;

declare const show: unique symbol;
declare const hide: unique symbol;
declare const isOpen: unique symbol;
declare const dialog: unique symbol;
declare const dismiss: unique symbol;
declare const focusedElement: unique symbol;
declare const rootActivator: unique symbol;
declare const onEscape: unique symbol;
declare const nestedModals: unique symbol;
declare const onKeyUp: unique symbol;
declare const onBackdropMouseDown: unique symbol;
declare const onBackdropMouseUp: unique symbol;
declare const onBackdropClick: unique symbol;
declare const backdropMouseDownOnDialog: unique symbol;
declare const backdropMouseUpOnDialog: unique symbol;
declare const abortController: unique symbol;
declare const onChildModalChange: unique symbol;
declare const childrenRerenderObserver: unique symbol;
declare const shadowDomRerenderObserver: unique symbol;
declare const focusTrapController: unique symbol;
declare const escapeKeyUpController: unique symbol;
declare const ensureDialogRef: unique symbol;
declare abstract class ModalBase<TTagName extends keyof HTMLElementTagNameMap>
  extends PreactOverlayElement
  implements
    Pick<ModalProps, 'accessibilityLabel' | 'heading' | 'padding' | 'size'>
{
  accessor accessibilityLabel: ModalProps['accessibilityLabel'];
  accessor heading: ModalProps['heading'];
  accessor padding: ModalProps['padding'];
  accessor size: ModalProps['size'];
  /**
   * A callback fired when the modal closes.
   * Use to perform cleanup or trigger side effects when the modal is dismissed.
   */
  accessor onhide: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired when the modal starts to open, before any entrance animation begins.
   * Use to prepare content or fetch data needed for the modal.
   */
  accessor onshow: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired after the modal has fully closed and any exit animation completes.
   * Use to reset form state, clear temporary data, or update the page after dismissal.
   */
  accessor onafterhide: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired after the modal has fully opened and any entrance animation completes.
   * Use to focus an input field or initialize content once the modal is visible.
   */
  accessor onaftershow: CallbackEventListener<TTagName> | null;
  /** @private */
  [abortController]: AbortController;
  /** @private */
  [dialog]: HTMLDialogElement | null;
  /** @private */
  [focusedElement]: HTMLElement | null;
  /** @private */
  [rootActivator]: HTMLElement | null;
  /** @private */
  [nestedModals]: Map<HTMLElement, boolean>;
  /** @private */
  [childrenRerenderObserver]: MutationObserver;
  /** @private */
  [shadowDomRerenderObserver]: MutationObserver;
  /**
   * Focus trap keydown handler reference, stored for cleanup.
   *
   * The focus trap is managed imperatively here in ModalBase rather than
   * via a Preact useEffect in foundation.tsx. This is because aftershow
   * (fired after CSS animations complete) and useEffect (fired after
   * Preact's async effect scheduling) are independent async chains with
   * no synchronization — the useEffect could run before or after
   * aftershow, making tests non-deterministic.
   *
   * By attaching the focus trap in the same .then() chain as aftershow,
   * we guarantee it is active before aftershow dispatches.
   *
   * Lifecycle (mirrors the old useEffect's isActiveModal dependency):
   * - Attached: in aftershow chain, right before aftershow dispatches
   * - Detached: on dismiss(), disconnectedCallback(), or child modal open
   * - Re-attached: when all child modals close
   * @private
   */
  [focusTrapController]: AbortController | null;
  /**
   * Holds the in-flight document keyup suppressor below so a second Escape
   * close replaces it instead of stacking another one.
   * @private
   */
  [escapeKeyUpController]: AbortController | null;
  /** @private */
  [onEscape]: (event: KeyboardEvent) => void;
  /** @private */
  [onKeyUp]: (event: KeyboardEvent) => void;
  /**
   * Whether the most recent mousedown / mouseup on the dialog landed on the
   * backdrop area (the `<dialog>` element itself, outside its content box)
   * rather than inside the modal content.
   *
   * Used by [onBackdropClick] to distinguish a true backdrop click from a
   * `click` event whose target is the dialog only because the user dragged
   * across the content/backdrop boundary. Reset on every backdrop
   * interaction (or when no click follows).
   * @private
   */
  [backdropMouseDownOnDialog]: boolean;
  /** @private */
  [backdropMouseUpOnDialog]: boolean;
  /** @private */
  [onBackdropMouseDown]: (event: MouseEvent) => void;
  /** @private */
  [onBackdropMouseUp]: (event: MouseEvent) => void;
  /** @private */
  [onBackdropClick]: (event: MouseEvent) => void;
  /** @private */
  [onChildModalChange]: EventListenerOrEventListenerObject;
  /**
   * Ensures `this[dialog]` is set by synchronously querying the shadow DOM
   * and attaching event listeners if needed.
   * Works around a Safari timing issue where the MutationObserver callback
   * (which normally sets `this[dialog]`) may not have fired yet when
   * `show()` / `dismiss()` run — especially when `heading` or
   * `accessibilityLabel` adds child custom-elements whose own lifecycle
   * microtasks can delay the observer.
   * @private
   */
  [ensureDialogRef](): void;
  /** @private */
  get [isOpen](): boolean;
  /** @private */
  [dismiss](): void;
  /** @private */
  get [hasOpenChildModal](): boolean;
  /** @private */
  [show](): Promise<void>;
  /** @private */
  [hide](): Promise<void>;
  showOverlay(): void;
  hideOverlay(): void;
  toggleOverlay(): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the modal component.
 * @publicDocs
 */
declare class Modal extends ModalBase<typeof tagName> implements ModalProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Modal;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'> &
        PreactBaseElementPropsWithChildren<Modal>;
    }
  }
}

declare const tagName = 's-modal';
export interface ModalJSXProps
  extends Partial<ModalProps>,
    Pick<ModalProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the modal component, typically including form fields, information, or interactive elements.
   */
  children?: ComponentChildren;
  /**
   * The main action button displayed in the modal footer, representing the primary action users should take.
   *
   * Only accepts a single button component with a `variant` of `primary`. This action should align with the modal's main purpose.
   */
  primaryAction?: ComponentChildren;
  /**
   * Additional action buttons displayed in the modal footer, providing alternative or supporting actions.
   *
   * Only accepts button components with a `variant` of `secondary` or `auto`. These are visually de-emphasized to establish clear hierarchy.
   */
  secondaryActions?: ComponentChildren;
  /**
   * A callback fired immediately when the modal starts to hide.
   */
  onHide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired immediately when the modal starts to show.
   */
  onShow?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the modal is completely hidden, after any hide animations have completed.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the modal is completely shown, after any show animations have completed.
   */
  onAfterShow?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Modal};
export type {ModalJSXProps};
