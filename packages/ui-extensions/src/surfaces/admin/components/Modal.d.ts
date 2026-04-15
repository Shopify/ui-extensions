/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  ModalProps$1,
  PreactCustomElement,
  RenderImpl,
  InteractionProps,
} from './shared.d.ts';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

export type RequiredAlignedModalProps = Required<ModalProps$1>;
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
   * Adjust the size of the Modal.
   */
  size: Extract<
    ModalProps$1['size'],
    'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;
  /**
   * Places the Modal on the block axis on a large screen
   * @default 'center'
   */
  alignSelf: 'center' | 'start';
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

export interface PreactOverlayControlProps
  extends Pick<InteractionProps, 'commandFor' | 'interestFor'> {
  /**
   * Sets the action the [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this clickable is activated.
   *
   * See the documentation of particular components for the actions they support.
   *
   * - `--auto`: a default action for the target component.
   * - `--show`: shows the target component.
   * - `--hide`: hides the target component.
   * - `--toggle`: toggles the target component.
   *
   * @default '--auto'
   */
  command: Extract<
    InteractionProps['command'],
    '--show' | '--hide' | '--toggle' | '--auto'
  >;
  /**
   * Sets the element the [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this clickable is activated.
   */
  commandFor: Extract<InteractionProps['commandFor'], string>;
  /**
   * Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.
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
export type PolyfillCommandEventInit = EventInit & {
  source: HTMLElement | null | undefined;
  command: PreactOverlayControlProps['command'];
  rootActivator?: HTMLElement | null;
};
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
declare const onBackdropClick: unique symbol;
declare const abortController: unique symbol;
declare const onChildModalChange: unique symbol;
declare const childrenRerenderObserver: unique symbol;
declare const shadowDomRerenderObserver: unique symbol;
declare const focusTrapHandler: unique symbol;
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
  accessor alignSelf: ModalProps['alignSelf'];
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
  [nestedModals]: Map<ModalBase<TTagName>, boolean>;
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
  [focusTrapHandler]: ((event: KeyboardEvent) => void) | null;
  /** @private */
  [onEscape]: (event: KeyboardEvent) => void;
  /** @private */
  [onKeyUp]: (event: KeyboardEvent) => void;
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
  hideOverlay({force}?: {force?: boolean}): void;

  toggleOverlay(): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  constructor(renderImpl: RenderImpl, tagName: string);
}

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
   * The content of the Modal.
   */
  children?: ComponentChildren;
  /**
   * The primary action to perform.
   *
   * Only a `Button` with a variant of `primary` is allowed.
   */
  primaryAction?: ComponentChildren;
  /**
   * The secondary actions to perform.
   *
   * Only `Button` elements with a variant of `secondary` or `auto` are allowed.
   */
  secondaryActions?: ComponentChildren;
  /**
   * A callback fired when the modal closes.
   * Use to perform cleanup or trigger side effects when the modal is dismissed.
   */
  onHide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the modal starts to open, before any entrance animation begins.
   * Use to prepare content or fetch data needed for the modal.
   */
  onShow?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired after the modal has fully closed and any exit animation completes.
   * Use to reset form state, clear temporary data, or update the page after dismissal.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired after the modal has fully opened and any entrance animation completes.
   * Use to focus an input field or initialize content once the modal is visible.
   */
  onAfterShow?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Modal};
export type {ModalJSXProps};
