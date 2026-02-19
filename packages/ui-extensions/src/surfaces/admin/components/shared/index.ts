/**
 * Common props shared by most admin UI extension components.
 */
export interface GlobalProps {
  /**
   * A unique identifier for the element.
   */
  id?: string;
}

/**
 * Shared props for form input components such as text fields, selects,
 * and number fields. Provides common behavior for labeling, validation,
 * change handling, and controlled/uncontrolled state management.
 */
export interface InputProps<T> {
  /**
   * Whether the field is disabled. When `true`, the field can't be edited by
   * the user, won't receive focus, and won't be submitted with the form. Use
   * this for fields that aren't relevant in the current context.
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * An error message to display below the field. When set, the field receives
   * a specific stylistic treatment (typically a red border) to communicate
   * problems that have to be resolved immediately. The string value is
   * displayed as the error message.
   *
   * Pass `undefined` or omit this prop to clear the error state.
   */
  error?: string;

  /**
   * A unique identifier for the field.
   */
  id?: string;

  /**
   * The text content to display as the field's label. This label is always
   * required for accessibility as it tells users what information the field
   * expects. The label is rendered visually above the field.
   */
  label: string;

  /**
   * An identifier for the field that is unique within the nearest
   * containing Form component.
   */
  name?: string;

  /**
   * A callback fired when the field loses focus. This is useful for triggering
   * validation after the user finishes interacting with the field, or for
   * tracking which fields have been "touched" in a form.
   */
  onBlur?(): void;

  /**
   * A callback that fires when the user finishes editing the field,
   * typically on blur. Only fires if the value changed. Update your
   * state in this callback and pass the new value back through the
   * `value` prop.
   *
   * This doesn't fire on every keystroke. Use `onInput` for
   * real-time responses like clearing validation errors as the user
   * types. Don't use `onInput` to control `value` because that can
   * cause issues on lower-powered devices due to asynchronous rendering.
   */
  onChange?(value: T): void;

  /**
   * A callback fired when the field receives focus. This is useful for
   * clearing errors, showing helper text, or tracking user interaction
   * with form fields.
   */
  onFocus?(): void;

  /**
   * A callback that fires on every change the user makes in the field,
   * including each keystroke. The callback receives the current value.
   *
   * Use `onInput` for immediate responses like clearing validation
   * errors as the user types. Don't use it to control the field's
   * `value` prop. Use `onChange` for that instead.
   */
  onInput?(value: T): void;

  /**
   * A short hint displayed inside the field when it's empty. Use placeholder
   * text to show an example of the expected value (such as "100" or
   * "Search by name"). Don't use placeholder text as a substitute for the
   * `label` as it disappears after the user starts typing.
   */
  placeholder?: string;

  /**
   * Whether the field is read-only. Unlike `disabled`, a read-only field can
   * still receive focus and its value is included when the form is submitted.
   * Use this when the value should be visible and selectable but not editable,
   * such as a computed total.
   *
   * @defaultValue false
   */
  readOnly?: boolean;

  /**
   * The initial value of the field when it isn't controlled by state.
   * Use this instead of `value` when you don't need to manage the
   * field's state yourself. The component tracks its own value
   * internally and reports changes through `onChange`.
   */
  defaultValue?: string | string[];

  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it won't cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` prop.
   */
  required?: boolean;

  /**
   * The current value for the field. If omitted, then the field will be empty. You should
   * update this value in response to the `onChange` callback.
   */
  value?: T;
}

/**
 * Props for decorating a field with non-editable visual elements,
 * such as a suffix that appears after the user's input.
 */
export interface FieldDecorationProps {
  /**
   * A non-editable string displayed after the input area, such as
   * `"@shopify.com"` or `"%"`. The suffix isn't included in the
   * field's value. It might be hidden until the user focuses the field
   * if an inline label occupies the same space.
   *
   * @default ''
   */
  suffix?: string;
}

/**
 * Props for constraining the character length of a text-based input.
 * Used by text fields, text areas, password fields, and other
 * string-value inputs.
 */
export interface MinMaxLengthProps {
  /**
   * The maximum number of characters the user can enter. If the current value
   * exceeds this limit, then the field will be in an error state. This
   * doesn't prevent the user from typing beyond the limit. Use the `error`
   * prop to communicate the constraint.
   */
  maxLength?: number;

  /**
   * The minimum number of characters required for a valid input. If the
   * current value is shorter than this limit, then the field will be in a
   * validation error state. This doesn't prevent the user from submitting
   * a shorter value. Use the `error` prop to communicate the constraint.
   */
  minLength?: number;
}

/**
 * Props for providing an accessible label to an element for
 * assistive technologies such as screen readers.
 */
export interface AccessibilityLabelProps {
  /**
   * A label that describes the purpose or contents of the element. When set, it will be announced
   * to users using assistive technologies and will provide them with more context. When set, any
   * children or `label` supplied won't be announced to screen readers.
   */
  accessibilityLabel?: string;
}

/**
 * Props for assigning semantic meaning to a component through an
 * ARIA-compatible accessibility role.
 */
export interface AccessibilityRoleProps {
  /**
   * The semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * @defaultValue 'generic'
   */
  accessibilityRole?: AccessibilityRole;
}

/**
 * The set of accessibility roles that can be applied to layout components
 * to convey semantic meaning to assistive technologies. Each role maps
 * to a corresponding HTML element or ARIA role in web-based hosts.
 *
 * - `main`: The primary content of the page.
 * - `header`: A header section of the page.
 * - `footer`: A section for copyright information, navigation links, and privacy statements.
 * - `section`: A generic section; should have a heading or accessible label.
 * - `aside`: A supporting section related to the main content.
 * - `navigation`: A major group of navigation links.
 * - `ordered-list`: A list of ordered items.
 * - `list-item`: An item inside a list.
 * - `list-item-separator`: A divider that separates items in a list.
 * - `unordered-list`: A list of unordered items.
 * - `separator`: A divider separating sections of content.
 * - `status`: A live region with advisory information that isn't urgent enough to be an alert.
 * - `alert`: Important, usually time-sensitive information.
 * - `generic`: A nameless container with no semantic meaning on its own.
 */
export type AccessibilityRole =
  /**
   * A role that indicates the primary content.
   *
   * In an HTML host, `main` will render a `<main>` element.
   * Learn more about the [`<main>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) in the MDN web docs.
   */
  | 'main'

  /**
   * A role that indicates the component is a header.
   *
   * In an HTML host `header` will render a `<header>` element.
   * Learn more about the [`<header>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role) in the MDN web docs.
   */
  | 'header'

  /**
   * A role for displaying information such as copyright information, navigation links, and privacy statements.
   *
   * In an HTML host `footer` will render a `<footer>` element.
   * Learn more about the [`<footer>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) in the MDN web docs.
   */
  | 'footer'

  /**
   * A role that indicates a generic section.
   * Sections should always have a Heading or an accessible name provided in the `accessibilityLabel` property.
   *
   * In an HTML host `section` will render a `<section>` element.
   * Learn more about the [`<section>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/region_role) in the MDN web docs.
   *
   */
  | 'section'

  /**
   * A role that designates a supporting section related to the main content.
   *
   * In an HTML host `aside` will render an `<aside>` element.
   * Learn more about the [`<aside>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role) in the MDN web docs.
   */
  | 'aside'

  /**
   * A role that identifies major groups of links used for navigating.
   *
   * In an HTML host `navigation` will render a `<nav>` element.
   * Learn more about the [`<nav>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role) in the MDN web docs.
   */
  | 'navigation'

  /**
   * A role that identifies a list of ordered items.
   *
   * In an HTML host `ordered-list` will render a `<ol>` element.
   * Learn more about the [`<ol>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
   */
  | 'ordered-list'

  /**
   * A role that identifies an item inside a list of items.
   *
   * In an HTML host `list-item` will render a `<li>` element.
   * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role) in the MDN web docs.
   */
  | 'list-item'

  /**
   * A role that indicates the component acts as a divider separating and distinguishing sections of content in a list of items.
   *
   * In an HTML host `list-item-separator` will render as `<li role="separator">`.
   * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
   */
  | 'list-item-separator'

  /**
   * A role that identifies a list of unordered items.
   *
   * In an HTML host `unordered-list` will render a `<ul>` element.
   * Learn more about the [`<ul>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
   */
  | 'unordered-list'

  /**
   * A role that indicates the component acts as a divider separating and distinguishing sections of content.
   *
   * In an HTML host `separator` will render as `<div role="separator">`.
   * Learn more about the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
   */
  | 'separator'

  /**
   * A role that defines a live region containing advisory information for the user that isn't important enough to be an alert.
   *
   * In an HTML host `status` will render as `<div role="status">`.
   * Learn more about the [`status` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) in the MDN web docs.
   */
  | 'status'

  /**
   * A role for important, and usually time-sensitive, information.
   *
   * In an HTML host `alert` will render as `<div role="alert">`.
   * Learn more about the [`alert` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) in the MDN web docs.
   */
  | 'alert'

  /**
   * A role for a nameless container element that has no semantic meaning on its own.
   *
   * In an HTML host, `generic` will render a `<div>` element.
   * Learn more about the [`generic` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role) in the MDN web docs.
   */
  | 'generic';

/**
 * A keyword that maps to a predefined spacing value from the Shopify admin
 * design system. Use these instead of pixel values to ensure consistent
 * spacing throughout the UI.
 *
 * - `none`: No spacing (0px).
 * - `small`: A compact amount of spacing, suitable for tight layouts.
 * - `base`: The default spacing, appropriate for most layouts.
 * - `large`: A generous amount of spacing, used to create visual separation.
 */
export type SpacingKeyword = 'none' | 'small' | 'base' | 'large';

/**
 * Props for controlling the dimensions of a layout element. All sizing
 * props use logical (writing-mode-aware) properties rather than physical
 * `width` / `height` so that layouts adapt correctly to different
 * writing directions.
 */
export interface SizingProps {
  /**
   * The block size (height in horizontal writing modes) of the element.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's block size.
   *
   * Learn more about the [block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size) property.
   */
  blockSize?: number | `${number}%`;

  /**
   * The minimum block size (minimum height in horizontal writing modes).
   * The element won't shrink smaller than this value even if its content is shorter.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's block size.
   *
   * Learn more about the [min-block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size) property.
   */
  minBlockSize?: number | `${number}%`;

  /**
   * The maximum block size (maximum height in horizontal writing modes).
   * The element won't grow taller than this value even if its content is longer.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's block size.
   *
   * Learn more about the [max-block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size) property.
   */
  maxBlockSize?: number | `${number}%`;

  /**
   * The inline size (width in horizontal writing modes) of the element.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's inline size.
   *
   * Learn more about the [inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size) property.
   */
  inlineSize?: number | `${number}%`;

  /**
   * The minimum inline size (minimum width in horizontal writing modes).
   * The element won't shrink narrower than this value.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's inline size.
   *
   * Learn more about the [min-inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size) property.
   */
  minInlineSize?: number | `${number}%`;

  /**
   * The maximum inline size (maximum width in horizontal writing modes).
   * The element won't grow wider than this value.
   *
   * - `number`: The size in pixels.
   * - `` `${number}%` ``: The size as a percentage of the parent container's inline size.
   *
   * Learn more about the [max-inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size) property.
   */
  maxInlineSize?: number | `${number}%`;
}

/**
 * Props for setting internal padding on a layout element using logical
 * (writing-mode-aware) properties. Shorthand and longhand variants are
 * available for fine-grained control over each edge.
 */
export interface PaddingProps {
  /**
   * The padding on all edges of the element, using a shorthand syntax.
   * You can specify one to four values following the [CSS shorthand convention](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box).
   *
   * When set to `true`, applies a default padding appropriate for the
   * component.
   */
  padding?: MaybeAllBoxEdgesShorthandProperty<SpacingKeyword | boolean>;

  /**
   * The padding on the block-start and block-end edges. When set to `true`, applies a default block padding appropriate for
   * the component.
   *
   * Learn more about the [padding-block](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block) property.
   */
  paddingBlock?: MaybeTwoBoxEdgesShorthandProperty<SpacingKeyword | boolean>;

  /**
   * The padding on the block-start edge (the top edge in horizontal
   * writing modes). When set to `true`, applies a default padding
   * appropriate for the component.
   *
   * Learn more about the [padding-block-start](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start) property.
   */
  paddingBlockStart?: SpacingKeyword | boolean;

  /**
   * The padding on the block-end edge (the bottom edge in horizontal
   * writing modes). When set to `true`, applies a default padding
   * appropriate for the component.
   *
   * Learn more about the [padding-block-end](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end) property.
   */
  paddingBlockEnd?: SpacingKeyword | boolean;

  /**
   * The padding on the inline-start and inline-end edges. When set to `true`, applies a default inline padding appropriate for
   * the component.
   *
   * Learn more about the [padding-inline](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline) property.
   */
  paddingInline?: MaybeTwoBoxEdgesShorthandProperty<SpacingKeyword | boolean>;

  /**
   * The padding on the inline-start edge (the left edge in
   * left-to-right writing modes). When set to `true`, applies a default
   * padding appropriate for the component.
   *
   * Learn more about the [padding-inline-start](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start) property.
   */
  paddingInlineStart?: SpacingKeyword | boolean;

  /**
   * The padding on the inline-end edge (the right edge in
   * left-to-right writing modes). When set to `true`, applies a default
   * padding appropriate for the component.
   *
   * Learn more about the [padding-inline-end](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end) property.
   */
  paddingInlineEnd?: SpacingKeyword | boolean;
}

/**
 * A shorthand type that accepts one to four spacing values following the
 * CSS box-edge shorthand convention (block-start, inline-end, block-end, inline-start).
 *
 * - One value (such as `base`): Applied to all four edges.
 * - Two values (such as `base none`): The first is applied to block-start and block-end, the second to inline-start and inline-end.
 * - Three values (such as `base none large`): The first is block-start, the second is inline-start and inline-end, the third is block-end.
 * - Four values (such as `base none large small`): Applied to block-start, inline-end, block-end, and inline-start respectively.
 */
export type MaybeAllBoxEdgesShorthandProperty<
  T extends SpacingKeyword | boolean,
> = T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`;

/**
 * A shorthand type that accepts one or two spacing values, representing
 * the start and end edges of a single axis (block or inline).
 *
 * - One value (such as `base`): Applied to both the start and end edges.
 * - Two values (such as `base none`): The first is applied to the start edge, the second to the end edge.
 */
export type MaybeTwoBoxEdgesShorthandProperty<
  T extends SpacingKeyword | boolean,
> = T | `${T} ${T}`;

/**
 * Props for configuring browser autofill behavior on a form field.
 * The generic parameter narrows the set of allowed autocomplete field
 * tokens to those relevant to the specific input type.
 */
export interface AutocompleteProps<
  AutocompleteField extends AnyAutocompleteField,
> {
  /**
   * A hint to the browser about the expected content of the field,
   * used to offer autofill suggestions.
   *
   * - `true`: The field supports autofill, but no specific content
   *   type is specified.
   * - `false`: The field contains sensitive or ephemeral data that
   *   should not be autofilled, such as one-time codes.
   * - An `AutocompleteField` token (such as `'email'` or
   *   `'street-address'`): Tells the browser exactly what data to
   *   suggest for this field.
   *
   * Learn more about the supported [autocomplete values](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens).
   */
  autocomplete?:
    | AutocompleteField
    | `${AutocompleteSection} ${AutocompleteField}`
    | `${AutocompleteGroup} ${AutocompleteField}`
    | `${AutocompleteSection} ${AutocompleteGroup} ${AutocompleteField}`
    | boolean;
}

/**
 * A section prefix that scopes autofill data to a specific area of the
 * page. Use this when the same page contains multiple groups of fields
 * that share the same autocomplete tokens, such as two separate shipping
 * address forms. The value must follow the pattern `section-${name}`,
 * for example `"section-shipping-1"`.
 */
export type AutocompleteSection = `section-${string}`;

/**
 * The contact information group the autocomplete data should be sourced from.
 *
 * - `shipping`: Autofill with the user's shipping address information.
 * - `billing`: Autofill with the user's billing address information.
 */
export type AutocompleteGroup = 'shipping' | 'billing';

/**
 * The contact information subgroup the autocomplete data should be sourced
 * from. Used to scope telephone and instant-message autocomplete fields to
 * a specific contact method.
 *
 * - `fax`: Autofill with the user's fax number.
 * - `home`: Autofill with the user's home contact information.
 * - `mobile`: Autofill with the user's mobile contact information.
 * - `pager`: Autofill with the user's pager number.
 */
export type AutocompleteAddressGroup = 'fax' | 'home' | 'mobile' | 'pager';

/**
 * Alias tokens for telephone-related autocomplete fields.
 *
 * - `tel`: The standard HTML autocomplete token.
 * - `telephone`: A human-readable alias for `tel`.
 */
export type AutocompleteFieldTelephoneAlias = 'tel' | 'telephone';

/**
 * Alias tokens for birthday-related autocomplete fields.
 *
 * - `bday`: The standard HTML autocomplete token.
 * - `birthday`: A human-readable alias for `bday`.
 */
export type AutocompleteFieldBirthdayAlias = 'bday' | 'birthday';

/**
 * Alias tokens for credit-card-related autocomplete fields.
 *
 * - `cc`: The standard HTML autocomplete token prefix.
 * - `credit-card`: A human-readable alias for `cc`.
 */
export type AutocompleteFieldCreditCardAlias = 'cc' | 'credit-card';

/**
 * Alias tokens for instant-message-related autocomplete fields.
 *
 * - `impp`: The standard HTML autocomplete token.
 * - `instant-message`: A human-readable alias for `impp`.
 */
export type AutocompleteFieldInstantMessageAlias = 'impp' | 'instant-message';

/**
 * Alias tokens for credit-card security-code autocomplete fields.
 *
 * - `csc`: The standard HTML autocomplete token.
 * - `security-code`: A human-readable alias for `csc`.
 */
export type AutocompleteFieldSecurityCodeAlias = 'csc' | 'security-code';

/**
 * The full union of all autocomplete field tokens recognized by admin
 * UI extension input components. Individual input types narrow this
 * union to only the tokens relevant to their data type.
 */
export type AnyAutocompleteField =
  | 'additional-name'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'country-name'
  | 'country'
  | 'current-password'
  | 'email'
  | 'family-name'
  | 'given-name'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'language'
  | 'name'
  | 'new-password'
  | 'nickname'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'photo'
  | 'postal-code'
  | 'sex'
  | 'street-address'
  | 'transaction-amount'
  | 'transaction-currency'
  | 'url'
  | 'username'
  | `${AutocompleteFieldBirthdayAlias}-day`
  | `${AutocompleteFieldBirthdayAlias}-month`
  | `${AutocompleteFieldBirthdayAlias}-year`
  | `${AutocompleteFieldBirthdayAlias}`
  | `${AutocompleteFieldCreditCardAlias}-additional-name`
  | `${AutocompleteFieldCreditCardAlias}-expiry-month`
  | `${AutocompleteFieldCreditCardAlias}-expiry-year`
  | `${AutocompleteFieldCreditCardAlias}-expiry`
  | `${AutocompleteFieldCreditCardAlias}-family-name`
  | `${AutocompleteFieldCreditCardAlias}-given-name`
  | `${AutocompleteFieldCreditCardAlias}-name`
  | `${AutocompleteFieldCreditCardAlias}-number`
  | `${AutocompleteFieldCreditCardAlias}-${AutocompleteFieldSecurityCodeAlias}`
  | `${AutocompleteFieldCreditCardAlias}-type`
  | `${AutocompleteAddressGroup} email`
  | `${AutocompleteFieldInstantMessageAlias}`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldInstantMessageAlias}`
  | `${AutocompleteFieldTelephoneAlias}`
  | `${AutocompleteFieldTelephoneAlias}-area-code`
  | `${AutocompleteFieldTelephoneAlias}-country-code`
  | `${AutocompleteFieldTelephoneAlias}-extension`
  | `${AutocompleteFieldTelephoneAlias}-local-prefix`
  | `${AutocompleteFieldTelephoneAlias}-local-suffix`
  | `${AutocompleteFieldTelephoneAlias}-local`
  | `${AutocompleteFieldTelephoneAlias}-national`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-area-code`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-country-code`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-extension`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local-prefix`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local-suffix`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-national`;

/**
 * The subset of autocomplete field tokens relevant to plain-text inputs
 * such as TextField and TextArea. Excludes tokens for passwords,
 * phone numbers, URLs, dates, and monetary amounts.
 */
export type TextAutocompleteField = Extract<
  AnyAutocompleteField,
  | 'additional-name'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'country-name'
  | 'country'
  | 'family-name'
  | 'given-name'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'language'
  | 'name'
  | 'nickname'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'postal-code'
  | 'sex'
  | 'street-address'
  | 'transaction-currency'
  | 'username'
  | `${AutocompleteFieldCreditCardAlias}-name`
  | `${AutocompleteFieldCreditCardAlias}-given-name`
  | `${AutocompleteFieldCreditCardAlias}-additional-name`
  | `${AutocompleteFieldCreditCardAlias}-family-name`
  | `${AutocompleteFieldCreditCardAlias}-type`
>;

/**
 * The subset of autocomplete field tokens relevant to monetary amount
 * inputs such as MoneyField. Currently limited to `transaction-amount`.
 */
export type MoneyAutocomplete = Extract<
  AnyAutocompleteField,
  'transaction-amount'
>;

/**
 * The subset of autocomplete field tokens relevant to date inputs.
 * Includes birthday fields and credit-card expiry fields.
 */
export type DateAutocomplete = Extract<
  AnyAutocompleteField,
  | `${AutocompleteFieldBirthdayAlias}`
  | `${AutocompleteFieldBirthdayAlias}-day`
  | `${AutocompleteFieldBirthdayAlias}-month`
  | `${AutocompleteFieldBirthdayAlias}-year`
  | `${AutocompleteFieldCreditCardAlias}-expiry`
  | `${AutocompleteFieldCreditCardAlias}-expiry-month`
  | `${AutocompleteFieldCreditCardAlias}-expiry-year`
>;

/**
 * The subset of autocomplete field tokens relevant to phone number inputs.
 * Includes full telephone numbers and component parts such as area code,
 * country code, extension, and local prefix/suffix.
 */
export type PhoneAutocompleteField = Extract<
  AnyAutocompleteField,
  | `${AutocompleteFieldTelephoneAlias}`
  | `${AutocompleteFieldTelephoneAlias}-area-code`
  | `${AutocompleteFieldTelephoneAlias}-country-code`
  | `${AutocompleteFieldTelephoneAlias}-extension`
  | `${AutocompleteFieldTelephoneAlias}-local-prefix`
  | `${AutocompleteFieldTelephoneAlias}-local-suffix`
  | `${AutocompleteFieldTelephoneAlias}-local`
  | `${AutocompleteFieldTelephoneAlias}-national`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-area-code`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-country-code`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-extension`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local-prefix`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local-suffix`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-national`
>;

/**
 * Props for controlling the spacing (gap) between child elements in a
 * layout container. Provides shorthand and axis-specific gap values.
 */
export interface GapProps {
  /**
   * The spacing between children in both axes. Accepts a single value
   * for uniform spacing, or two values separated by a space for independent
   * block-axis and inline-axis spacing (such as `"base small"`). When set
   * to `true`, applies a default gap appropriate for the component.
   *
   * Learn more about the [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) property.
   */
  gap?: MaybeTwoBoxEdgesShorthandProperty<SpacingKeyword | boolean>;

  /**
   * The spacing between children along the block axis (top-to-bottom
   * in horizontal writing modes). This is an alias for `rowGap`. When set
   * to `true`, applies a default block gap appropriate for the component.
   */
  blockGap?: SpacingKeyword | boolean;

  /**
   * The spacing between children along the inline axis (left-to-right
   * in horizontal writing modes). This is an alias for `columnGap`. When
   * set to `true`, applies a default inline gap appropriate for the
   * component.
   */
  inlineGap?: SpacingKeyword | boolean;

  /**
   * The spacing between rows (children stacked along the block axis).
   * When set to `true`, applies a default row gap appropriate for the
   * component.
   *
   * Learn more about the [row-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap) property.
   */
  rowGap?: SpacingKeyword | boolean;

  /**
   * The spacing between columns (children placed along the inline axis).
   * When set to `true`, applies a default column gap appropriate for the
   * component.
   *
   * Learn more about the [column-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap) property.
   */
  columnGap?: SpacingKeyword | boolean;
}

/**
 * Controls how items are aligned along the container's cross axis
 * (perpendicular to the main stacking direction).
 *
 * - `start`: Items are aligned to the start of the container's cross axis.
 * - `center`: Items are centered along the container's cross axis.
 * - `end`: Items are aligned to the end of the container's cross axis.
 * - `baseline`: Items are aligned so their text baselines line up with each other.
 *
 * Learn more about the [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) property.
 */
export type CrossAxisAlignment =
  /** Items are aligned to the start of the container's cross axis. */
  | 'start'
  /** Items are centered along the container's cross axis. */
  | 'center'
  /** Items are aligned to the end of the container's cross axis. */
  | 'end'
  /** Items are aligned so their text baselines line up with each other. Useful when items have different font sizes. */
  | 'baseline';

/**
 * Controls how items are distributed along the container's main axis
 * (the primary stacking direction).
 *
 * - `start`: Items are packed toward the start of the main axis.
 * - `center`: Items are centered along the main axis.
 * - `end`: Items are packed toward the end of the main axis.
 * - `space-between`: Items are distributed evenly. The first item is flush with the start edge, the last with the end edge.
 * - `space-around`: Items are distributed evenly with half-size spaces on both ends.
 * - `space-evenly`: Items are distributed so that spacing between any two adjacent items (and edges) is equal.
 *
 * Learn more about the [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) property.
 */
export type MainAxisAlignment =
  /** Items are packed toward the start of the container's main axis. */
  | 'start'
  /** Items are centered along the container's main axis. */
  | 'center'
  /** Items are packed toward the end of the container's main axis. */
  | 'end'
  /** Items are distributed evenly — the first item is flush with the start edge, the last is flush with the end edge. */
  | 'space-between'
  /** Items are distributed evenly with half-size spaces on both ends, so the space before the first and after the last item is half the space between adjacent items. */
  | 'space-around'
  /** Items are distributed so that the spacing between any two adjacent items (and the edges) is equal. */
  | 'space-evenly';

/**
 * A numeric scale of spacing tokens used for fine-grained layout control.
 * Each value corresponds to a multiplier of the base spacing unit (4px).
 * For example, `1` equals 4px, `2` equals 8px, `4` equals 16px, etc.
 *
 * - `0`: No spacing (0px).
 * - `025`: The smallest spacing (1px).
 * - `05`: A half-unit of spacing (2px).
 * - `1`: One unit of spacing (4px).
 * - `2`: Two units of spacing (8px).
 * - `3`: Three units of spacing (12px).
 * - `4`: Four units of spacing (16px).
 * - `5`: Five units of spacing (20px).
 * - `6`: Six units of spacing (24px).
 * - `8`: Eight units of spacing (32px).
 * - `10`: Ten units of spacing (40px).
 * - `12`: Twelve units of spacing (48px).
 * - `16`: Sixteen units of spacing (64px).
 * - `20`: Twenty units of spacing (80px).
 * - `24`: Twenty-four units of spacing (96px).
 * - `28`: Twenty-eight units of spacing (112px).
 * - `32`: Thirty-two units of spacing (128px).
 */
export type SpaceScale =
  | '0'
  | '025'
  | '05'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '8'
  | '10'
  | '12'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32';

/**
 * A relative size scale used for typography sizing. Values range from
 * smallest to largest:
 *
 * - `small-300`: The smallest available size.
 * - `small-200`: Smaller than small-100.
 * - `small-100`: Slightly below the base size.
 * - `base`: The default size.
 * - `large-100`: Slightly above the base size.
 * - `large-200`: Larger than large-100.
 * - `large-300`: The largest available size.
 */
export type SizeScale =
  | 'small-300'
  | 'small-200'
  | 'small-100'
  | 'base'
  | 'large-100'
  | 'large-200'
  | 'large-300';

/**
 * The tone communicates the intent or status of a message to the user.
 *
 * - `info`: Neutral informational content with no implied urgency.
 * - `success`: Indicates a successful action or a positive state.
 * - `warning`: Indicates something that requires the user's attention but isn't blocking.
 * - `critical`: Indicates a serious problem or error that needs immediate action.
 */
export type Tone = 'info' | 'success' | 'warning' | 'critical';

/**
 * Props for elements that can navigate to a URL or respond to press events.
 * Used by interactive components such as Link, Button, and Pressable.
 */
export interface AnchorProps {
  /**
   * The URL to navigate to when the element is activated. Supports both
   * absolute URLs (such as `"https://example.com"`) and relative paths
   * within the Shopify admin (such as `"/products"`). If both `href` and
   * `onClick` are set, the callback fires first and then navigation occurs.
   */
  href?: string;

  /**
   * An alias for `href`. The URL to navigate to when the element is activated.
   * If both `to` and `onClick` are set, the callback fires first and then
   * navigation occurs.
   */
  to?: string;

  /**
   * A callback fired when the element is activated (clicked or tapped). If
   * `href` is also set, then this callback runs first and navigation follows.
   * When `href` isn't set, use this to handle the action entirely in your
   * extension code.
   */
  onClick?(): void;

  /**
   * An alias for `onClick`. A callback fired when the element is activated
   * (clicked or tapped). If `href` is also set, then this callback runs first
   * and navigation follows.
   */
  onPress?(): void;
}

/**
 * A keyword that maps to a predefined background color from the Shopify admin
 * design system.
 *
 * - `transparent`: No background color; the parent's background shows through.
 * - `base`: The standard surface background color.
 * - `subdued`: A muted background color, typically used to de-emphasize content
 *   or distinguish secondary areas from the primary surface.
 */
export type BackgroundColorKeyword = 'transparent' | 'base' | 'subdued';

/**
 * Props for controlling the background appearance of a layout element.
 */
export interface BackgroundProps {
  /**
   * The background color of the element, set using a design-system keyword.
   *
   * - `transparent`: No background; the parent's background shows through.
   * - `base`: The standard surface background color.
   * - `subdued`: A muted background for de-emphasized or secondary content.
   *
   * @defaultValue 'transparent'
   */
  background?: BackgroundColorKeyword;
}

/**
 * Props for constraining numeric input values with minimum, maximum,
 * and step boundaries. Used by NumberField and MoneyField.
 */
export interface NumberConstraintsProps {
  /**
   * The highest decimal or integer to be accepted for the field. When
   * using the stepper buttons, the value won't exceed this limit. If
   * `step` would overshoot, then the value rounds down to `max`. A user
   * can still type a number higher than `max` using the keyboard, so
   * add appropriate validation with the `error` prop.
   */
  max?: number;

  /**
   * The lowest decimal or integer to be accepted for the field. When
   * using the stepper buttons, the value won't go below this limit. If
   * `step` would undershoot, then the value rounds up to `min`. A user
   * can still type a number lower than `min` using the keyboard, so
   * add appropriate validation with the `error` prop.
   *
   * @defaultValue 0
   */
  min?: number;

  /**
   * The increment amount for the stepper buttons. This can be an integer
   * or decimal (such as `0.01` for cents). Each press of the stepper button
   * increases or decreases the value by this amount. If `max` or `min` is
   * set, the final value always rounds to the boundary rather than
   * overshooting.
   *
   * @defaultValue 1
   */
  step?: number;
}

/**
 * Represents a monetary value with an amount and currency code. Used as
 * the value type for the MoneyField component.
 */
export interface Money {
  /**
   * The monetary amount as a decimal number, such as `29.99`.
   */
  amount: number;

  /**
   * The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency code for the amount, such as `'USD'` or `'EUR'`.
   */
  currencyCode: CurrencyCode;
}

/**
 * An ISO 4217 currency code identifying the currency of a monetary value.
 * Includes all currencies supported by Shopify.
 */
export type CurrencyCode =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'CAD'
  | 'AFN'
  | 'ALL'
  | 'DZD'
  | 'AOA'
  | 'ARS'
  | 'AMD'
  | 'AWG'
  | 'AUD'
  | 'BBD'
  | 'AZN'
  | 'BDT'
  | 'BSD'
  | 'BHD'
  | 'BIF'
  | 'BZD'
  | 'BMD'
  | 'BTN'
  | 'BAM'
  | 'BRL'
  | 'BOB'
  | 'BWP'
  | 'BND'
  | 'BGN'
  | 'MMK'
  | 'KHR'
  | 'CVE'
  | 'KYD'
  | 'XAF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'KMF'
  | 'CDF'
  | 'CRC'
  | 'HRK'
  | 'CZK'
  | 'DKK'
  | 'DOP'
  | 'XCD'
  | 'EGP'
  | 'ETB'
  | 'XPF'
  | 'FJD'
  | 'GMD'
  | 'GHS'
  | 'GTQ'
  | 'GYD'
  | 'GEL'
  | 'HTG'
  | 'HNL'
  | 'HKD'
  | 'HUF'
  | 'ISK'
  | 'INR'
  | 'IDR'
  | 'ILS'
  | 'IQD'
  | 'JMD'
  | 'JPY'
  | 'JEP'
  | 'JOD'
  | 'KZT'
  | 'KES'
  | 'KWD'
  | 'KGS'
  | 'LAK'
  | 'LVL'
  | 'LBP'
  | 'LSL'
  | 'LRD'
  | 'LTL'
  | 'MGA'
  | 'MKD'
  | 'MOP'
  | 'MWK'
  | 'MVR'
  | 'MXN'
  | 'MYR'
  | 'MUR'
  | 'MDL'
  | 'MAD'
  | 'MNT'
  | 'MZN'
  | 'NAD'
  | 'NPR'
  | 'ANG'
  | 'NZD'
  | 'NIO'
  | 'NGN'
  | 'NOK'
  | 'OMR'
  | 'PAB'
  | 'PKR'
  | 'PGK'
  | 'PYG'
  | 'PEN'
  | 'PHP'
  | 'PLN'
  | 'QAR'
  | 'RON'
  | 'RUB'
  | 'RWF'
  | 'WST'
  | 'SAR'
  | 'RSD'
  | 'SCR'
  | 'SGD'
  | 'SDG'
  | 'SYP'
  | 'ZAR'
  | 'KRW'
  | 'SSP'
  | 'SBD'
  | 'LKR'
  | 'SRD'
  | 'SZL'
  | 'SEK'
  | 'CHF'
  | 'TWD'
  | 'THB'
  | 'TZS'
  | 'TTD'
  | 'TND'
  | 'TRY'
  | 'TMT'
  | 'UGX'
  | 'UAH'
  | 'AED'
  | 'UYU'
  | 'UZS'
  | 'VUV'
  | 'VND'
  | 'XOF'
  | 'YER'
  | 'ZMW'
  | 'BYN'
  | 'BYR'
  | 'DJF'
  | 'ERN'
  | 'FKP'
  | 'GIP'
  | 'GNF'
  | 'IRR'
  | 'KID'
  | 'LYD'
  | 'MRU'
  | 'SLL'
  | 'SHP'
  | 'SOS'
  | 'STD'
  | 'STN'
  | 'TJS'
  | 'TOP'
  | 'VED'
  | 'VEF'
  | 'VES'
  | 'XXX';

/**
 * Controls how overflowing text content is signaled to the user when it
 * doesn't fit within its container.
 *
 * - `ellipsis`: Truncates the text and displays an ellipsis (`…`) character
 *   at the point of truncation.
 */
export type TextOverflow = 'ellipsis';

/**
 * Controls the styling of the font's letter forms.
 *
 * - `italic`: Renders text in an italic typeface, typically used for emphasis.
 * - `normal`: Renders text in the upright, default typeface.
 *
 * Learn more about the [font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) property.
 */
export type FontStyle = 'italic' | 'normal';

/**
 * Accessibility roles that can be applied to the Text component to
 * convey additional semantic meaning to assistive technologies. Each
 * role maps to a corresponding HTML element or ARIA role in web-based hosts.
 *
 * - `address`: The text is contact information.
 * - `deletion`: The text has been deleted; typically used for discounted prices.
 * - `mark`: The text is marked or highlighted and relevant to the current action.
 * - `emphasis`: The text has emphatic stress compared to surrounding text.
 * - `offset`: The text is offset from normal prose (such as a foreign word or definition).
 * - `strong`: The text indicates strong importance, seriousness, or urgency.
 */
export type TextAccessibilityRole =
  /**
   * A role that indicates the text is contact information. Typically used for addresses.
   */
  | 'address'

  /**
   * A role that indicates the text has been deleted. Typically used for discounted prices.
   * Learn more about the [`<del>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del).
   */
  | 'deletion'

  /**
   * A role that indicates the text is marked or highlighted and relevant to the buyer’s current action.
   * Typically used to indicate the characters that matched a search query.
   * Learn more about the [`mark` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/mark_role).
   */
  | 'mark'

  /**
   * A role that indicates emphatic stress. Typically used for words that have a stressed emphasis compared to surrounding text.
   *
   * In an HTML host, the text will be rendered in a `<em>` tag.
   * Learn more about the [`<em>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em).
   */
  | 'emphasis'

  /**
   * A role that indicates an offset from the normal prose of the text. Typically used to indicate
   * a foreign word, fictional character thoughts, or when the text refers to the definition of a word
   * instead of representing its semantic meaning.
   *
   * In an HTML host, the text will be rendered in a `<i>` tag.
   */
  | 'offset'

  /**
   * A role that indicates strong importance, seriousness, or urgency.
   *
   * In an HTML host, the text will be rendered in a `<strong>` tag.
   * Learn more about the [`<strong>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong).
   */
  | 'strong';

/**
 * Font variant options that control the usage of alternate glyphs.
 *
 * - `numeric`: Enables alternate glyphs for numbers, fractions, and ordinal markers.
 * - `all-small-caps`: Enables alternate glyphs for capital letters using small caps.
 * - `none`: Disables all font-variant ligatures and resets other variants to their initial values.
 *
 * Learn more about the [font-variant](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant) property.
 */
export type FontVariantOptions =
  /**
   * The `font-variant-numeric` CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   * Learn more about the [font-variant-numeric](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric) property.
   */
  | 'numeric'
  /**
   * The `font-variant-caps` CSS property controls the use of alternate glyphs for capital letters.
   * Learn more about the [font-variant-caps](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps) property.
   */
  | 'all-small-caps'
  /**
   * A variant that sets the value of `font-variant-ligatures` to `none`,
   * and the values of the other longhand properties to `normal`, their initial value.
   * Learn more about [font-variant values](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant#values).
   */
  | 'none';

/**
 * Controls the thickness (weight) of the font. Values range from lightest
 * to heaviest. Some values are convenience aliases.
 *
 * - `light-300`: The lightest available weight.
 * - `light-200`: Lighter than light-100.
 * - `light-100`: Slightly below base weight.
 * - `light`: An alias for `light-100`.
 * - `base`: The default font weight.
 * - `normal`: An alias for `base`.
 * - `bold`: An alias for `bold-100`.
 * - `bold-100`: Slightly above base weight; used for emphasis.
 * - `bold-200`: Heavier than bold-100.
 * - `bold-300`: The heaviest available weight.
 *
 * Learn more about the [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) property.
 */
export type FontWeight =
  | 'light-300'
  | 'light-200'
  | 'light-100'
  // alias to light-100
  | 'light'
  | 'base'
  // alias to base
  | 'normal'
  // alias to bold-100
  | 'bold'
  | 'bold-100'
  | 'bold-200'
  | 'bold-300';
/**
 * Shared typographic props used by block-level text components such as
 * Paragraph and Heading. Provides font size, weight, style, and
 * overflow controls.
 */
export interface BaseTypographyProps {
  /**
   * The font size, using the design-system size scale. Values range from
   * `small-300` (smallest) through `base` (default) to `large-300`
   * (largest). Prefer semantic heading components for page headings rather
   * than manually increasing font size.
   */
  fontSize?: SizeScale;

  /**
   * The weight (thickness) of the font. Use bolder weights to create
   * visual emphasis or hierarchy. Values range from `light-300` (thinnest)
   * through `base` (default) to `bold-300` (heaviest).
   *
   * Learn more about the [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) property.
   */
  fontWeight?: FontWeight;

  /**
   * The behavior for signaling text that overflows its container to users.
   * Currently supports only `ellipsis`, which truncates the text and
   * appends an ellipsis (`…`). The element must also constrain its size
   * (such as through `maxInlineSize`) for truncation to take effect.
   *
   * Learn more about the [text-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow) property.
   */
  textOverflow?: TextOverflow;

  /**
   * The font style. Use `italic` to emphasize a word or group of
   * words, or to indicate a title, foreign phrase, or other conventionally
   * italicized text.
   *
   * Learn more about the [font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style) property.
   */
  fontStyle?: FontStyle;
}
