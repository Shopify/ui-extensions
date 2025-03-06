/** VERSION: 0.39.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />

import {
  BoxProps as BoxProps$1,
  ClickableProps as ClickableProps$1,
  MaybeAllValuesShorthandProperty,
  ComponentChild,
  InteractionProps,
} from './shared.d.ts';

export type MakeResponsive<T> = T | `@container${string}`;

export type AlignedBox = Required<BoxProps$1>;
export interface BoxProps {
  accessibilityRole: AlignedBox['accessibilityRole'];
  background: Extract<
    AlignedBox['background'],
    'transparent' | 'base' | 'subdued' | 'strong'
  >;
  blockSize: AlignedBox['blockSize'];
  minBlockSize: AlignedBox['minBlockSize'];
  maxBlockSize: AlignedBox['maxBlockSize'];
  inlineSize: AlignedBox['inlineSize'];
  minInlineSize: AlignedBox['minInlineSize'];
  maxInlineSize: AlignedBox['maxInlineSize'];
  padding: MakeResponsive<AlignedBox['padding']>;
  paddingBlock: MakeResponsive<AlignedBox['paddingBlock']>;
  paddingBlockStart: MakeResponsive<AlignedBox['paddingBlockStart']>;
  paddingBlockEnd: MakeResponsive<AlignedBox['paddingBlockEnd']>;
  paddingInline: MakeResponsive<AlignedBox['paddingInline']>;
  paddingInlineStart: MakeResponsive<AlignedBox['paddingInlineStart']>;
  paddingInlineEnd: MakeResponsive<AlignedBox['paddingInlineEnd']>;
  border: AlignedBox['border'] | 'none';
  borderWidth:
    | MaybeAllValuesShorthandProperty<
        Extract<
          AlignedBox['borderWidth'],
          'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'none'
        >
      >
    | Extract<AlignedBox['borderWidth'], ''>;
  borderStyle:
    | MaybeAllValuesShorthandProperty<
        Extract<AlignedBox['borderStyle'], 'none' | 'solid' | 'dashed'>
      >
    | Extract<AlignedBox['borderStyle'], ''>;
  borderColor: Extract<
    AlignedBox['borderColor'],
    'subdued' | 'base' | 'strong' | ''
  >;
  borderRadius: MaybeAllValuesShorthandProperty<
    Extract<
      AlignedBox['borderRadius'],
      | 'none'
      | 'small-200'
      | 'small-100'
      | 'small'
      | 'base'
      | 'large'
      | 'large-100'
      | 'large-200'
    >
  >;
  accessibilityLabel: AlignedBox['accessibilityLabel'];
  accessibilityVisibility: AlignedBox['accessibilityVisibility'];
  display: AlignedBox['display'];
  overflow: AlignedBox['overflow'];
}

export type ClickableBaseProps = Required<
  Pick<
    ClickableProps$1,
    | 'activateAction'
    | 'activateTarget'
    | 'disabled'
    | 'download'
    | 'href'
    | 'lang'
    | 'loading'
    | 'overflow'
    | 'target'
    | 'type'
  >
>;
export interface ClickableProps
  extends Required<BoxProps>,
    ClickableBaseProps {}

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  target: HTMLElementTagNameMap[T];
};

declare const tagName = 's-clickable';
export interface ReactProps
  extends Partial<ClickableProps>,
    Pick<ClickableProps$1, 'id'> {
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export type Style = string | CSSStyleSheet;
export type Styles = Style[] | Style;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChild;
  styles?: Styles;
};
export interface ActivationEventEsque {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
  button: number;
}
export interface ClickOptions {
  /**
   * The event you want to influence the synthetic click.
   */
  sourceEvent?: ActivationEventEsque;
}
/**
 * Base class for creating custom elements with Preact.
 * While this class could be used in both Node and the browser, the constructor will only be used in the browser.
 * So we give it a type of HTMLElement to avoid typing issues later where it's used, which will only happen in the browser.
 */
declare const BaseClass: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass {
  /** @private */
  static get observedAttributes(): string[];
  static globalStylesApplied: boolean;
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
    ...options
  }: RenderImpl);

  /** @private */
  attributeChangedCallback(name: string): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
  /**
   * Queue a run of the render function.
   * You shouldn't need to call this manually - it should be handled by changes to @property values.
   * @private
   */
  queueRender(): void;
  /**
   * Internal function to add styles for legacy browsers.
   *
   * @private
   */
  _addLegacyStyleComponent(style: string): void;
  /**
   * Like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.
   *
   * For example, if the `sourceEvent` was a middle click, or has particular keys held down,
   * components will attempt to produce the desired behavior on links, such as opening the page in the background tab.
   * @private
   * @param options
   */
  click({sourceEvent}?: ClickOptions): void;
}

export interface PreactOverlayControlProps
  extends Required<Pick<InteractionProps, 'activateTarget'>> {
  activateAction: Extract<
    InteractionProps['activateAction'],
    'show' | 'hide' | 'toggle' | 'auto'
  >;
}

declare class BoxElement extends PreactCustomElement implements BoxProps {
  constructor(renderImpl: RenderImpl);
  accessor accessibilityRole: BoxProps['accessibilityRole'];
  accessor background: BoxProps['background'];
  accessor blockSize: BoxProps['blockSize'];
  accessor minBlockSize: BoxProps['minBlockSize'];
  accessor maxBlockSize: BoxProps['maxBlockSize'];
  accessor inlineSize: BoxProps['inlineSize'];
  accessor minInlineSize: BoxProps['minInlineSize'];
  accessor maxInlineSize: BoxProps['maxInlineSize'];
  accessor overflow: BoxProps['overflow'];
  accessor padding: BoxProps['padding'];
  accessor paddingBlock: BoxProps['paddingBlock'];
  accessor paddingBlockStart: BoxProps['paddingBlockStart'];
  accessor paddingBlockEnd: BoxProps['paddingBlockEnd'];
  accessor paddingInline: BoxProps['paddingInline'];
  accessor paddingInlineStart: BoxProps['paddingInlineStart'];
  accessor paddingInlineEnd: BoxProps['paddingInlineEnd'];
  accessor border: BoxProps['border'];
  accessor borderWidth: BoxProps['borderWidth'];
  accessor borderStyle: BoxProps['borderStyle'];
  accessor borderColor: BoxProps['borderColor'];
  accessor borderRadius: BoxProps['borderRadius'];
  accessor accessibilityLabel: BoxProps['accessibilityLabel'];
  accessor accessibilityVisibility: BoxProps['accessibilityVisibility'];
  accessor display: BoxProps['display'];
}

declare const Clickable_base: (abstract new (...args: any) => {
  activateTarget: PreactOverlayControlProps['activateTarget'];
  activateAction: PreactOverlayControlProps['activateAction'];
  '__#126246@#queueRender': (() => void) | undefined;
  '__#126246@#legacyStyleComponents': Map<string, preact.VNode<{}>>;
  attributeChangedCallback(name: string): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  adoptedCallback(): void;
  queueRender(): void;
  '__#126246@#checkElementPrototype'(): void;
  _addLegacyStyleComponent(style: string): void;
  click({sourceEvent}?: ClickOptions): void;
  accessKey: string;
  readonly accessKeyLabel: string;
  autocapitalize: string;
  dir: string;
  draggable: boolean;
  hidden: boolean;
  inert: boolean;
  innerText: string;
  lang: string;
  readonly offsetHeight: number;
  readonly offsetLeft: number;
  readonly offsetParent: Element | null;
  readonly offsetTop: number;
  readonly offsetWidth: number;
  outerText: string;
  popover: string | null;
  spellcheck: boolean;
  title: string;
  translate: boolean;
  writingSuggestions: string;
  attachInternals(): ElementInternals;
  hidePopover(): void;
  showPopover(): void;
  togglePopover(force?: boolean): boolean;
  addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
  readonly attributes: NamedNodeMap;
  readonly classList: DOMTokenList;
  className: string;
  readonly clientHeight: number;
  readonly clientLeft: number;
  readonly clientTop: number;
  readonly clientWidth: number;
  readonly currentCSSZoom: number;
  id: string;
  innerHTML: string;
  readonly localName: string;
  readonly namespaceURI: string | null;
  onfullscreenchange: ((this: Element, ev: Event) => any) | null;
  onfullscreenerror: ((this: Element, ev: Event) => any) | null;
  outerHTML: string;
  readonly ownerDocument: Document;
  readonly part: DOMTokenList;
  readonly prefix: string | null;
  readonly scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  readonly scrollWidth: number;
  readonly shadowRoot: ShadowRoot | null;
  slot: string;
  readonly tagName: string;
  attachShadow(init: ShadowRootInit): ShadowRoot;
  checkVisibility(options?: CheckVisibilityOptions): boolean;
  closest<K extends keyof HTMLElementTagNameMap>(
    selector: K,
  ): HTMLElementTagNameMap[K] | null;
  closest<K extends keyof SVGElementTagNameMap>(
    selector: K,
  ): SVGElementTagNameMap[K] | null;
  closest<K extends keyof MathMLElementTagNameMap>(
    selector: K,
  ): MathMLElementTagNameMap[K] | null;
  closest<E extends Element = Element>(selectors: string): E | null;
  computedStyleMap(): StylePropertyMapReadOnly;
  getAttribute(qualifiedName: string): string | null;
  getAttributeNS(namespace: string | null, localName: string): string | null;
  getAttributeNames(): string[];
  getAttributeNode(qualifiedName: string): Attr | null;
  getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
  getBoundingClientRect(): DOMRect;
  getClientRects(): DOMRectList;
  getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
  getElementsByTagName<K extends keyof HTMLElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof SVGElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<SVGElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof MathMLElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof HTMLElementDeprecatedTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
  getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    localName: string,
  ): HTMLCollectionOf<HTMLElement>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    localName: string,
  ): HTMLCollectionOf<SVGElement>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1998/Math/MathML',
    localName: string,
  ): HTMLCollectionOf<MathMLElement>;
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string,
  ): HTMLCollectionOf<Element>;
  getHTML(options?: GetHTMLOptions): string;
  hasAttribute(qualifiedName: string): boolean;
  hasAttributeNS(namespace: string | null, localName: string): boolean;
  hasAttributes(): boolean;
  hasPointerCapture(pointerId: number): boolean;
  insertAdjacentElement(
    where: InsertPosition,
    element: Element,
  ): Element | null;
  insertAdjacentHTML(position: InsertPosition, string: string): void;
  insertAdjacentText(where: InsertPosition, data: string): void;
  matches(selectors: string): boolean;
  releasePointerCapture(pointerId: number): void;
  removeAttribute(qualifiedName: string): void;
  removeAttributeNS(namespace: string | null, localName: string): void;
  removeAttributeNode(attr: Attr): Attr;
  requestFullscreen(options?: FullscreenOptions): Promise<void>;
  requestPointerLock(options?: PointerLockOptions): Promise<void>;
  scroll(options?: ScrollToOptions): void;
  scroll(x: number, y: number): void;
  scrollBy(options?: ScrollToOptions): void;
  scrollBy(x: number, y: number): void;
  scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
  scrollTo(options?: ScrollToOptions): void;
  scrollTo(x: number, y: number): void;
  setAttribute(qualifiedName: string, value: string): void;
  setAttributeNS(
    namespace: string | null,
    qualifiedName: string,
    value: string,
  ): void;
  setAttributeNode(attr: Attr): Attr | null;
  setAttributeNodeNS(attr: Attr): Attr | null;
  setHTMLUnsafe(html: string): void;
  setPointerCapture(pointerId: number): void;
  toggleAttribute(qualifiedName: string, force?: boolean): boolean;
  webkitMatchesSelector(selectors: string): boolean;
  readonly baseURI: string;
  readonly childNodes: NodeListOf<ChildNode>;
  readonly firstChild: ChildNode | null;
  readonly isConnected: boolean;
  readonly lastChild: ChildNode | null;
  readonly nextSibling: ChildNode | null;
  readonly nodeName: string;
  readonly nodeType: number;
  nodeValue: string | null;
  readonly parentElement: HTMLElement | null;
  readonly parentNode: ParentNode | null;
  readonly previousSibling: ChildNode | null;
  textContent: string | null;
  appendChild<T extends Node>(node: T): T;
  cloneNode(deep?: boolean): Node;
  compareDocumentPosition(other: Node): number;
  contains(other: Node | null): boolean;
  getRootNode(options?: GetRootNodeOptions): Node;
  hasChildNodes(): boolean;
  insertBefore<T extends Node>(node: T, child: Node | null): T;
  isDefaultNamespace(namespace: string | null): boolean;
  isEqualNode(otherNode: Node | null): boolean;
  isSameNode(otherNode: Node | null): boolean;
  lookupNamespaceURI(prefix: string | null): string | null;
  lookupPrefix(namespace: string | null): string | null;
  normalize(): void;
  removeChild<T extends Node>(child: T): T;
  replaceChild<T extends Node>(node: Node, child: T): T;
  readonly ELEMENT_NODE: 1;
  readonly ATTRIBUTE_NODE: 2;
  readonly TEXT_NODE: 3;
  readonly CDATA_SECTION_NODE: 4;
  readonly ENTITY_REFERENCE_NODE: 5;
  readonly ENTITY_NODE: 6;
  readonly PROCESSING_INSTRUCTION_NODE: 7;
  readonly COMMENT_NODE: 8;
  readonly DOCUMENT_NODE: 9;
  readonly DOCUMENT_TYPE_NODE: 10;
  readonly DOCUMENT_FRAGMENT_NODE: 11;
  readonly NOTATION_NODE: 12;
  readonly DOCUMENT_POSITION_DISCONNECTED: 1;
  readonly DOCUMENT_POSITION_PRECEDING: 2;
  readonly DOCUMENT_POSITION_FOLLOWING: 4;
  readonly DOCUMENT_POSITION_CONTAINS: 8;
  readonly DOCUMENT_POSITION_CONTAINED_BY: 16;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32;
  dispatchEvent(event: Event): boolean;
  ariaAtomic: string | null;
  ariaAutoComplete: string | null;
  ariaBrailleLabel: string | null;
  ariaBrailleRoleDescription: string | null;
  ariaBusy: string | null;
  ariaChecked: string | null;
  ariaColCount: string | null;
  ariaColIndex: string | null;
  ariaColIndexText: string | null;
  ariaColSpan: string | null;
  ariaCurrent: string | null;
  ariaDescription: string | null;
  ariaDisabled: string | null;
  ariaExpanded: string | null;
  ariaHasPopup: string | null;
  ariaHidden: string | null;
  ariaInvalid: string | null;
  ariaKeyShortcuts: string | null;
  ariaLabel: string | null;
  ariaLevel: string | null;
  ariaLive: string | null;
  ariaModal: string | null;
  ariaMultiLine: string | null;
  ariaMultiSelectable: string | null;
  ariaOrientation: string | null;
  ariaPlaceholder: string | null;
  ariaPosInSet: string | null;
  ariaPressed: string | null;
  ariaReadOnly: string | null;
  ariaRequired: string | null;
  ariaRoleDescription: string | null;
  ariaRowCount: string | null;
  ariaRowIndex: string | null;
  ariaRowIndexText: string | null;
  ariaRowSpan: string | null;
  ariaSelected: string | null;
  ariaSetSize: string | null;
  ariaSort: string | null;
  ariaValueMax: string | null;
  ariaValueMin: string | null;
  ariaValueNow: string | null;
  ariaValueText: string | null;
  role: string | null;
  animate(
    keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
    options?: number | KeyframeAnimationOptions,
  ): Animation;
  getAnimations(options?: GetAnimationsOptions): Animation[];
  after(...nodes: (Node | string)[]): void;
  before(...nodes: (Node | string)[]): void;
  remove(): void;
  replaceWith(...nodes: (Node | string)[]): void;
  readonly nextElementSibling: Element | null;
  readonly previousElementSibling: Element | null;
  readonly childElementCount: number;
  readonly children: HTMLCollection;
  readonly firstElementChild: Element | null;
  readonly lastElementChild: Element | null;
  append(...nodes: (Node | string)[]): void;
  prepend(...nodes: (Node | string)[]): void;
  querySelector<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): HTMLElementTagNameMap[K] | null;
  querySelector<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): SVGElementTagNameMap[K] | null;
  querySelector<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): MathMLElementTagNameMap[K] | null;
  querySelector<K extends keyof HTMLElementDeprecatedTagNameMap>(
    selectors: K,
  ): HTMLElementDeprecatedTagNameMap[K] | null;
  querySelector<E extends Element = Element>(selectors: string): E | null;
  querySelectorAll<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementTagNameMap[K]>;
  querySelectorAll<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): NodeListOf<SVGElementTagNameMap[K]>;
  querySelectorAll<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<MathMLElementTagNameMap[K]>;
  querySelectorAll<K extends keyof HTMLElementDeprecatedTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
  querySelectorAll<E extends Element = Element>(
    selectors: string,
  ): NodeListOf<E>;
  replaceChildren(...nodes: (Node | string)[]): void;
  readonly assignedSlot: HTMLSlotElement | null;
  readonly attributeStyleMap: StylePropertyMap;
  readonly style: CSSStyleDeclaration;
  contentEditable: string;
  enterKeyHint: string;
  inputMode: string;
  readonly isContentEditable: boolean;
  onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onanimationcancel:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationend:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationiteration:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationstart:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onbeforeinput: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null;
  onbeforetoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncontextlost: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  oncontextrestored: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncopy: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncut: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onerror: OnErrorEventHandler;
  onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  onformdata: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
  ongotpointercapture:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onlostpointercapture:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onpaste: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onpointercancel:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
  onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onscrollend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsecuritypolicyviolation:
    | ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any)
    | null;
  onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onslotchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsubmit: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
  onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontouchcancel?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchend?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchmove?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchstart?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontransitioncancel:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionend:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionrun:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionstart:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwebkitanimationend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwebkitanimationiteration:
    | ((this: GlobalEventHandlers, ev: Event) => any)
    | null;
  onwebkitanimationstart:
    | ((this: GlobalEventHandlers, ev: Event) => any)
    | null;
  onwebkittransitionend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
  autofocus: boolean;
  readonly dataset: DOMStringMap;
  nonce?: string;
  tabIndex: number;
  blur(): void;
  focus(options?: FocusOptions): void;
}) &
  typeof BoxElement;
declare class Clickable extends Clickable_base implements ClickableProps {
  accessor disabled: ClickableProps['disabled'];
  accessor loading: ClickableProps['loading'];
  accessor target: ClickableProps['target'];
  accessor href: ClickableProps['href'];
  accessor download: ClickableProps['download'];
  accessor onclick: EventListener | null;
  accessor onblur: EventListener | null;
  accessor onfocus: EventListener | null;
  accessor type: ClickableProps['type'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Clickable;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: HTMLAttributes<HTMLElement> & ReactProps;
    }
  }
}

export {Clickable};
