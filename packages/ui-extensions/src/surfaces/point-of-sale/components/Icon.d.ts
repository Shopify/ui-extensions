/** VERSION: undefined **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {IconProps, Key, Ref} from './components-shared.d.ts';

export type ComponentChildren = any;
/**
 * The base props for elements without children, providing key, ref, and slot properties.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  /**
   * A unique identifier for the element in lists. Used by Preact for efficient rendering and reconciliation.
   */
  key?: Key;
  /**
   * A reference to the underlying DOM element. Commonly used to access the element directly for imperative operations.
   */
  ref?: Ref<TClass>;
  /**
   * The named [slot](/docs/api/polaris/using-polaris-web-components#slots) this element should be placed in when used within a web component.
   */
  slot?: Lowercase<string>;
}
/**
 * The base props for elements with children, extending `BaseElementProps` with children support.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
export type IntrinsicElementProps<T> = T & BaseElementPropsWithChildren<T>;

declare const tagName = 's-icon';
/**
 * The available icon types for the `Icon` component. Each icon represents a specific action, status, or category:
 *
 * - `'alert-circle'` - An alert or warning indicator with circular background. Commonly used for system alerts, validation errors, or important notifications that require attention.
 * - `'apps'` - An application grid or app launcher symbol. Commonly used for accessing installed apps, extensions, or additional software features.
 * - `'arrow-down'` - A downward pointing arrow. Commonly used for dropdown menus, collapsing content, downloading actions, or indicating downward movement.
 * - `'arrow-left'` - A leftward pointing arrow. Commonly used for back navigation, previous actions, or indicating leftward movement in interfaces.
 * - `'arrow-right'` - A rightward pointing arrow. Commonly used for forward navigation, next actions, or indicating rightward movement and progression.
 * - `'arrow-up'` - An upward pointing arrow. Commonly used for expanding content, uploading actions, or indicating upward movement and elevation.
 * - `'backspace'` - A backspace or delete key symbol. Commonly used for removing characters, undoing input, or clearing entered data.
 * - `'barcode'` - A barcode scanning symbol. Commonly used for product scanning, inventory management, or barcode-related functionality.
 * - `'battery-low'` - A low battery indicator. Commonly used for device status, power warnings, or battery-related notifications.
 * - `'bolt-filled'` - A lightning bolt symbol with fill. Commonly used for power, energy, fast actions, or high-priority features.
 * - `'bullet'` - A bullet point or dot symbol. Commonly used for list items, status indicators, or simple visual markers.
 * - `'camera-flip'` - A camera rotation or flip symbol. Commonly used for switching camera views, rotating images, or camera-related controls.
 * - `'caret-down'` - A small downward caret. Commonly used for dropdown indicators, collapsible sections, or subtle directional cues.
 * - `'caret-up'` - A small upward caret. Commonly used for expandable sections, sort indicators, or subtle upward directional cues.
 * - `'cart'` - A shopping cart outline. Commonly used for shopping functionality, adding items to cart, or e-commerce actions.
 * - `'cart-down'` - A shopping cart with downward arrow. Commonly used for removing items from cart or decreasing quantities.
 * - `'cart-filled'` - A filled shopping cart. Commonly used to indicate items in cart, active shopping session, or cart with contents.
 * - `'cart-send'` - A cart with send arrow. Commonly used for sharing cart contents, sending cart to another device, or cart transfer actions.
 * - `'cart-up'` - A shopping cart with upward arrow. Commonly used for adding items to cart or increasing quantities.
 * - `'chart-line'` - A line chart or graph symbol. Commonly used for analytics, sales reports, performance metrics, or data visualization.
 * - `'chart-vertical'` - A vertical bar chart symbol. Commonly used for sales data, inventory levels, comparative analytics, or statistical displays.
 * - `'check'` - A checkmark symbol. Commonly used for confirmation, completion, success states, or selection indicators.
 * - `'check-circle-filled'` - A checkmark in filled circle. Commonly used for completed tasks, successful operations, or positive confirmation states.
 * - `'chevron-down'` - A downward chevron. Commonly used for dropdown menus, expandable content, or indicating downward navigation.
 * - `'chevron-left'` - A leftward chevron. Commonly used for back navigation, previous items, or leftward movement in carousels and lists.
 * - `'chevron-right'` - A rightward chevron. Commonly used for forward navigation, next items, or rightward movement and progression.
 * - `'chevron-up'` - An upward chevron. Commonly used for collapsible content, scroll to top, or indicating upward navigation.
 * - `'circle'` - A simple circle outline. Commonly used for radio buttons, status indicators, or basic geometric markers.
 * - `'clipboard-checklist'` - A clipboard with checklist. Commonly used for tasks, order fulfillment, inventory checks, or process completion.
 * - `'clock'` - A clock or time symbol. Commonly used for scheduling, time tracking, business hours, or temporal information.
 * - `'collection'` - A product collection or group symbol. Commonly used for product categories, grouped items, or collection management.
 * - `'credit-card'` - A credit card symbol. Commonly used for payment methods, card transactions, or financial operations.
 * - `'credit-card-reader'` - A card reader device symbol. Commonly used for payment processing, card scanning, or POS hardware functions.
 * - `'delete'` - A delete or trash symbol. Commonly used for removing items, deleting records, or destructive actions.
 * - `'delivery'` - A delivery truck or shipping symbol. Commonly used for order fulfillment, shipping options, or delivery tracking.
 * - `'desktop'` - A desktop computer symbol. Commonly used for device types, platform indicators, or desktop-specific features.
 * - `'disabled'` - A disabled or inactive state symbol. Commonly used for unavailable features, inactive items, or disabled functionality.
 * - `'disabled-filled'` - A filled disabled state symbol. Commonly used for prominently indicating unavailable or inactive elements.
 * - `'discount'` - A discount or sale symbol. Commonly used for promotions, price reductions, or special offers.
 * - `'discount-add'` - An add discount symbol. Commonly used for applying discounts, creating promotions, or adding price reductions.
 * - `'discount-automatic'` - An automatic discount symbol. Commonly used for system-applied discounts, automatic promotions, or rule-based reductions.
 * - `'discount-code'` - A discount code symbol. Commonly used for coupon codes, promotional codes, or manual discount entry.
 * - `'discount-remove'` - A remove discount symbol. Commonly used for removing applied discounts, canceling promotions, or undoing price reductions.
 * - `'drag-handle'` - A drag handle or grip symbol. Commonly used for reorderable lists, draggable elements, or sortable interfaces.
 * - `'drawer'` - A cash drawer symbol. Commonly used for cash register operations, drawer opening, or cash management.
 * - `'duplicate'` - A duplicate or copy symbol. Commonly used for copying items, duplicating records, or replication actions.
 * - `'edit'` - An edit or pencil symbol. Commonly used for editing content, modifying records, or entering edit mode.
 * - `'email'` - An email or message symbol. Commonly used for email functionality, messaging, or communication features.
 * - `'exchange'` - An exchange or swap symbol. Commonly used for product exchanges, return processing, or item swapping.
 * - `'external'` - An external link symbol. Commonly used for links that open in new windows, external resources, or outside navigation.
 * - `'flag'` - A flag or marker symbol. Commonly used for flagging items, marking important content, or status indicators.
 * - `'gift-card'` - A gift card symbol. Commonly used for gift card sales, redemption, or gift card management features.
 * - `'graduation-hat'` - A graduation cap symbol. Commonly used for training, education, tutorials, or learning features.
 * - `'grid'` - A grid view symbol. Commonly used for switching to grid layout, organizing content, or grid-based displays.
 * - `'hide-filled'` - A hide or visibility off symbol with fill. Commonly used for hiding content, privacy controls, or visibility toggles.
 * - `'home'` - A home outline symbol. Commonly used for home navigation, main dashboard, or returning to start screen.
 * - `'home-filled'` - A filled home symbol. Commonly used for active home state, main navigation, or primary dashboard indicator.
 * - `'image'` - A single image symbol. Commonly used for image upload, photo features, or visual content indicators.
 * - `'images'` - A multiple images symbol. Commonly used for image galleries, bulk photo operations, or media collections.
 * - `'info'` - An information symbol. Commonly used for help content, additional details, or informational messages.
 * - `'inventory'` - An inventory or stock symbol. Commonly used for inventory management, stock levels, or product tracking.
 * - `'inventory-edit'` - An edit inventory symbol. Commonly used for modifying stock levels, updating inventory, or inventory adjustments.
 * - `'inventory-list'` - An inventory list symbol. Commonly used for viewing stock lists, inventory reports, or product catalogs.
 * - `'inventory-transfer'` - An inventory transfer symbol. Commonly used for moving stock between locations, transfers, or redistribution.
 * - `'keyboard-hide'` - A hide keyboard symbol. Commonly used for dismissing on-screen keyboards or input controls.
 * - `'keypad'` - A numeric keypad symbol. Commonly used for number entry, PIN input, or calculator functions.
 * - `'link'` - A link or chain symbol. Commonly used for hyperlinks, connections, or linking functionality.
 * - `'list-bulleted'` - A bulleted list outline symbol. Commonly used for list views, itemized content, or list formatting.
 * - `'list-bulleted-filled'` - A filled bulleted list symbol. Commonly used for active list views or selected list formatting.
 * - `'live'` - A live or active status symbol. Commonly used for real-time features, live updates, or active connections.
 * - `'live-critical'` - A critical live status symbol. Commonly used for urgent live alerts, critical real-time issues, or emergency states.
 * - `'live-none'` - A no live status symbol. Commonly used for offline states, inactive connections, or unavailable live features.
 * - `'location'` - A location or map pin symbol. Commonly used for store locations, addresses, or geographic features.
 * - `'lock'` - A lock or security symbol. Commonly used for secure features, locked content, or security settings.
 * - `'maximize'` - A maximize or expand symbol. Commonly used for fullscreen mode, expanding windows, or enlarging content.
 * - `'menu'` - A menu outline symbol. Commonly used for navigation menus, options lists, or menu toggles.
 * - `'menu-filled'` - A filled menu symbol. Commonly used for active menu states or prominent menu indicators.
 * - `'menu-horizontal'` - A horizontal menu symbol. Commonly used for horizontal navigation, action menus, or more options.
 * - `'minimize'` - A minimize or collapse symbol. Commonly used for reducing windows, collapsing content, or minimizing interfaces.
 * - `'minus'` - A minus or subtract symbol. Commonly used for decreasing quantities, removing items, or subtraction operations.
 * - `'mobile'` - A mobile phone symbol. Commonly used for mobile features, device types, or mobile-specific functionality.
 * - `'money'` - A money or currency symbol. Commonly used for financial features, pricing, or monetary transactions.
 * - `'money-split'` - A split payment symbol. Commonly used for divided payments, partial payments, or payment splitting features.
 * - `'note'` - A note or document symbol. Commonly used for notes, documentation, or text content features.
 * - `'order'` - An order outline symbol. Commonly used for order management, order history, or order-related functions.
 * - `'order-draft'` - A draft order symbol. Commonly used for incomplete orders, order drafts, or pending order creation.
 * - `'order-filled'` - A filled order symbol. Commonly used for completed orders, active order states, or order fulfillment.
 * - `'package'` - A package or shipping box symbol. Commonly used for shipping, packaging, or fulfillment operations.
 * - `'package-cancel'` - A cancel package symbol. Commonly used for canceling shipments, stopping fulfillment, or package cancellation.
 * - `'package-reassign'` - A reassign package symbol. Commonly used for changing fulfillment locations, reassigning orders, or package redirection.
 * - `'payment'` - A payment symbol. Commonly used for payment processing, transaction features, or financial operations.
 * - `'person'` - A person outline symbol. Commonly used for user accounts, customer profiles, or people-related features.
 * - `'person-add'` - An add person symbol. Commonly used for creating accounts, adding customers, or user registration.
 * - `'person-filled'` - A filled person symbol. Commonly used for active user states, logged-in users, or selected profiles.
 * - `'phablet'` - A phablet device symbol. Commonly used for large mobile devices, tablet phones, or device-specific features.
 * - `'phone-out'` - An outgoing phone call symbol. Commonly used for making calls, phone features, or communication functions.
 * - `'play-circle'` - A play button in circle. Commonly used for starting processes, playing media, or initiating actions.
 * - `'plus'` - A plus or add symbol. Commonly used for adding items, creating new content, or addition operations.
 * - `'point-of-sale'` - A point of sale system symbol. Commonly used for POS features, retail operations, or sales terminals.
 * - `'point-of-sale-register'` - A cash register symbol. Commonly used for register operations, cash handling, or traditional POS functions.
 * - `'print'` - A print symbol. Commonly used for printing receipts, documents, or print-related functionality.
 * - `'product'` - A product outline symbol. Commonly used for product management, catalog features, or product-related functions.
 * - `'product-filled'` - A filled product symbol. Commonly used for active products, selected items, or product highlights.
 * - `'profile'` - A user profile symbol. Commonly used for profile management, account settings, or personal information.
 * - `'question-circle-filled'` - A question mark in filled circle. Commonly used for help features, support, or informational assistance.
 * - `'receipt'` - A receipt symbol. Commonly used for transaction receipts, purchase confirmations, or receipt management.
 * - `'refresh'` - A refresh or reload symbol. Commonly used for updating content, refreshing data, or reload operations.
 * - `'return'` - A return symbol. Commonly used for product returns, refund processing, or return management.
 * - `'scan-qr-code'` - A QR code scanning symbol. Commonly used for QR code features, digital scanning, or code-based interactions.
 * - `'search'` - A search or magnifying glass symbol. Commonly used for search functionality, finding content, or lookup features.
 * - `'send'` - A send or submit symbol. Commonly used for sending messages, submitting forms, or transmission actions.
 * - `'settings'` - A settings or gear symbol. Commonly used for configuration, preferences, or system settings.
 * - `'shipping-label-cancel'` - A cancel shipping label symbol. Commonly used for voiding labels, canceling shipments, or shipping corrections.
 * - `'sort'` - A sort or arrange symbol. Commonly used for sorting lists, organizing content, or arrangement controls.
 * - `'star-circle'` - A star in circle symbol. Commonly used for ratings, favorites, or featured content indicators.
 * - `'star-filled'` - A filled star symbol. Commonly used for ratings, favorites, or highlighting important content.
 * - `'store'` - A store or shop symbol. Commonly used for store information, retail locations, or shop-related features.
 * - `'tablet'` - A tablet device symbol. Commonly used for tablet features, device types, or tablet-specific functionality.
 * - `'transaction-fee-add'` - An add transaction fee symbol. Commonly used for applying fees, additional charges, or fee management.
 * - `'unlock'` - An unlock symbol. Commonly used for unlocking features, accessing content, or security controls.
 * - `'variant'` - A product variant symbol. Commonly used for product variations, different options, or variant management.
 * - `'view'` - A view or eye symbol. Commonly used for viewing content, visibility controls, or display options.
 * - `'wallet'` - A wallet symbol. Commonly used for digital wallets, payment methods, or financial account features.
 * - `'x'` - An X or close symbol. Commonly used for closing dialogs, canceling actions, or dismissing content.
 * - `'x-circle'` - An X in circle symbol. Commonly used for error states, cancellation, or removing items with emphasis.
 */
export type SupportedIconNames = Extract<
  IconProps['type'],
  | 'alert-circle'
  | 'apps'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'backspace'
  | 'barcode'
  | 'battery-low'
  | 'bolt-filled'
  | 'bullet'
  | 'camera-flip'
  | 'caret-down'
  | 'caret-up'
  | 'cart'
  | 'cart-down'
  | 'cart-filled'
  | 'cart-send'
  | 'cart-up'
  | 'chart-line'
  | 'chart-vertical'
  | 'check'
  | 'check-circle-filled'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'circle'
  | 'clipboard-checklist'
  | 'clock'
  | 'collection'
  | 'credit-card'
  | 'credit-card-reader'
  | 'delete'
  | 'delivery'
  | 'desktop'
  | 'disabled'
  | 'disabled-filled'
  | 'discount'
  | 'discount-add'
  | 'discount-automatic'
  | 'discount-code'
  | 'discount-remove'
  | 'drag-handle'
  | 'drawer'
  | 'duplicate'
  | 'edit'
  | 'email'
  | 'exchange'
  | 'external'
  | 'flag'
  | 'gift-card'
  | 'graduation-hat'
  | 'grid'
  | 'hide-filled'
  | 'home'
  | 'home-filled'
  | 'image'
  | 'images'
  | 'info'
  | 'inventory'
  | 'inventory-edit'
  | 'inventory-list'
  | 'inventory-transfer'
  | 'keyboard-hide'
  | 'keypad'
  | 'link'
  | 'list-bulleted'
  | 'list-bulleted-filled'
  | 'live'
  | 'live-critical'
  | 'live-none'
  | 'location'
  | 'lock'
  | 'maximize'
  | 'menu'
  | 'menu-filled'
  | 'menu-horizontal'
  | 'minimize'
  | 'minus'
  | 'mobile'
  | 'money'
  | 'money-split'
  | 'note'
  | 'order'
  | 'order-draft'
  | 'order-filled'
  | 'package'
  | 'package-cancel'
  | 'package-reassign'
  | 'payment'
  | 'person'
  | 'person-add'
  | 'person-filled'
  | 'phablet'
  | 'phone-out'
  | 'play-circle'
  | 'plus'
  | 'point-of-sale'
  | 'point-of-sale-register'
  | 'print'
  | 'product'
  | 'product-filled'
  | 'profile'
  | 'question-circle-filled'
  | 'receipt'
  | 'refresh'
  | 'return'
  | 'scan-qr-code'
  | 'search'
  | 'send'
  | 'settings'
  | 'shipping-label-cancel'
  | 'sort'
  | 'star-circle'
  | 'star-filled'
  | 'store'
  | 'tablet'
  | 'transaction-fee-add'
  | 'unlock'
  | 'variant'
  | 'view'
  | 'wallet'
  | 'x'
  | 'x-circle'
>;
export interface IconJSXProps
  extends Pick<IconProps, 'id' | 'tone' | 'color' | 'size'> {
  /**
   * The type of icon to display. Choose from a comprehensive set of POS-specific icons including navigation arrows, commerce symbols, device indicators, and action icons like `'cart'`, `'search'`, `'settings'`, and `'payment'`.
   *
   * @default ''
   */
  type?: SupportedIconNames;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: IconJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<IconJSXProps>;
    }
  }
}

export {tagName};
export type {IconJSXProps};
