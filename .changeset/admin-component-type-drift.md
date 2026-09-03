---
'@shopify/ui-extensions': minor
---

Regenerate the Admin per-component types so they match the components as shipped. Around 35 components gain properties that existed in the implementation but were missing from the types, including the whole of `DatePicker` (`allow`, `allowDays`, `defaultValue`, `defaultView`, `disallow`, `disallowDays`, `value`, `view`, `visibleMonths`), typography properties on `Text`, `Paragraph`, and `Heading` (`fontSize`, `fontWeight`, `fontVariantNumeric`), `Banner`'s `heading` and `dismissible`, `Button`'s `variant` and `accessibilityLabel`, and `ColorPicker`'s `alpha`, `value`, and `defaultValue`.
