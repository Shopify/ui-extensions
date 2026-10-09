---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-tester': patch
---

Expose extended address fields to checkout UI extensions:

- `Country.acceptedAddressInputFields` (the buyer's current country; on checkout's `Country` only, not customer accounts') and `localization.acceptedAddressInputFieldsForCountry(countryCode)` (any country) list the address inputs a country's format carries, typed by the new `AcceptedAddressInputField`. They're guidance: `applyShippingAddressChange` doesn't reject a write because it includes fields outside the list. It still rejects unknown properties, wrong value types, missing approval scopes, a malformed `addressLineComponents`, components for a country without a component layout, and any `addressCode` write.
- `MailingAddress` gains `addressLineComponents` (new `AddressLineComponents` type: `streetName`, `streetNumber`, `additionalInformation`, `district`, `subdistrict`) and `addressCode`.
- `applyShippingAddressChange` accepts writes nested under `addressLineComponents`. `ShippingAddressChangeFieldError.field` is now `ShippingAddressChangeErrorField`, which widens `keyof MailingAddress` to include line component names and `'addressLineComponents'`.
- The address autocomplete `suggest` and `format-suggestion` targets receive `target.acceptedAddressInputFields`. `AutocompleteAddress` accepts `addressLineComponents` and `addressCode`.
- `@shopify/ui-extensions-tester`: the checkout mock's `localization.acceptedAddressInputFieldsForCountry()` resolves the flat address input fields, and `localization.country` carries the same list. The new `createAcceptedAddressInputFieldsForCountry(overrides?)` helper and `FLAT_ADDRESS_INPUT_FIELDS` model countries with extended fields.

Breaking for custom implementations: `Localization` has a new required method, and exhaustive checks on `ShippingAddressChangeFieldError.field` need the new members.
