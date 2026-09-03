/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  DropZoneProps$1,
  PreactCustomElement,
  RenderImpl,
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

/**
 * Configure the following properties on the drop zone component.
 */
export interface DropZoneProps
  extends Required<
    Pick<
      DropZoneProps$1,
      | 'accept'
      | 'accessibilityLabel'
      | 'disabled'
      | 'files'
      | 'name'
      | 'error'
      | 'label'
      | 'labelAccessibilityVisibility'
      | 'multiple'
      | 'required'
      | 'value'
    >
  > {
  /**
   * A label that describes the purpose or contents of the item. When set,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel: Required<DropZoneProps$1>['accessibilityLabel'];
  /**
   * Whether multiple files can be selected or dropped at once.
   *
   * @default false
   */
  multiple: Required<DropZoneProps$1>['multiple'];
  /**
   * A string representing the types of files that are accepted by the drop zone.
   * This string is a comma-separated list of unique file type specifiers which can be one of the following:
   * - A file extension starting with a period (".") character (e.g. .jpg, .pdf, .doc)
   * - A valid MIME type string with no extensions
   *
   * If omitted, all file types are accepted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
   * @default ''
   */
  accept: Required<DropZoneProps$1>['accept'];
}

export type ReadOnlyPropKeys<Config> = Config extends {
  readonly readOnlyProps: ReadonlyArray<infer Key>;
}
  ? Extract<Key, string>
  : never;
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

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

/**
 * A utility type that replaces occurrences of one type with another within a union type. Useful for type transformations where you need to swap out specific types.
 * @publicDocs
 */
export type ReplaceType<TType, TFrom, TTo> = Exclude<TType, TFrom> | TTo;

declare const setFiles: unique symbol;

declare const internals: unique symbol;
declare const getFileInput: unique symbol;
declare abstract class DropZoneBase extends PolarisCustomElement {
  static formAssociated: boolean;
  accessor accept: DropZoneProps['accept'];
  accessor accessibilityLabel: DropZoneProps['accessibilityLabel'];
  accessor disabled: DropZoneProps['disabled'];
  accessor error: DropZoneProps['error'];
  accessor label: DropZoneProps['label'];
  accessor labelAccessibilityVisibility: DropZoneProps['labelAccessibilityVisibility'];
  accessor multiple: DropZoneProps['multiple'];
  accessor name: DropZoneProps['name'];
  accessor required: DropZoneProps['required'];
  /**
   * A callback fired when the user selects files through the file picker or drops valid
   * files onto the drop zone. Access the selected files through `event.currentTarget.files`.
   * Use to process uploads, generate previews, or validate file contents.
   */
  accessor onchange: CallbackEventListener<typeof tagName>;
  /**
   * A callback fired when files are selected or dropped. Similar to `onChange` but may
   * fire more frequently during drag operations. Use when you need immediate feedback as
   * files are being dragged over the drop zone.
   */
  accessor oninput: CallbackEventListener<typeof tagName>;
  /**
   * A callback fired when dropped or selected files don't match the `accept` criteria.
   * Use to display error messages explaining which file types are allowed. Rejected files
   * are not added to the `files` array.
   */
  accessor ondroprejected: CallbackEventListener<typeof tagName>;
  get value(): string;
  /** This sets the input value for a file type, which cannot be set programatically, so it can only be reset. */
  set value(value: '' | null);
  get files(): File[];
  set files(files: File[]);
  /** @private */
  [setFiles](files: File[]): void;
  /** @private */
  [getFileInput](): ReplaceType<
    Element | null | undefined,
    Element,
    HTMLInputElement
  >;

  /** @private */
  formResetCallback(): void;
  /** @private */
  [internals]: ElementInternals;
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the drop zone component.
 * @publicDocs
 */
declare class DropZone extends DropZoneBase implements DropZoneProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: DropZone;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<
        DropZoneJSXProps,
        ReadOnlyPropKeys<typeof reactWrapperConfig>
      > & {
        value?: '' | null;
      } & PreactBaseElementPropsWithChildren<DropZone>;
    }
  }
}

declare const tagName = 's-drop-zone';
export interface DropZoneJSXProps
  extends Partial<DropZoneProps>,
    Pick<DropZoneProps$1, 'id'> {
  /**
   * The content to include inside the drop zone container
   */
  children?: ComponentChildren;
  /**
   * A callback fired when the user has finished selecting files and the value changes.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when files are selected or dropped.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when a dropped file is rejected due to file type or size restrictions.
   */
  onDropRejected?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
declare const reactWrapperConfig: {
  readonly readOnlyProps: readonly ['files', 'value'];
};

export {DropZone};
export type {DropZoneJSXProps};
