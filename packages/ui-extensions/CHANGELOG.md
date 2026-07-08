# @shopify/ui-extensions

## 2026.7.0

### Minor Changes

- [#4570](https://github.com/Shopify/ui-extensions/pull/4570) [`5d1769d`](https://github.com/Shopify/ui-extensions/commit/5d1769da4bba2d7cb7630f21dd0a34d75d993032) Thanks [@andrewmcgov](https://github.com/andrewmcgov)! - Add purchaseType and recurringCycleLimit subscribable fields to the DiscountsApi for discount function settings extensions.

- [#4512](https://github.com/Shopify/ui-extensions/pull/4512) [`b965a97`](https://github.com/Shopify/ui-extensions/commit/b965a97767d71320ea31293b94cc13e39ccd5893) Thanks [@daniszewskik](https://github.com/daniszewskik)! - Added optional `discountAllocations` field to POS bundle `LineItemComponent` so extensions can access the discount amount allocated to each bundle component.

- [#4530](https://github.com/Shopify/ui-extensions/pull/4530) [`19794cd`](https://github.com/Shopify/ui-extensions/commit/19794cd8ab69f661442b71891ece2a5bccd7efa1) Thanks [@cpeddecord](https://github.com/cpeddecord)! - Release the `Chat` component (`s-chat`) to checkout UI extensions.

- [#4531](https://github.com/Shopify/ui-extensions/pull/4531) [`c9f995c`](https://github.com/Shopify/ui-extensions/commit/c9f995c0e40b9166123f7b135c3247bbd8e3c36d) Thanks [@vctrchu](https://github.com/vctrchu)! - Added an optional `options` argument to the POS `cart.addLineItem` method so a single call can create a line item and decorate it with line-item properties (`properties`) in one operation. This avoids the extra native call and cart sync of chaining `addLineItem` → `addLineItemProperties`. Backwards compatible—the third argument is optional. Adds the `AddLineItemOptions` type.

- [#4515](https://github.com/Shopify/ui-extensions/pull/4515) [`9608767`](https://github.com/Shopify/ui-extensions/commit/96087678e4b82d80afd1efb5f9974f3e988024cd) Thanks [@aaronschubert0](https://github.com/aaronschubert0)! - Add the POS `shopify.printing` API. `shopify.printing.getPrinters()` discovers hardware printers currently available to the device, and `shopify.printing.print(src, options?)` prints content fetched from a URL — opening the system print dialog by default, or sending directly to a printer when a `printer` (from `getPrinters()`) is passed via `options`. This supersedes `shopify.print`, which is now deprecated.

- [#4489](https://github.com/Shopify/ui-extensions/pull/4489) [`8f27436`](https://github.com/Shopify/ui-extensions/commit/8f274366bdae412475113320e77bf1b6042ee735) Thanks [@akhayoon](https://github.com/akhayoon)! - Add `session.staffMember` for POS UI extensions so extensions can read and subscribe to the currently pinned staff member.

### Patch Changes

- [#4491](https://github.com/Shopify/ui-extensions/pull/4491) [`2399687`](https://github.com/Shopify/ui-extensions/commit/23996878ba8d12aa290a14b0f267d28ead3781f7) Thanks [@jasonblickhan](https://github.com/jasonblickhan)! - Add `admin.abandoned-checkout-index.action.render` and `admin.abandoned-checkout-index.action.should-render` extension targets for the abandoned checkout index page. This mirrors the action targets already available on other resource index pages (orders, customers, products, draft orders, etc.) and unblocks `admin.abandoned-checkout-index.action.link` admin link extensions.

- [#4334](https://github.com/Shopify/ui-extensions/pull/4334) [`234aead`](https://github.com/Shopify/ui-extensions/commit/234aead78ce9ac90077a67fbc219897832aafd74) Thanks [@henrytao-me](https://github.com/henrytao-me)! - Add admin.app.home.render extension target

- [#4468](https://github.com/Shopify/ui-extensions/pull/4468) [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Narrow `AppHomeApi.intents` to a new `AppHomeIntents` shape that exposes a signal-like `request` so the runtime can stream link intents into a long-lived `admin.app.home.render` extension. `WithGeneratedIntents` continues to narrow `request.value` to the CLI-generated variants.

- [#4468](https://github.com/Shopify/ui-extensions/pull/4468) [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Expose the `Tools` API on `AppHomeApi` so `admin.app.home.render` extensions can call `shopify.tools.register(...)` even before the CLI generates typed overloads. Adds a matching mock to `@shopify/ui-extensions-tester`.

- [#4499](https://github.com/Shopify/ui-extensions/pull/4499) [`e0e4f00`](https://github.com/Shopify/ui-extensions/commit/e0e4f003cd508ded2eafb0f3194c8ac92092ea51) Thanks [@charlesdobson](https://github.com/charlesdobson)! - Add `pick` action and `shopify/File` resource type to the admin Intents API, enabling extensions to open the file picker via `intents.invoke('pick:shopify/File', …)`.

- [#4454](https://github.com/Shopify/ui-extensions/pull/4454) [`be8c9e2`](https://github.com/Shopify/ui-extensions/commit/be8c9e206525a41f2544810a328d901e2cdcbb95) Thanks [@lsit](https://github.com/lsit)! - Add inlineSize to the customer account Page component

- [#4476](https://github.com/Shopify/ui-extensions/pull/4476) [`338a696`](https://github.com/Shopify/ui-extensions/commit/338a696739672a058813810771d737d84bee5559) Thanks [@lsit](https://github.com/lsit)! - Update docs for inlineSize prop on customer account Page component

- [#4477](https://github.com/Shopify/ui-extensions/pull/4477) [`d607e02`](https://github.com/Shopify/ui-extensions/commit/d607e026f6652eafa19a1a3c8352a431b9ecc47b) Thanks [@shivinmisra-shopify](https://github.com/shivinmisra-shopify)! - Add optional `cashRoundingAdjustment` money data to POS transaction-complete payload types.

- [#4442](https://github.com/Shopify/ui-extensions/pull/4442) [`060e669`](https://github.com/Shopify/ui-extensions/commit/060e669fb5ff34b30f7e8a8fb1b2696e038a4938) Thanks [@justinhenricks](https://github.com/justinhenricks)! - The `label` prop on the checkout and customer-account `s-checkbox` component now accepts a label as a slot in addition to a plain string, label slots can include only plain text and s-links.

- [#4566](https://github.com/Shopify/ui-extensions/pull/4566) [`3785596`](https://github.com/Shopify/ui-extensions/commit/3785596844eb8ba8e56b6c2a9f0459b72e43d480) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Deprecate `useBuyerJourneyIntercept` and the `buyerJourney.intercept` API. Use a cart and checkout validation function instead. The buyer journey intercept will be removed in a future version of the API.

- [#4335](https://github.com/Shopify/ui-extensions/pull/4335) [`bf2184a`](https://github.com/Shopify/ui-extensions/commit/bf2184a8d55a756533c46a60bf022653b7bfc423) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Add generic helper types for intents

- [#4346](https://github.com/Shopify/ui-extensions/pull/4346) [`ea1b6f4`](https://github.com/Shopify/ui-extensions/commit/ea1b6f4c725cc61efa03f4d859ba82ea3d50c2d1) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Match correctly on optional response

- [#4455](https://github.com/Shopify/ui-extensions/pull/4455) [`fe62c86`](https://github.com/Shopify/ui-extensions/commit/fe62c86217956ebf72c6b8e63b81d226f3a97da4) Thanks [@justinhenricks](https://github.com/justinhenricks)! - Add `textAlign` prop to the checkout `Paragraph` component, supporting `'start'`, `'end'`, `'center'`, and `'auto'` values.

- [#4466](https://github.com/Shopify/ui-extensions/pull/4466) [`cc5f4b3`](https://github.com/Shopify/ui-extensions/commit/cc5f4b3d624bcf12bb0ce4d8dc7d71ee0494ad1e) Thanks [@vctrchu](https://github.com/vctrchu)! - Narrow the `pos.app.ready.data` cart API surface to readonly. The background extension target's `shopify.cart` now only exposes the subscribable `current` signal; cart mutation methods (`addLineItem`, `clearCart`, `applyCartDiscount`, `setCustomer`, etc.) are not typed on this target. Cart mutation remains available to interactive render targets via the unchanged `CartApi`.

  Internally this splits `CartApiContent` into `ReadonlyCartApiContent` + `MutableCartApiContent` (both re-exported), and introduces `ReadonlyCartApi` for use in `DataTargetApi`.

- [#4544](https://github.com/Shopify/ui-extensions/pull/4544) [`7a403f6`](https://github.com/Shopify/ui-extensions/commit/7a403f6ef14e9f7234d5bda2634b7c3b75770e82) Thanks [@vctrchu](https://github.com/vctrchu)! - Remove native `Event` inheritance from POS event payload types.

- [#4535](https://github.com/Shopify/ui-extensions/pull/4535) [`d70009a`](https://github.com/Shopify/ui-extensions/commit/d70009a05130b86c296f59463d74e40e3ca4afe1) Thanks [@vctrchu](https://github.com/vctrchu)! - Remove the deprecated POS `.observe` event extension targets: `pos.transaction-complete.event.observe`, `pos.cash-tracking-session-start.event.observe`, `pos.cash-tracking-session-complete.event.observe`, and `pos.cart-update.event.observe`. These were early-access targets with effectively no production usage.

  Use the `pos.app.ready.data` background target instead: `shopify.addEventListener('transactioncomplete' | 'cashtrackingsessionstart' | 'cashtrackingsessioncomplete', callback)` for the event targets, and `shopify.cart.current.subscribe()` for cart updates.

  This also removes the `EventExtensionTargets`/`EventExtensionTarget` types and the `TransactionCompleteData`, `CashTrackingSessionStartData`, `CashTrackingSessionCompleteData`, and `CartUpdateEventData` payload types. The receipt-target type `TransactionCompleteWithReprintData` is unchanged.

- [#4509](https://github.com/Shopify/ui-extensions/pull/4509) [`7129e7d`](https://github.com/Shopify/ui-extensions/commit/7129e7d73b03c7127cd4a255a668c15f800e2d9b) Thanks [@james-a-c](https://github.com/james-a-c)! - Deprecate renderMode on shipping option item

- [#4349](https://github.com/Shopify/ui-extensions/pull/4349) [`f2b2b10`](https://github.com/Shopify/ui-extensions/commit/f2b2b10e99c4672c38b83cc048c2de93abbb7444) Thanks [@vividviolet](https://github.com/vividviolet)! - Publish package with admin.app.home.render target

- [#4511](https://github.com/Shopify/ui-extensions/pull/4511) [`f972657`](https://github.com/Shopify/ui-extensions/commit/f972657cc48c1b6a674f55ccb586e56d5be35e80) Thanks [@lsit](https://github.com/lsit)! - Expose the `padding` prop on the checkout and customer account `s-section` components.

## 2026.7.0-rc.7

### Patch Changes

- [#4511](https://github.com/Shopify/ui-extensions/pull/4511) [`f972657`](https://github.com/Shopify/ui-extensions/commit/f972657cc48c1b6a674f55ccb586e56d5be35e80) Thanks [@lsit](https://github.com/lsit)! - Expose the `padding` prop on the checkout and customer account `s-section` components.

## 2026.7.0-rc.6

### Minor Changes

- [#4489](https://github.com/Shopify/ui-extensions/pull/4489) [`8f27436`](https://github.com/Shopify/ui-extensions/commit/8f274366bdae412475113320e77bf1b6042ee735) Thanks [@akhayoon](https://github.com/akhayoon)! - Add `session.staffMember` for POS UI extensions so extensions can read and subscribe to the currently pinned staff member.

### Patch Changes

- [#4491](https://github.com/Shopify/ui-extensions/pull/4491) [`2399687`](https://github.com/Shopify/ui-extensions/commit/23996878ba8d12aa290a14b0f267d28ead3781f7) Thanks [@jasonblickhan](https://github.com/jasonblickhan)! - Add `admin.abandoned-checkout-index.action.render` and `admin.abandoned-checkout-index.action.should-render` extension targets for the abandoned checkout index page. This mirrors the action targets already available on other resource index pages (orders, customers, products, draft orders, etc.) and unblocks `admin.abandoned-checkout-index.action.link` admin link extensions.

- [#4468](https://github.com/Shopify/ui-extensions/pull/4468) [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Narrow `AppHomeApi.intents` to a new `AppHomeIntents` shape that exposes a signal-like `request` so the runtime can stream link intents into a long-lived `admin.app.home.render` extension. `WithGeneratedIntents` continues to narrow `request.value` to the CLI-generated variants.

- [#4468](https://github.com/Shopify/ui-extensions/pull/4468) [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Expose the `Tools` API on `AppHomeApi` so `admin.app.home.render` extensions can call `shopify.tools.register(...)` even before the CLI generates typed overloads. Adds a matching mock to `@shopify/ui-extensions-tester`.

- [#4476](https://github.com/Shopify/ui-extensions/pull/4476) [`338a696`](https://github.com/Shopify/ui-extensions/commit/338a696739672a058813810771d737d84bee5559) Thanks [@lsit](https://github.com/lsit)! - Update docs for inlineSize prop on customer account Page component

- [#4477](https://github.com/Shopify/ui-extensions/pull/4477) [`d607e02`](https://github.com/Shopify/ui-extensions/commit/d607e026f6652eafa19a1a3c8352a431b9ecc47b) Thanks [@shivinmisra-shopify](https://github.com/shivinmisra-shopify)! - Add optional `cashRoundingAdjustment` money data to POS transaction-complete payload types.

- [#4455](https://github.com/Shopify/ui-extensions/pull/4455) [`fe62c86`](https://github.com/Shopify/ui-extensions/commit/fe62c86217956ebf72c6b8e63b81d226f3a97da4) Thanks [@justinhenricks](https://github.com/justinhenricks)! - Add `textAlign` prop to the checkout `Paragraph` component, supporting `'start'`, `'end'`, `'center'`, and `'auto'` values.

- [#4466](https://github.com/Shopify/ui-extensions/pull/4466) [`cc5f4b3`](https://github.com/Shopify/ui-extensions/commit/cc5f4b3d624bcf12bb0ce4d8dc7d71ee0494ad1e) Thanks [@vctrchu](https://github.com/vctrchu)! - Narrow the `pos.app.ready.data` cart API surface to readonly. The background extension target's `shopify.cart` now only exposes the subscribable `current` signal; cart mutation methods (`addLineItem`, `clearCart`, `applyCartDiscount`, `setCustomer`, etc.) are not typed on this target. Cart mutation remains available to interactive render targets via the unchanged `CartApi`.

  Internally this splits `CartApiContent` into `ReadonlyCartApiContent` + `MutableCartApiContent` (both re-exported), and introduces `ReadonlyCartApi` for use in `DataTargetApi`.

## 2026.7.0-rc.5

### Patch Changes

- [#4454](https://github.com/Shopify/ui-extensions/pull/4454) [`be8c9e2`](https://github.com/Shopify/ui-extensions/commit/be8c9e206525a41f2544810a328d901e2cdcbb95) Thanks [@lsit](https://github.com/lsit)! - Add inlineSize to the customer account Page component

## 2026.7.0-rc.4

### Patch Changes

- [#4442](https://github.com/Shopify/ui-extensions/pull/4442) [`060e669`](https://github.com/Shopify/ui-extensions/commit/060e669fb5ff34b30f7e8a8fb1b2696e038a4938) Thanks [@justinhenricks](https://github.com/justinhenricks)! - The `label` prop on the checkout and customer-account `s-checkbox` component now accepts a label as a slot in addition to a plain string, label slots can include only plain text and s-links.

## 2026.7.0-rc.3

### Patch Changes

- [#4334](https://github.com/Shopify/ui-extensions/pull/4334) [`234aead`](https://github.com/Shopify/ui-extensions/commit/234aead78ce9ac90077a67fbc219897832aafd74) Thanks [@henrytao-me](https://github.com/henrytao-me)! - Add admin.app.home.render extension target

- [#4346](https://github.com/Shopify/ui-extensions/pull/4346) [`ea1b6f4`](https://github.com/Shopify/ui-extensions/commit/ea1b6f4c725cc61efa03f4d859ba82ea3d50c2d1) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Match correctly on optional response

- [#4349](https://github.com/Shopify/ui-extensions/pull/4349) [`f2b2b10`](https://github.com/Shopify/ui-extensions/commit/f2b2b10e99c4672c38b83cc048c2de93abbb7444) Thanks [@vividviolet](https://github.com/vividviolet)! - Publish package with admin.app.home.render target

## 2026.7.0-rc.2

### Patch Changes

- [#4335](https://github.com/Shopify/ui-extensions/pull/4335) [`bf2184a`](https://github.com/Shopify/ui-extensions/commit/bf2184a8d55a756533c46a60bf022653b7bfc423) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Add generic helper types for intents

## 2026.7.0-rc.1

### Major Changes

- [`eb74ecc`](https://github.com/Shopify/ui-extensions/commit/eb74eccd35fdf7b6a780320c6eb3830cee7ea24f) Thanks [@lrsterrett](https://github.com/lrsterrett)! - 2026-07-rc release

## 2026.4.0

### Major Changes

- [`77d447c`](https://github.com/Shopify/ui-extensions/commit/77d447c7f34151d3af49f6b7c4bc987558eec292) Thanks [@lrsterrett](https://github.com/lrsterrett)! - 2026-04-rc release

### Minor Changes

- [#4079](https://github.com/Shopify/ui-extensions/pull/4079) [`db7cec2`](https://github.com/Shopify/ui-extensions/commit/db7cec21f1fd428115d4540158f235a714b585de) Thanks [@avocadomayo](https://github.com/avocadomayo)! - Remove checkout metafields in favour of cart metafields

- [#4010](https://github.com/Shopify/ui-extensions/pull/4010) [`b60a9a1`](https://github.com/Shopify/ui-extensions/commit/b60a9a18a1da763fe8c9c01ce4911c4754926cce) Thanks [@avocadomayo](https://github.com/avocadomayo)! - - [Customer accounts] Remove checkout metafields in favour of app metafields

  - [Customer accounts] Update component categories

- [#4178](https://github.com/Shopify/ui-extensions/pull/4178) [`7408712`](https://github.com/Shopify/ui-extensions/commit/7408712b9d85eb4464560bf2078aa2a81a1ff3af) Thanks [@mauriciosierra](https://github.com/mauriciosierra)! - Add optional refundId, returnId, exchangeId, lineItemsAdded, and lineItemsRemoved fields to ReprintReceiptData to support reprinting return and exchange receipts.

- [#3778](https://github.com/Shopify/ui-extensions/pull/3778) [`d1c35f2`](https://github.com/Shopify/ui-extensions/commit/d1c35f25cc86dfa1dcf8934a7b7cf5fa9856846a) Thanks [@merkoyep](https://github.com/merkoyep)! - add deviceId to SessionApi

### Patch Changes

- [#4251](https://github.com/Shopify/ui-extensions/pull/4251) [`a5c2bbf`](https://github.com/Shopify/ui-extensions/commit/a5c2bbf71decdf210d46ad4d6dc814faa6c0912f) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Add admin.app.intent.render target

- [#4148](https://github.com/Shopify/ui-extensions/pull/4148) [`3b9614b`](https://github.com/Shopify/ui-extensions/commit/3b9614b572b7eb84715dc7656364ad38c9a4ead2) Thanks [@lrsterrett](https://github.com/lrsterrett)! - Remove types for `ui` from checkout ui extension api as `ui` wasn't supported since 2025.10.0 For reference, closing a modal can be done declaritively on the modal polaris component, instead of the deprecated `ui.overlay.close`

- [#3970](https://github.com/Shopify/ui-extensions/pull/3970) [`6c3ac55`](https://github.com/Shopify/ui-extensions/commit/6c3ac5559c50553314cdea0993e39fcf853cc3d0) Thanks [@jonathanhamel4](https://github.com/jonathanhamel4)! - Api types for discount classes are incorrect with the admin-web

- [#3785](https://github.com/Shopify/ui-extensions/pull/3785) [`acd9002`](https://github.com/Shopify/ui-extensions/commit/acd9002d9d8768732bbbf19eccae268ffde9a07b) Thanks [@billfienberg](https://github.com/billfienberg)! - Admin: Expose picker and resource picker APIs for all rendering extensions

- [#4072](https://github.com/Shopify/ui-extensions/pull/4072) [`12df6f9`](https://github.com/Shopify/ui-extensions/commit/12df6f92b68bca036132b3c54a69e28e15330a65) Thanks [@avocadomayo](https://github.com/avocadomayo)! - [Checkout] Update code examples

- [#4078](https://github.com/Shopify/ui-extensions/pull/4078) [`21566b3`](https://github.com/Shopify/ui-extensions/commit/21566b391651653c8e3d626811d5b787b26f9fe3) Thanks [@jonathanhamel4](https://github.com/jonathanhamel4)! - Adds discount-index.selection-action extension point

## 2026.4.0-rc.3

### Minor Changes

- [#4178](https://github.com/Shopify/ui-extensions/pull/4178) [`7408712`](https://github.com/Shopify/ui-extensions/commit/7408712b9d85eb4464560bf2078aa2a81a1ff3af) Thanks [@mauriciosierra](https://github.com/mauriciosierra)! - Add optional refundId, returnId, exchangeId, lineItemsAdded, and lineItemsRemoved fields to ReprintReceiptData to support reprinting return and exchange receipts.

### Patch Changes

- [#4148](https://github.com/Shopify/ui-extensions/pull/4148) [`3b9614b`](https://github.com/Shopify/ui-extensions/commit/3b9614b572b7eb84715dc7656364ad38c9a4ead2) Thanks [@lrsterrett](https://github.com/lrsterrett)! - Remove types for `ui` from checkout ui extension api as `ui` wasn't supported since 2025.10.0 For reference, closing a modal can be done declaritively on the modal polaris component, instead of the deprecated `ui.overlay.close`

## 2026.4.0-rc.2

### Minor Changes

- [#4079](https://github.com/Shopify/ui-extensions/pull/4079) [`db7cec2`](https://github.com/Shopify/ui-extensions/commit/db7cec21f1fd428115d4540158f235a714b585de) Thanks [@avocadomayo](https://github.com/avocadomayo)! - Remove checkout metafields in favour of cart metafields

- [#4010](https://github.com/Shopify/ui-extensions/pull/4010) [`b60a9a1`](https://github.com/Shopify/ui-extensions/commit/b60a9a18a1da763fe8c9c01ce4911c4754926cce) Thanks [@avocadomayo](https://github.com/avocadomayo)! - - [Customer accounts] Remove checkout metafields in favour of app metafields
  - [Customer accounts] Update component categories

### Patch Changes

- [#3970](https://github.com/Shopify/ui-extensions/pull/3970) [`6c3ac55`](https://github.com/Shopify/ui-extensions/commit/6c3ac5559c50553314cdea0993e39fcf853cc3d0) Thanks [@jonathanhamel4](https://github.com/jonathanhamel4)! - Api types for discount classes are incorrect with the admin-web

- [#4072](https://github.com/Shopify/ui-extensions/pull/4072) [`12df6f9`](https://github.com/Shopify/ui-extensions/commit/12df6f92b68bca036132b3c54a69e28e15330a65) Thanks [@avocadomayo](https://github.com/avocadomayo)! - [Checkout] Update code examples

- [#4078](https://github.com/Shopify/ui-extensions/pull/4078) [`21566b3`](https://github.com/Shopify/ui-extensions/commit/21566b391651653c8e3d626811d5b787b26f9fe3) Thanks [@jonathanhamel4](https://github.com/jonathanhamel4)! - Adds discount-index.selection-action extension point

## 2026.4.0-rc.1

### Minor Changes

- [#3778](https://github.com/Shopify/ui-extensions/pull/3778) [`d1c35f2`](https://github.com/Shopify/ui-extensions/commit/d1c35f25cc86dfa1dcf8934a7b7cf5fa9856846a) Thanks [@merkoyep](https://github.com/merkoyep)! - add deviceId to SessionApi

### Patch Changes

- [#3785](https://github.com/Shopify/ui-extensions/pull/3785) [`acd9002`](https://github.com/Shopify/ui-extensions/commit/acd9002d9d8768732bbbf19eccae268ffde9a07b) Thanks [@billfienberg](https://github.com/billfienberg)! - Admin: Expose picker and resource picker APIs for all rendering extensions

## 2026.4.0-rc.0

### Major Changes

- [#3761](https://github.com/Shopify/ui-extensions/pull/3761) [`77d447c`](https://github.com/Shopify/ui-extensions/commit/77d447c7f34151d3af49f6b7c4bc987558eec292) Thanks [@shopify-github-actions-access](https://github.com/apps/shopify-github-actions-access)! - 2026-04-rc release

## 2026.1.0

### Minor Changes

- [#3529](https://github.com/Shopify/ui-extensions/pull/3529) [`afa47f1`](https://github.com/Shopify/ui-extensions/commit/afa47f1e00c86f69ff08606f9770aa513e8529f1) Thanks [@merkoyep](https://github.com/merkoyep)! - implements the cash drawer api to the ui extensions repository

- [#3603](https://github.com/Shopify/ui-extensions/pull/3603) [`e7892d6`](https://github.com/Shopify/ui-extensions/commit/e7892d6ef3f6b7281f5b22a41b7c8e43b49e68e0) Thanks [@prakashraman](https://github.com/prakashraman)! - Remove accessory slot from TextArea component

- [#3534](https://github.com/Shopify/ui-extensions/pull/3534) [`8e4bf19`](https://github.com/Shopify/ui-extensions/commit/8e4bf19b2420cb8bf89f0ed20ea0bb7597200bd5) Thanks [@merkoyep](https://github.com/merkoyep)! - Adds register details targets

- [#3738](https://github.com/Shopify/ui-extensions/pull/3738) [`cf12217`](https://github.com/Shopify/ui-extensions/commit/cf12217ba05f86ecc886a3471c26afbccfce914f) Thanks [@jolenehayes](https://github.com/jolenehayes)! - Add registerName field to the Device Api

- [#3597](https://github.com/Shopify/ui-extensions/pull/3597) [`6b20b88`](https://github.com/Shopify/ui-extensions/commit/6b20b88010b4c329f654aa7b84a08124e693ec74) Thanks [@fatbattk](https://github.com/fatbattk)! - Add Camera API types

- [#3536](https://github.com/Shopify/ui-extensions/pull/3536) [`58fef36`](https://github.com/Shopify/ui-extensions/commit/58fef364a8378a824a51e4697d83ae2d28d46f2f) Thanks [@alexgraffeocohen](https://github.com/alexgraffeocohen)! - Adds components to point of sale cart LineItem interface to represent product bundle items.

- [#3641](https://github.com/Shopify/ui-extensions/pull/3641) [`9440bde`](https://github.com/Shopify/ui-extensions/commit/9440bde5390d2940befc1037370217d16455dff2) Thanks [@jonathanhamel4](https://github.com/jonathanhamel4)! - Added subscribable discounts api. Update the type for `data.id` to string to fix a previously incorrect type.

### Patch Changes

- [#3729](https://github.com/Shopify/ui-extensions/pull/3729) [`2920d36`](https://github.com/Shopify/ui-extensions/commit/2920d36f66735f552b6cd9fe3738f934618b7b4f) Thanks [@kbav](https://github.com/kbav)! - Add admin.app.tools.data extension target

- [#3521](https://github.com/Shopify/ui-extensions/pull/3521) [`9f7afff`](https://github.com/Shopify/ui-extensions/commit/9f7afffcef86bcc8c6a9fef89ada580351082d9c) Thanks [@lrsterrett](https://github.com/lrsterrett)! - 2026.1.0-rc release

- [#3650](https://github.com/Shopify/ui-extensions/pull/3650) [`01fb914`](https://github.com/Shopify/ui-extensions/commit/01fb914a0ddbe520698607acd780d59787deb769) Thanks [@andy-chhuon](https://github.com/andy-chhuon)! - new oidc deploy workflow

- [#3695](https://github.com/Shopify/ui-extensions/pull/3695) [`397d749`](https://github.com/Shopify/ui-extensions/commit/397d7496e9cab5634da11dca5b78a3bde1b5ffe1) Thanks [@jonathanhamel4](https://github.com/jonathanhamel4)! - Remove unsupported fields for the Discount API. Those fields will be added in a later API.

- [#3652](https://github.com/Shopify/ui-extensions/pull/3652) [`54f38ee`](https://github.com/Shopify/ui-extensions/commit/54f38eeb798dee46f29eb146749a99d2634c6b49) Thanks [@andy-chhuon](https://github.com/andy-chhuon)! - Bump node version to v20.19.6

- [#3590](https://github.com/Shopify/ui-extensions/pull/3590) [`81c0416`](https://github.com/Shopify/ui-extensions/commit/81c0416e8b5772a2fe74e04d8f8d4263e4d61073) Thanks [@chadcromwell](https://github.com/chadcromwell)! - Add optional tipAmount field to POS transaction data types

- [#3730](https://github.com/Shopify/ui-extensions/pull/3730) [`280778e`](https://github.com/Shopify/ui-extensions/commit/280778e6a873f70635e2b43e4bc3ec4617cb2520) Thanks [@lrsterrett](https://github.com/lrsterrett)! - recommend merchant friendly warning for enabling checkout extension to block progress

- [#3574](https://github.com/Shopify/ui-extensions/pull/3574) [`2a6dddb`](https://github.com/Shopify/ui-extensions/commit/2a6dddbbd033c6c082ca513fcb62bc87523fa41e) Thanks [@alexgraffeocohen](https://github.com/alexgraffeocohen)! - Exports LineItemComponent from point-of-sale API so POS can import the type

## 2026.1.0-rc.5

### Patch Changes

- [#3650](https://github.com/Shopify/ui-extensions/pull/3650) [`01fb914`](https://github.com/Shopify/ui-extensions/commit/01fb914a0ddbe520698607acd780d59787deb769) Thanks [@andy-chhuon](https://github.com/andy-chhuon)! - new oidc deploy workflow

- [#3652](https://github.com/Shopify/ui-extensions/pull/3652) [`54f38ee`](https://github.com/Shopify/ui-extensions/commit/54f38eeb798dee46f29eb146749a99d2634c6b49) Thanks [@andy-chhuon](https://github.com/andy-chhuon)! - Bump node version to v20.19.6

## 2026.1.0-rc.4

### Minor Changes

- [#3603](https://github.com/Shopify/ui-extensions/pull/3603) [`e7892d6`](https://github.com/Shopify/ui-extensions/commit/e7892d6ef3f6b7281f5b22a41b7c8e43b49e68e0) Thanks [@prakashraman](https://github.com/prakashraman)! - Remove accessory slot from TextArea component

- [#3597](https://github.com/Shopify/ui-extensions/pull/3597) [`6b20b88`](https://github.com/Shopify/ui-extensions/commit/6b20b88010b4c329f654aa7b84a08124e693ec74) Thanks [@fatbattk](https://github.com/fatbattk)! - Add Camera API types

## 2026.1.0-rc.3

### Patch Changes

- [#3590](https://github.com/Shopify/ui-extensions/pull/3590) [`81c0416`](https://github.com/Shopify/ui-extensions/commit/81c0416e8b5772a2fe74e04d8f8d4263e4d61073) Thanks [@chadcromwell](https://github.com/chadcromwell)! - Add optional tipAmount field to POS transaction data types

## 2026.1.0-rc.2

### Minor Changes

- [#3529](https://github.com/Shopify/ui-extensions/pull/3529) [`afa47f1`](https://github.com/Shopify/ui-extensions/commit/afa47f1e00c86f69ff08606f9770aa513e8529f1) Thanks [@merkoyep](https://github.com/merkoyep)! - implements the cash drawer api to the ui extensions repository

- [#3534](https://github.com/Shopify/ui-extensions/pull/3534) [`8e4bf19`](https://github.com/Shopify/ui-extensions/commit/8e4bf19b2420cb8bf89f0ed20ea0bb7597200bd5) Thanks [@merkoyep](https://github.com/merkoyep)! - Adds register details targets

### Patch Changes

- [#3574](https://github.com/Shopify/ui-extensions/pull/3574) [`2a6dddb`](https://github.com/Shopify/ui-extensions/commit/2a6dddbbd033c6c082ca513fcb62bc87523fa41e) Thanks [@alexgraffeocohen](https://github.com/alexgraffeocohen)! - Exports LineItemComponent from point-of-sale API so POS can import the type

## 2026.1.0-rc.1

### Minor Changes

- [#3536](https://github.com/Shopify/ui-extensions/pull/3536) [`58fef36`](https://github.com/Shopify/ui-extensions/commit/58fef364a8378a824a51e4697d83ae2d28d46f2f) Thanks [@alexgraffeocohen](https://github.com/alexgraffeocohen)! - Adds components to point of sale cart LineItem interface to represent product bundle items.

### Patch Changes

- [#3521](https://github.com/Shopify/ui-extensions/pull/3521) [`9f7afff`](https://github.com/Shopify/ui-extensions/commit/9f7afffcef86bcc8c6a9fef89ada580351082d9c) Thanks [@lrsterrett](https://github.com/lrsterrett)! - 2026.1.0-rc release

## 2025.10.12

### Patch Changes

- [#3706](https://github.com/Shopify/ui-extensions/pull/3706) [`2112c03`](https://github.com/Shopify/ui-extensions/commit/2112c03726ae401d95cfaace496005cc839b7007) Thanks [@billfienberg](https://github.com/billfienberg)! - Add admin.app.tools.data extension target

## 2025.10.11

### Patch Changes

- [#3669](https://github.com/Shopify/ui-extensions/pull/3669) [`115be91`](https://github.com/Shopify/ui-extensions/commit/115be91001aa754eb19fade5015f702a4f304a42) Thanks [@fatbattk](https://github.com/fatbattk)! - Sync latest tag

## 2025.10.10

### Patch Changes

- [#3665](https://github.com/Shopify/ui-extensions/pull/3665) [`34010b8`](https://github.com/Shopify/ui-extensions/commit/34010b8cf3a2dff7cf5fd86e3e0828af67efa529) Thanks [@vctrchu](https://github.com/vctrchu)! - Fix npm latest tag for 2025-10

## 2025.10.9

### Patch Changes

- [#3600](https://github.com/Shopify/ui-extensions/pull/3600) [`57ba7dc`](https://github.com/Shopify/ui-extensions/commit/57ba7dc2e3f97fb64bf1e04d228c62c8248c2671) Thanks [@BrittaEvansFenton](https://github.com/BrittaEvansFenton)! - Adds alt prop to POS Image

- [#3632](https://github.com/Shopify/ui-extensions/pull/3632) [`3f04401`](https://github.com/Shopify/ui-extensions/commit/3f04401f7dfbd91c6e5d31a97922fb043eba5bc2) Thanks [@vctrchu](https://github.com/vctrchu)! - Remove CameraScanner dev doc examples from Standard API

- [#3586](https://github.com/Shopify/ui-extensions/pull/3586) [`f9ab867`](https://github.com/Shopify/ui-extensions/commit/f9ab867be2e7f2865098824bfd8f64a3c22bfa6f) Thanks [@chadcromwell](https://github.com/chadcromwell)! - Add optional tipAmount field to POS transaction data types

## 2025.10.8

### Patch Changes

- [#3575](https://github.com/Shopify/ui-extensions/pull/3575) [`f27f6da`](https://github.com/Shopify/ui-extensions/commit/f27f6da4b22fc5e9cb282ca62c586f5e3b96dde7) Thanks [@alexgraffeocohen](https://github.com/alexgraffeocohen)! - Exports LineItemComponent from point-of-sale API so POS can import the type

- [#3555](https://github.com/Shopify/ui-extensions/pull/3555) [`3296915`](https://github.com/Shopify/ui-extensions/commit/32969157fe427b384c95e27e762c07f8dd4b0440) Thanks [@vctrchu](https://github.com/vctrchu)! - Expose Il8n type to POS UI extensions

## 2025.10.7

### Patch Changes

- [#3537](https://github.com/Shopify/ui-extensions/pull/3537) [`9c741e3`](https://github.com/Shopify/ui-extensions/commit/9c741e351ae26ebba94e0c83e4625f6f55041575) Thanks [@alexgraffeocohen](https://github.com/alexgraffeocohen)! - Adds components to point of sale cart LineItem interface to represent product bundle items.

## 2025.10.6

### Patch Changes

- [#3527](https://github.com/Shopify/ui-extensions/pull/3527) [`28027d5`](https://github.com/Shopify/ui-extensions/commit/28027d5537a893e7e3d2e0b224048b4499f34322) Thanks [@oliverigor](https://github.com/oliverigor)! - - Adding toggle state to Announcement callback events docs
  - Adding correct Map callback events docs
  - Adding setup updated setup instructions for checkout extensions

## 2025.10.5

### Patch Changes

- [#3530](https://github.com/Shopify/ui-extensions/pull/3530) [`788b877`](https://github.com/Shopify/ui-extensions/commit/788b8778d215b38282db084736722b6f6e8d8b21) Thanks [@andy-chhuon](https://github.com/andy-chhuon)! - Add Box to BlockExtensionComponents

## 2025.10.4

### Patch Changes

- [#3522](https://github.com/Shopify/ui-extensions/pull/3522) [`6b16f5e`](https://github.com/Shopify/ui-extensions/commit/6b16f5e8f72ca928f19e202b48165ca91b10de48) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Fix missing children property for TextField

- [#3522](https://github.com/Shopify/ui-extensions/pull/3522) [`6b16f5e`](https://github.com/Shopify/ui-extensions/commit/6b16f5e8f72ca928f19e202b48165ca91b10de48) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Add DropZone component to admin ui-extensions

## 2025.10.3

### Patch Changes

- [#3455](https://github.com/Shopify/ui-extensions/pull/3455) [`29154ad`](https://github.com/Shopify/ui-extensions/commit/29154adef848f0d553e461a63a60de6f3f00f431) Thanks [@vividviolet](https://github.com/vividviolet)! - Add missing Switch and SearchField in Admin

## 2025.10.2

### Patch Changes

- [#3428](https://github.com/Shopify/ui-extensions/pull/3428) [`ad60882`](https://github.com/Shopify/ui-extensions/commit/ad608828050ad677aec27bf05f2c0ef6322027d1) Thanks [@lrsterrett](https://github.com/lrsterrett)! - update readme to reflect 2025-10 related api changes

## 2025.10.1

### Patch Changes

- [#3424](https://github.com/Shopify/ui-extensions/pull/3424) [`be36f3b`](https://github.com/Shopify/ui-extensions/commit/be36f3b93901062ecf0e2566ac51682ee1a08152) Thanks [@lrsterrett](https://github.com/lrsterrett)! - promote 2025-10 to latest

## 2025.10.0

### Patch Changes

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - add signal-like value property to checkout api

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add customer account components to subcategories

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add preact entry to ui-extensions

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Fix typing for polaris web components to include properties and exclude slots in POS UI Extensions

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Move analytics api from osp api to standard api in customer account ui extension.

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update POS Cart API selling plan method to support more fields

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add Grid Item component for Admin

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Remove global declaration from target d.ts as this was causing conflicting types

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update ButtonGroup documentation and fix DateField Properties title

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Added optional `discountAllocations` field to Cart Line Item API so that POS extensions can see the precise proportion of a discount applied to a particular line item. Only the `allocatedAmount` field is included for this purpose, matching the Storefront API structure. See https://shopify.dev/docs/api/storefront/latest/objects/DiscountAllocation.

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Import component types instead of inlining them to reduce file size

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Pin Pad API updates

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Make preact and @preact/signals optional peer dependencies

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add Avatar to Admin UI Extensions

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update signal-like type in customer account to have deprecated fields

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Defaulting to string type for enabled features passed to the templates

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Fix broken image links for Polaris Web Components

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Migrate customer account target examples to Preact

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Fix component.d.ts files not properly deduping non-unique references.

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update admin components to use ComponentChildren instead of ComponentChild type

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Updated the navigation function in Navigation API to allow for navigation to POS native screen and added a canNavigate function to allow partners to check if they can navigate to the specified POS native screen

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Remove hook docs completely from customer account

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add support for Function Settings component for Admin

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add ButtonGroup component to customer account

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Export selling plan related types

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Fix regression where children property was removed

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Aligned POS navigation api

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add Menu component to customer account

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Export visitor result type on customer account ui extension

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add ButtonGroup to Admin UI Extensions

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Patch preact signal

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Adds pos.receipt-header.block.render extension target

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update signal-like type for customer account

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update customer account examples to use signals

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add DateField to Admin UI Extensions

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - [Admin] Add QueryContainer component

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add Thumbnail to Admin UI Extensions

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - test

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add error message to pin rejection result on PinPad API

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update component images in customer account

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add Picker

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Delete unused examples in customer account

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update amdmin ui-extensions

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Fix broken image in customer account Avatar docs

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Missing component types for targets

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add key, ref for customer account components

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Updated comments for documentation and adjusted the return value of the previous navigate function

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add checkout components:

  - Badge
  - Clickable
  - Details
  - Divider
  - Grid
  - GridItem
  - PasswordField
  - Popover
  - ProductThumbnail
  - ScrollBox
  - Sheet
  - SkeletonParagraph
  - Summary
  - Switch
  - UrlField

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add ButtonGroup to customer account component mapping

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Export PinValidationResult type for PinPad API

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - The function canNavigate of Navigation API will return a Promise instead of a boolean since it throws an error if the user is on a version of POS extensions that is lower than 2025-10.

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update components types for Admin surface

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add checkout components:

  - Checkbox
  - Modal
  - ProductThumbnail
  - EmailField
  - PhoneField
  - TextArea
  - Map
  - MapMarker

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Remove deprecated CustomerSegmentTemplate component

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update customer account ui extensions component props to include id

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update Navigation Api docs and typings for customer accounts

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update Admin UI Extensions component definitions to 1.3.0

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add Section component with `primary-action` and `secondary-actions` slots to customer account

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Adding ui-extensions components to the checkout surface.

  - ConsentCheckbox
  - ConsentPhoneField
  - NumberField

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Support remote-dom for Admin surface

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Remove children props from component JSX props interface

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update Customer Account Avatar size prop to SizeKeyword

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - 2025-10 RC 27

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - AdminBlock remove summary prop and add collapsedSummary

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - POS navigate API updated to return `Promise<void>` as implemented

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - fix QueryContainer types not registering for 3P extensions code

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Remove unused JavaScript examples from customer account

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update customer account component docs

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - [Colorfield] update description for documentation

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update component docs in customer account

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Simplify selling plans APIs for POS

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Migrate consent sheet example in customer account

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add discount function settings api

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - - Added updated docs for checkout components and targets.

  - Added updated docs for customer account components and targets.
  - Added new components to checkout:
    - Badge
    - Clickable
    - Details
    - Divider
    - Grid
    - GridItem
    - MoneyField
    - Popover
    - PressButton
    - Sheet
    - SkeletonParagraph
    - Summary
    - Switch
    - Tooltip

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add documentation for Admin Modal

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - test release

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - expose intents.invoke API to UI Extensions

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add selling plan functionality to Cart API and line item types

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add target definitions to point of sale

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Fix shopify global declaration

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add signal-like value property to customer account api

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Remove ui typings from 2025-10

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Sync picker and resourcePicker docs with app-bridge

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Updated the comment in Navigation API to align with the documentation of the uri

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - - Adding ProductThumbnail

  - Add Events type changes
  - Improve documentation examples

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - fix `useNavigationCurrentEntry` hook returning stale value

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - - Added customer account migration guide with comparison tables mapping legacy components to new Polaris web components

  - Removed extended form field event properties from the documentation to simplify component APIs
  - Added documentation for Section component with visual examples
  - Improved parent-child component relationship documentation for admin components
  - Added script to exit pre-release mode
  - Updated component descriptions and documentation for Admin UI components
  - Fixed Preact native types for customer account
  - Moved example country selector to top of documentation
  - Fixed form components events and HTML examples
  - Added support for Polaris web components in checkout extensions
  - Added scaffolded with Preact section for checkout extensions
  - Updated documentation for various components with copy edits and improved examples

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - [customer account] add announcement targets

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Modified transaction data interface fields to include returnId and refundId to Return and Exchange TransactionData.

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Update mapping of legacy components to Polaris web components for customer accounts

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add parent/parentRelationship property to CartLines for Checkout.

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add toast api on customer accounts standard api

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - - Added updated docs for checkout components and targets.

  - Added updated docs for customer account components and targets.
  - Added new components to checkout:
    - Announcement
    - Chip
    - Choice
    - ChoiceList
    - ClickableChip
    - DateField
    - DatePicker
    - Option
    - PasswordField
    - QueryContainer
    - ScrollBox
    - Select
    - URLField

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Migrate some customer account examples to Preact

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add new remote-dom components for Admin

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - segmentation-templates moving to data-extension target

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Expose additional selling plan-related fields in POS UI extensions models

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add autoSubmit to POS PinPad API and improve PinPadActionType

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Toast api returns `Promise<ToastResult>`

- [#3421](https://github.com/Shopify/ui-extensions/pull/3421) [`ff3d2bb`](https://github.com/Shopify/ui-extensions/commit/ff3d2bb1857e0b05c8314e2daf0c818cb7443f59) Thanks [@oliverigor](https://github.com/oliverigor)! - Add ButtonGroup, Chip and ClickableChip to StandardComponents.ts

## 2025.10.0-rc.48

### Patch Changes

- [#3395](https://github.com/Shopify/ui-extensions/pull/3395) [`bd2161169355a051c21d8f5dc49f59423b9e4717`](https://github.com/Shopify/ui-extensions/commit/bd2161169355a051c21d8f5dc49f59423b9e4717) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Update amdmin ui-extensions

## 2025.10.0-rc.47

### Minor Changes

- [#3402](https://github.com/Shopify/ui-extensions/pull/3402) [`b587dd0af751f69d2d2d15a93f63a8dfb96df7c8`](https://github.com/Shopify/ui-extensions/commit/b587dd0af751f69d2d2d15a93f63a8dfb96df7c8) Thanks [@oliverigor](https://github.com/oliverigor)! - Adding ui-extensions components to the checkout surface.

  - ConsentCheckbox
  - ConsentPhoneField
  - NumberField

## 2025.10.0-rc.46

### Patch Changes

- [#3400](https://github.com/Shopify/ui-extensions/pull/3400) [`c072113219fa9c28fe62b1adaff0375f952e55b5`](https://github.com/Shopify/ui-extensions/commit/c072113219fa9c28fe62b1adaff0375f952e55b5) Thanks [@vividviolet](https://github.com/vividviolet)! - Make preact and @preact/signals optional peer dependencies

## 2025.10.0-rc.45

### Patch Changes

- [#3376](https://github.com/Shopify/ui-extensions/pull/3376) [`57978c63a44b275123b9b1b9db60a67d61652d24`](https://github.com/Shopify/ui-extensions/commit/57978c63a44b275123b9b1b9db60a67d61652d24) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - [Colorfield] update description for documentation

- [#3367](https://github.com/Shopify/ui-extensions/pull/3367) [`b90f42b676659a6e02e47547d53d7881365c81d3`](https://github.com/Shopify/ui-extensions/commit/b90f42b676659a6e02e47547d53d7881365c81d3) Thanks [@charlesdobson](https://github.com/charlesdobson)! - expose intents.invoke API to UI Extensions

## 2025.10.0-rc.44

### Patch Changes

- [#3379](https://github.com/Shopify/ui-extensions/pull/3379) [`06cf1e9ded0b79be22a1cbf32e4dc3eb694bd113`](https://github.com/Shopify/ui-extensions/commit/06cf1e9ded0b79be22a1cbf32e4dc3eb694bd113) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Fix regression where children property was removed

## 2025.10.0-rc.43

### Minor Changes

- [#3370](https://github.com/Shopify/ui-extensions/pull/3370) [`53b23789f852799a92cbd59c872cd957164ad502`](https://github.com/Shopify/ui-extensions/commit/53b23789f852799a92cbd59c872cd957164ad502) Thanks [@oliverigor](https://github.com/oliverigor)! - - Added updated docs for checkout components and targets.
  - Added updated docs for customer account components and targets.
  - Added new components to checkout:
    - Announcement
    - Chip
    - Choice
    - ChoiceList
    - ClickableChip
    - DateField
    - DatePicker
    - Option
    - PasswordField
    - QueryContainer
    - ScrollBox
    - Select
    - URLField

### Patch Changes

- [#3352](https://github.com/Shopify/ui-extensions/pull/3352) [`b72c19dce6ee368d0cae44c2141e55c32f14dd43`](https://github.com/Shopify/ui-extensions/commit/b72c19dce6ee368d0cae44c2141e55c32f14dd43) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Update admin components to use ComponentChildren instead of ComponentChild type

- [#3017](https://github.com/Shopify/ui-extensions/pull/3017) [`888a71f4ec2022df7c2f3e6f947fff51cb2708ef`](https://github.com/Shopify/ui-extensions/commit/888a71f4ec2022df7c2f3e6f947fff51cb2708ef) Thanks [@vividviolet](https://github.com/vividviolet)! - Add support for Function Settings component for Admin

- [#3357](https://github.com/Shopify/ui-extensions/pull/3357) [`0518d9b03076b772d5f5258f0e7b04be81500328`](https://github.com/Shopify/ui-extensions/commit/0518d9b03076b772d5f5258f0e7b04be81500328) Thanks [@lsit](https://github.com/lsit)! - Update component images in customer account

- [#3364](https://github.com/Shopify/ui-extensions/pull/3364) [`c5f856df45b865767337535dc4cef8b3551472c4`](https://github.com/Shopify/ui-extensions/commit/c5f856df45b865767337535dc4cef8b3551472c4) Thanks [@katriciab](https://github.com/katriciab)! - POS navigate API updated to return Promise<void> as implemented

## 2025.10.0-rc.42

### Patch Changes

- [#3350](https://github.com/Shopify/ui-extensions/pull/3350) [`b91311431a1c8f3a6a2e9bfb8303a242260b4d3f`](https://github.com/Shopify/ui-extensions/commit/b91311431a1c8f3a6a2e9bfb8303a242260b4d3f) Thanks [@vividviolet](https://github.com/vividviolet)! - Remove deprecated CustomerSegmentTemplate component

- [#3337](https://github.com/Shopify/ui-extensions/pull/3337) [`771d02270ed730f76c9f4431e9e97b822483149c`](https://github.com/Shopify/ui-extensions/commit/771d02270ed730f76c9f4431e9e97b822483149c) Thanks [@lsit](https://github.com/lsit)! - Update component docs in customer account

- [#3325](https://github.com/Shopify/ui-extensions/pull/3325) [`15de7635887e682b8deb36dbe828261feef3daa2`](https://github.com/Shopify/ui-extensions/commit/15de7635887e682b8deb36dbe828261feef3daa2) Thanks [@aeperea](https://github.com/aeperea)! - segmentation-templates moving to data-extension target

## 2025.10.0-rc.41

### Minor Changes

- [#3327](https://github.com/Shopify/ui-extensions/pull/3327) [`f04adfff3bb4a90328441e186b733b1be23a74d8`](https://github.com/Shopify/ui-extensions/commit/f04adfff3bb4a90328441e186b733b1be23a74d8) Thanks [@oliverigor](https://github.com/oliverigor)! - - Added updated docs for checkout components and targets.
  - Added updated docs for customer account components and targets.
  - Added new components to checkout:
    - Badge
    - Clickable
    - Details
    - Divider
    - Grid
    - GridItem
    - MoneyField
    - Popover
    - PressButton
    - Sheet
    - SkeletonParagraph
    - Summary
    - Switch
    - Tooltip

## 2025.10.0-rc.40

### Minor Changes

- [#3326](https://github.com/Shopify/ui-extensions/pull/3326) [`8057ab8093cf9fa63ab0ec45ca6685a7b198307b`](https://github.com/Shopify/ui-extensions/commit/8057ab8093cf9fa63ab0ec45ca6685a7b198307b) Thanks [@js-goupil](https://github.com/js-goupil)! - Aligned POS navigation api

### Patch Changes

- [#3329](https://github.com/Shopify/ui-extensions/pull/3329) [`5910c9ddc0a47db947fd009e4faace4815b52c4d`](https://github.com/Shopify/ui-extensions/commit/5910c9ddc0a47db947fd009e4faace4815b52c4d) Thanks [@jas7457](https://github.com/jas7457)! - Fix broken image links for Polaris Web Components

## 2025.10.0-rc.39

### Patch Changes

- [#3321](https://github.com/Shopify/ui-extensions/pull/3321) [`9ebdb3f971c103255b1686f2a19b34d2f8704737`](https://github.com/Shopify/ui-extensions/commit/9ebdb3f971c103255b1686f2a19b34d2f8704737) Thanks [@mayasarena](https://github.com/mayasarena)! - Update ButtonGroup documentation and fix DateField Properties title

## 2025.10.0-rc.38

### Patch Changes

- [#3314](https://github.com/Shopify/ui-extensions/pull/3314) [`8d5cbd8e9e053198a41d81130517e17049ee0a39`](https://github.com/Shopify/ui-extensions/commit/8d5cbd8e9e053198a41d81130517e17049ee0a39) Thanks [@lsit](https://github.com/lsit)! - Update signal-like type in customer account to have deprecated fields

- [#3281](https://github.com/Shopify/ui-extensions/pull/3281) [`f5aceb0113f760dc6aab167afd61083a4c6e2ce7`](https://github.com/Shopify/ui-extensions/commit/f5aceb0113f760dc6aab167afd61083a4c6e2ce7) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Add documentation for Admin Modal

## 2025.10.0-rc.37

### Minor Changes

- [#3298](https://github.com/Shopify/ui-extensions/pull/3298) [`80fba902890f333d80d2acd0800057bc4e66b493`](https://github.com/Shopify/ui-extensions/commit/80fba902890f333d80d2acd0800057bc4e66b493) Thanks [@Bruno125](https://github.com/Bruno125)! - Simplify selling plans APIs for POS

## 2025.10.0-rc.36

### Minor Changes

- [#3283](https://github.com/Shopify/ui-extensions/pull/3283) [`cf603b0d7323d9926d5502f2906950272f13f6d6`](https://github.com/Shopify/ui-extensions/commit/cf603b0d7323d9926d5502f2906950272f13f6d6) Thanks [@alexgraffeocohen](https://github.com/alexgraffeocohen)! - Added optional `discountAllocations` field to Cart Line Item API so that POS extensions can see the precise proportion of a discount applied to a particular line item. Only the `allocatedAmount` field is included for this purpose, matching the Storefront API structure. See https://shopify.dev/docs/api/storefront/latest/objects/DiscountAllocation.

### Patch Changes

- [#3292](https://github.com/Shopify/ui-extensions/pull/3292) [`eac3789d14ddecbeec96c9b26e67350357f4fd2a`](https://github.com/Shopify/ui-extensions/commit/eac3789d14ddecbeec96c9b26e67350357f4fd2a) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Remove children props from component JSX props interface

## 2025.10.0-rc.35

### Patch Changes

- [#3285](https://github.com/Shopify/ui-extensions/pull/3285) [`ceaa49a46f15b84359260260090c69f3e28eb769`](https://github.com/Shopify/ui-extensions/commit/ceaa49a46f15b84359260260090c69f3e28eb769) Thanks [@steved-shopify](https://github.com/steved-shopify)! - Export PinValidationResult type for PinPad API

## 2025.10.0-rc.34

### Patch Changes

- [#3278](https://github.com/Shopify/ui-extensions/pull/3278) [`d344616ae631edafa11bed72b10bfe5a12ab7a96`](https://github.com/Shopify/ui-extensions/commit/d344616ae631edafa11bed72b10bfe5a12ab7a96) Thanks [@steved-shopify](https://github.com/steved-shopify)! - Add error message to pin rejection result on PinPad API

## 2025.10.0-rc.33

### Patch Changes

- [#3275](https://github.com/Shopify/ui-extensions/pull/3275) [`92a77497c5d4290ef53579c258779dc7e1173e93`](https://github.com/Shopify/ui-extensions/commit/92a77497c5d4290ef53579c258779dc7e1173e93) Thanks [@steved-shopify](https://github.com/steved-shopify)! - Add autoSubmit to POS PinPad API and improve PinPadActionType

## 2025.10.0-rc.32

### Minor Changes

- [#3259](https://github.com/Shopify/ui-extensions/pull/3259) [`1617a265c168606a1b5fb93426184d959856a331`](https://github.com/Shopify/ui-extensions/commit/1617a265c168606a1b5fb93426184d959856a331) Thanks [@laurkim](https://github.com/laurkim)! - Add DateField to Admin UI Extensions

## 2025.10.0-rc.31

### Patch Changes

- [#3272](https://github.com/Shopify/ui-extensions/pull/3272) [`cb101cb96d3e8e52a028f709e46717cb1100373b`](https://github.com/Shopify/ui-extensions/commit/cb101cb96d3e8e52a028f709e46717cb1100373b) Thanks [@oluwatimio](https://github.com/oluwatimio)! - Remove ui typings from 2025-10

## 2025.10.0-rc.30

### Patch Changes

- [#3270](https://github.com/Shopify/ui-extensions/pull/3270) [`33d37cd81e902bce4b80d42eecb77988ba44fedd`](https://github.com/Shopify/ui-extensions/commit/33d37cd81e902bce4b80d42eecb77988ba44fedd) Thanks [@steved-shopify](https://github.com/steved-shopify)! - Pin Pad API updates

- [#3269](https://github.com/Shopify/ui-extensions/pull/3269) [`8dc83df31b93b2f215868c8a0632d95d412cdc76`](https://github.com/Shopify/ui-extensions/commit/8dc83df31b93b2f215868c8a0632d95d412cdc76) Thanks [@Bruno125](https://github.com/Bruno125)! - Export selling plan related types

## 2025.10.0-rc.29

### Minor Changes

- [#3261](https://github.com/Shopify/ui-extensions/pull/3261) [`39bbc17234bfa59e4aca424f0e5c60ed8e8ef835`](https://github.com/Shopify/ui-extensions/commit/39bbc17234bfa59e4aca424f0e5c60ed8e8ef835) Thanks [@Bruno125](https://github.com/Bruno125)! - Update POS Cart API selling plan method to support more fields

### Patch Changes

- [#3262](https://github.com/Shopify/ui-extensions/pull/3262) [`8293a12cc57ca9c7c0068ffd54557d9219d50812`](https://github.com/Shopify/ui-extensions/commit/8293a12cc57ca9c7c0068ffd54557d9219d50812) Thanks [@lsit](https://github.com/lsit)! - Migrate consent sheet example in customer account

## 2025.10.0-rc.28

### Patch Changes

- [#3252](https://github.com/Shopify/ui-extensions/pull/3252) [`fd917567f9be40a671701a66326d37d3aa5dbaa2`](https://github.com/Shopify/ui-extensions/commit/fd917567f9be40a671701a66326d37d3aa5dbaa2) Thanks [@lsit](https://github.com/lsit)! - Migrate customer account target examples to Preact

- [#3249](https://github.com/Shopify/ui-extensions/pull/3249) [`c9a7f39a38f86ad9cbaa714b1a4177a168380bee`](https://github.com/Shopify/ui-extensions/commit/c9a7f39a38f86ad9cbaa714b1a4177a168380bee) Thanks [@lsit](https://github.com/lsit)! - Delete unused examples in customer account

- [#3254](https://github.com/Shopify/ui-extensions/pull/3254) [`3f712879b91e5270ce06e385be0c18c8113032b0`](https://github.com/Shopify/ui-extensions/commit/3f712879b91e5270ce06e385be0c18c8113032b0) Thanks [@brianshen1990](https://github.com/brianshen1990)! - [customer account] add announcement targets

## 2025.10.0-rc.27

### Minor Changes

- [#3203](https://github.com/Shopify/ui-extensions/pull/3203) [`5d44360f94b8c5f5fc32590ec3cd8833af00a3dc`](https://github.com/Shopify/ui-extensions/commit/5d44360f94b8c5f5fc32590ec3cd8833af00a3dc) Thanks [@lsit](https://github.com/lsit)! - Add signal-like value property to customer account api

### Patch Changes

- [#3195](https://github.com/Shopify/ui-extensions/pull/3195) [`95c0542d98ea8674ff561e1915f4f9a4d0a3b725`](https://github.com/Shopify/ui-extensions/commit/95c0542d98ea8674ff561e1915f4f9a4d0a3b725) Thanks [@lsit](https://github.com/lsit)! - Add customer account components to subcategories

- [#3251](https://github.com/Shopify/ui-extensions/pull/3251) [`80a5305ece11f404d0a8bdbb47c7bc31dbf97b5a`](https://github.com/Shopify/ui-extensions/commit/80a5305ece11f404d0a8bdbb47c7bc31dbf97b5a) Thanks [@awoodall](https://github.com/awoodall)! - Fix typing for polaris web components to include properties and exclude slots in POS UI Extensions

- [#3179](https://github.com/Shopify/ui-extensions/pull/3179) [`5d3f25817d17c93b676864e0dc0f3136b826e191`](https://github.com/Shopify/ui-extensions/commit/5d3f25817d17c93b676864e0dc0f3136b826e191) Thanks [@vividviolet](https://github.com/vividviolet)! - Import component types instead of inlining them to reduce file size

- [#3215](https://github.com/Shopify/ui-extensions/pull/3215) [`f9b2086477ec205c9b0cdb00f8d0f19c0ecab57c`](https://github.com/Shopify/ui-extensions/commit/f9b2086477ec205c9b0cdb00f8d0f19c0ecab57c) Thanks [@lsit](https://github.com/lsit)! - Update signal-like type for customer account

- [#3210](https://github.com/Shopify/ui-extensions/pull/3210) [`5fc245fe684973c779109d507a2bf8bdce9f2c88`](https://github.com/Shopify/ui-extensions/commit/5fc245fe684973c779109d507a2bf8bdce9f2c88) Thanks [@lsit](https://github.com/lsit)! - Update customer account examples to use signals

- [#3196](https://github.com/Shopify/ui-extensions/pull/3196) [`77b062f2166bb1403d793ac373380a4cc7497293`](https://github.com/Shopify/ui-extensions/commit/77b062f2166bb1403d793ac373380a4cc7497293) Thanks [@lsit](https://github.com/lsit)! - Add ButtonGroup to customer account component mapping

- [#3253](https://github.com/Shopify/ui-extensions/pull/3253) [`a9f8e775679a1b5a652e3b766c4466806cab0a88`](https://github.com/Shopify/ui-extensions/commit/a9f8e775679a1b5a652e3b766c4466806cab0a88) Thanks [@steved-shopify](https://github.com/steved-shopify)! - 2025-10 RC 27

- [#3250](https://github.com/Shopify/ui-extensions/pull/3250) [`17090e0678b58898d48cab5e16b57d5614a6bd89`](https://github.com/Shopify/ui-extensions/commit/17090e0678b58898d48cab5e16b57d5614a6bd89) Thanks [@lsit](https://github.com/lsit)! - Migrate some customer account examples to Preact

## 2025.10.0-rc.26

### Patch Changes

- [#3199](https://github.com/Shopify/ui-extensions/pull/3199) [`f945269a47b791edd94e089a6e6596d6391ae4c3`](https://github.com/Shopify/ui-extensions/commit/f945269a47b791edd94e089a6e6596d6391ae4c3) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - Add ButtonGroup, Chip and ClickableChip to StandardComponents.ts

## 2025.10.0-rc.25

### Minor Changes

- [#3164](https://github.com/Shopify/ui-extensions/pull/3164) [`5b31df78919a64b14cf04009d7c3dfb9494c55c1`](https://github.com/Shopify/ui-extensions/commit/5b31df78919a64b14cf04009d7c3dfb9494c55c1) Thanks [@lsit](https://github.com/lsit)! - Add ButtonGroup component to customer account

- [#3156](https://github.com/Shopify/ui-extensions/pull/3156) [`03dd2771e5a6cd5cb10fe7ad7c2be7964527d77a`](https://github.com/Shopify/ui-extensions/commit/03dd2771e5a6cd5cb10fe7ad7c2be7964527d77a) Thanks [@lsit](https://github.com/lsit)! - Add Section component with `primary-action` and `secondary-actions` slots to customer account

### Patch Changes

- [#3198](https://github.com/Shopify/ui-extensions/pull/3198) [`b1666ed134b9aa5257c01900d3882795ed6454da`](https://github.com/Shopify/ui-extensions/commit/b1666ed134b9aa5257c01900d3882795ed6454da) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - Fix component.d.ts files not properly deduping non-unique references.

- [#3186](https://github.com/Shopify/ui-extensions/pull/3186) [`2b7dcaa84677cdf231cb6e6821301fb0da84caf3`](https://github.com/Shopify/ui-extensions/commit/2b7dcaa84677cdf231cb6e6821301fb0da84caf3) Thanks [@lsit](https://github.com/lsit)! - Remove hook docs completely from customer account

- [#3192](https://github.com/Shopify/ui-extensions/pull/3192) [`564f9588bde6963c4534d85c5b25d72f26ff47c5`](https://github.com/Shopify/ui-extensions/commit/564f9588bde6963c4534d85c5b25d72f26ff47c5) Thanks [@lsit](https://github.com/lsit)! - Fix broken image in customer account Avatar docs

- [#3185](https://github.com/Shopify/ui-extensions/pull/3185) [`331bb59ea2813ae0a1a96ec3a34fddcf5442fb42`](https://github.com/Shopify/ui-extensions/commit/331bb59ea2813ae0a1a96ec3a34fddcf5442fb42) Thanks [@lsit](https://github.com/lsit)! - Remove unused JavaScript examples from customer account

## 2025.10.0-rc.24

### Minor Changes

- [#3169](https://github.com/Shopify/ui-extensions/pull/3169) [`2be55775a56666304f932920187f543c43214ce4`](https://github.com/Shopify/ui-extensions/commit/2be55775a56666304f932920187f543c43214ce4) Thanks [@lrsterrett](https://github.com/lrsterrett)! - add signal-like value property to checkout api

- [#3167](https://github.com/Shopify/ui-extensions/pull/3167) [`7db40afb20aa058552f2d29deaab1e7b7070b41e`](https://github.com/Shopify/ui-extensions/commit/7db40afb20aa058552f2d29deaab1e7b7070b41e) Thanks [@lsit](https://github.com/lsit)! - Add Menu component to customer account

- [#3180](https://github.com/Shopify/ui-extensions/pull/3180) [`e239a0cbf53759d3a39eda8a6a04db16cf5ab62c`](https://github.com/Shopify/ui-extensions/commit/e239a0cbf53759d3a39eda8a6a04db16cf5ab62c) Thanks [@mayasarena](https://github.com/mayasarena)! - Add ButtonGroup to Admin UI Extensions

- [#3175](https://github.com/Shopify/ui-extensions/pull/3175) [`4fcbe092da5d70a63daddde7a8208f0e843e96c0`](https://github.com/Shopify/ui-extensions/commit/4fcbe092da5d70a63daddde7a8208f0e843e96c0) Thanks [@oluwatimio](https://github.com/oluwatimio)! - Update Navigation Api docs and typings for customer accounts

- [#3178](https://github.com/Shopify/ui-extensions/pull/3178) [`c2ea40c169984a14a7c01591793f1302190d5897`](https://github.com/Shopify/ui-extensions/commit/c2ea40c169984a14a7c01591793f1302190d5897) Thanks [@alexgraffeocohen](https://github.com/alexgraffeocohen)! - Modified transaction data interface fields to include returnId and refundId to Return and Exchange TransactionData.

### Patch Changes

- [#3176](https://github.com/Shopify/ui-extensions/pull/3176) [`edcbcb816253847ad29bf2585a2b4aef5f1117db`](https://github.com/Shopify/ui-extensions/commit/edcbcb816253847ad29bf2585a2b4aef5f1117db) Thanks [@lsit](https://github.com/lsit)! - Update customer account component docs

- [#3184](https://github.com/Shopify/ui-extensions/pull/3184) [`3d4aee370588c022567c65470d963f86d583b887`](https://github.com/Shopify/ui-extensions/commit/3d4aee370588c022567c65470d963f86d583b887) Thanks [@lsit](https://github.com/lsit)! - Update mapping of legacy components to Polaris web components for customer accounts

## 2025.10.0-rc.23

### Minor Changes

- [#3159](https://github.com/Shopify/ui-extensions/pull/3159) [`1419068b5fada8a93bb26724aee1014c1cb8a415`](https://github.com/Shopify/ui-extensions/commit/1419068b5fada8a93bb26724aee1014c1cb8a415) Thanks [@thunderfern](https://github.com/thunderfern)! - Updated comments for documentation and adjusted the return value of the previous navigate function

### Patch Changes

- [#3155](https://github.com/Shopify/ui-extensions/pull/3155) [`4556253253d42d76accd96f533bb8c54ca4f2f44`](https://github.com/Shopify/ui-extensions/commit/4556253253d42d76accd96f533bb8c54ca4f2f44) Thanks [@oluwatimio](https://github.com/oluwatimio)! - Update Customer Account Avatar size prop to SizeKeyword

## 2025.10.0-rc.22

### Patch Changes

- [#3141](https://github.com/Shopify/ui-extensions/pull/3141) [`45b2718a936e7bf99beb14f2f04ffcbfd16d6b47`](https://github.com/Shopify/ui-extensions/commit/45b2718a936e7bf99beb14f2f04ffcbfd16d6b47) Thanks [@Bruno125](https://github.com/Bruno125)! - Expose additional selling plan-related fields in POS UI extensions models

## 2025.10.0-rc.21

### Patch Changes

- [#3149](https://github.com/Shopify/ui-extensions/pull/3149) [`551bf034e32a02932e4148508e50027aed77571a`](https://github.com/Shopify/ui-extensions/commit/551bf034e32a02932e4148508e50027aed77571a) Thanks [@thunderfern](https://github.com/thunderfern)! - Updated the comment in Navigation API to align with the documentation of the uri

## 2025.10.0-rc.20

### Minor Changes

- [#3146](https://github.com/Shopify/ui-extensions/pull/3146) [`3a28bd78c433bb1cc2ab85032d994ad4c98f4541`](https://github.com/Shopify/ui-extensions/commit/3a28bd78c433bb1cc2ab85032d994ad4c98f4541) Thanks [@thunderfern](https://github.com/thunderfern)! - The function canNavigate of Navigation API will return a Promise instead of a boolean since it throws an error if the user is on a version of POS extensions that is lower than 2025-10.

## 2025.10.0-rc.19

### Minor Changes

- [#3134](https://github.com/Shopify/ui-extensions/pull/3134) [`7a98f44d8d178dd4f91ac5c998c8d0df1604dd6e`](https://github.com/Shopify/ui-extensions/commit/7a98f44d8d178dd4f91ac5c998c8d0df1604dd6e) Thanks [@thunderfern](https://github.com/thunderfern)! - Updated the navigation function in Navigation API to allow for navigation to POS native screen and added a canNavigate function to allow partners to check if they can navigate to the specified POS native screen

## 2025.10.0-rc.18

### Minor Changes

- [#3126](https://github.com/Shopify/ui-extensions/pull/3126) [`1b0a1de43fd52ccfaeb254b1f53195f96ef3059c`](https://github.com/Shopify/ui-extensions/commit/1b0a1de43fd52ccfaeb254b1f53195f96ef3059c) Thanks [@oliverigor](https://github.com/oliverigor)! - Add checkout components:

  - Badge
  - Clickable
  - Details
  - Divider
  - Grid
  - GridItem
  - PasswordField
  - Popover
  - ProductThumbnail
  - ScrollBox
  - Sheet
  - SkeletonParagraph
  - Summary
  - Switch
  - UrlField

## 2025.10.0-rc.17

### Minor Changes

- [#3112](https://github.com/Shopify/ui-extensions/pull/3112) [`731844214f517929b1eed20c3320b0799c675ddd`](https://github.com/Shopify/ui-extensions/commit/731844214f517929b1eed20c3320b0799c675ddd) Thanks [@Bruno125](https://github.com/Bruno125)! - Add selling plan functionality to Cart API and line item types

## 2025.10.0-rc.16

### Patch Changes

- [#3108](https://github.com/Shopify/ui-extensions/pull/3108) [`0acece7bebe7e27beec0187da0c8281cd6d5966e`](https://github.com/Shopify/ui-extensions/commit/0acece7bebe7e27beec0187da0c8281cd6d5966e) Thanks [@oluwatimio](https://github.com/oluwatimio)! - Toast api returns Promise<ToastResult>

## 2025.10.0-rc.15

### Patch Changes

- [#3077](https://github.com/Shopify/ui-extensions/pull/3077) [`505d5fb18170e7903f00a608039bbd67cf70715a`](https://github.com/Shopify/ui-extensions/commit/505d5fb18170e7903f00a608039bbd67cf70715a) Thanks [@oluwatimio](https://github.com/oluwatimio)! - Add toast api on customer accounts standard api

## 2025.10.0-rc.14

### Patch Changes

- [#3083](https://github.com/Shopify/ui-extensions/pull/3083) [`64517288aa63bf224e5781c8f8c01139f4578eed`](https://github.com/Shopify/ui-extensions/commit/64517288aa63bf224e5781c8f8c01139f4578eed) Thanks [@lihaokx](https://github.com/lihaokx)! - Export visitor result type on customer account ui extension

## 2025.10.0-rc.13

### Minor Changes

- [#3072](https://github.com/Shopify/ui-extensions/pull/3072) [`c364a95e662e95bcad28701e0842d90fd6fb8b0d`](https://github.com/Shopify/ui-extensions/commit/c364a95e662e95bcad28701e0842d90fd6fb8b0d) Thanks [@patrickDouglas](https://github.com/patrickDouglas)! - Add parent/parentRelationship property to CartLines for Checkout.

## 2025.10.0-rc.12

### Patch Changes

- [#3073](https://github.com/Shopify/ui-extensions/pull/3073) [`49a2b92b9724734fc36e27912404bbe86efd71c5`](https://github.com/Shopify/ui-extensions/commit/49a2b92b9724734fc36e27912404bbe86efd71c5) Thanks [@lihaokx](https://github.com/lihaokx)! - Move analytics api from osp api to standard api in customer account ui extension.

## 2025.10.0-rc.11

### Minor Changes

- [#3038](https://github.com/Shopify/ui-extensions/pull/3038) [`3d22570be57efc416c3b677ac749629c6aff0b95`](https://github.com/Shopify/ui-extensions/commit/3d22570be57efc416c3b677ac749629c6aff0b95) Thanks [@oliverigor](https://github.com/oliverigor)! - - Adding ProductThumbnail
  - Add Events type changes
  - Improve documentation examples

## 2025.10.0-rc.10

### Minor Changes

- [#3053](https://github.com/Shopify/ui-extensions/pull/3053) [`a5166d4b875fb22ed44124bb31f061081476baeb`](https://github.com/Shopify/ui-extensions/commit/a5166d4b875fb22ed44124bb31f061081476baeb) Thanks [@alexgraffeocohen](https://github.com/alexgraffeocohen)! - Adds pos.receipt-header.block.render extension target

### Patch Changes

- [#3054](https://github.com/Shopify/ui-extensions/pull/3054) [`9ee0c98d0ffdfed65b949b0276893a255944b7d7`](https://github.com/Shopify/ui-extensions/commit/9ee0c98d0ffdfed65b949b0276893a255944b7d7) Thanks [@oluwatimio](https://github.com/oluwatimio)! - Update customer account ui extensions component props to include id

- [#3041](https://github.com/Shopify/ui-extensions/pull/3041) [`ef6d1de8c3008c5677c90d7e6eddf35658bd8f06`](https://github.com/Shopify/ui-extensions/commit/ef6d1de8c3008c5677c90d7e6eddf35658bd8f06) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Update Admin UI Extensions component definitions to 1.3.0

- [#3069](https://github.com/Shopify/ui-extensions/pull/3069) [`9a7aebda7a460fc2db50af976ed96595ce72c46c`](https://github.com/Shopify/ui-extensions/commit/9a7aebda7a460fc2db50af976ed96595ce72c46c) Thanks [@NathanJolly](https://github.com/NathanJolly)! - Add target definitions to point of sale

## 2025.10.0-rc.9

### Patch Changes

- [#3031](https://github.com/Shopify/ui-extensions/pull/3031) [`9a6d9031d577e67b12293a655283869cb3606d0a`](https://github.com/Shopify/ui-extensions/commit/9a6d9031d577e67b12293a655283869cb3606d0a) Thanks [@sam-b-rose](https://github.com/sam-b-rose)! - Add Avatar to Admin UI Extensions

## 2025.10.0-rc.8

### Patch Changes

- [#3025](https://github.com/Shopify/ui-extensions/pull/3025) [`313fbfa44fd659691185181ac6fba7be3f9bd48f`](https://github.com/Shopify/ui-extensions/commit/313fbfa44fd659691185181ac6fba7be3f9bd48f) Thanks [@billfienberg](https://github.com/billfienberg)! - Add Thumbnail to Admin UI Extensions

## 2025.10.0-rc.7

### Minor Changes

- [#2954](https://github.com/Shopify/ui-extensions/pull/2954) [`d01259b7b68ac5905ff745906f625eea0ed5dbd8`](https://github.com/Shopify/ui-extensions/commit/d01259b7b68ac5905ff745906f625eea0ed5dbd8) Thanks [@oliverigor](https://github.com/oliverigor)! - Add checkout components:

  - Checkbox
  - Modal
  - ProductThumbnail
  - EmailField
  - PhoneField
  - TextArea
  - Map
  - MapMarker

## 2025.10.0-rc.6

### Patch Changes

- [#2983](https://github.com/Shopify/ui-extensions/pull/2983) [`5f5091fac8d031524cef7f1a264842539781e0db`](https://github.com/Shopify/ui-extensions/commit/5f5091fac8d031524cef7f1a264842539781e0db) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - fix QueryContainer types not registering for 3P extensions code

## 2025.10.0-rc.5

### Minor Changes

- [#2979](https://github.com/Shopify/ui-extensions/pull/2979) [`b700870d1149e3be518aea79b0cc3b6a405224ab`](https://github.com/Shopify/ui-extensions/commit/b700870d1149e3be518aea79b0cc3b6a405224ab) Thanks [@gwyneplaine](https://github.com/gwyneplaine)! - [Admin] Add QueryContainer component

### Patch Changes

- [#2970](https://github.com/Shopify/ui-extensions/pull/2970) [`e56d363e59cacfcd027343e8d58bfecd8838cc63`](https://github.com/Shopify/ui-extensions/commit/e56d363e59cacfcd027343e8d58bfecd8838cc63) Thanks [@SHAZAM28](https://github.com/SHAZAM28)! - Add key, ref for customer account components

## 2025.10.0-rc.4

### Patch Changes

- [#2935](https://github.com/Shopify/ui-extensions/pull/2935) [`f97f97c7df5cf9520c5252e825f606d8ce56a1e1`](https://github.com/Shopify/ui-extensions/commit/f97f97c7df5cf9520c5252e825f606d8ce56a1e1) Thanks [@oliverigor](https://github.com/oliverigor)! - Missing component types for targets

## 2025.10.0-rc.3

### Patch Changes

- [#2927](https://github.com/Shopify/ui-extensions/pull/2927) [`edfa4895c29d46a8e7648e17771bca75ec74182d`](https://github.com/Shopify/ui-extensions/commit/edfa4895c29d46a8e7648e17771bca75ec74182d) Thanks [@robin-drexler](https://github.com/robin-drexler)! - fix `useNavigationCurrentEntry` hook returning stale value

- [#2932](https://github.com/Shopify/ui-extensions/pull/2932) [`ee4bc8cc3fbf255c33ba83b28ab644680cf156e7`](https://github.com/Shopify/ui-extensions/commit/ee4bc8cc3fbf255c33ba83b28ab644680cf156e7) Thanks [@oliverigor](https://github.com/oliverigor)! - - Added customer account migration guide with comparison tables mapping legacy components to new Polaris web components
  - Removed extended form field event properties from the documentation to simplify component APIs
  - Added documentation for Section component with visual examples
  - Improved parent-child component relationship documentation for admin components
  - Added script to exit pre-release mode
  - Updated component descriptions and documentation for Admin UI components
  - Fixed Preact native types for customer account
  - Moved example country selector to top of documentation
  - Fixed form components events and HTML examples
  - Added support for Polaris web components in checkout extensions
  - Added scaffolded with Preact section for checkout extensions
  - Updated documentation for various components with copy edits and improved examples

## 2025.10.0-rc.2

### Patch Changes

- [#2887](https://github.com/Shopify/ui-extensions/pull/2887) [`989dea5248c694488ebd1eeeaac1cbcde31883d6`](https://github.com/Shopify/ui-extensions/commit/989dea5248c694488ebd1eeeaac1cbcde31883d6) Thanks [@robin-drexler](https://github.com/robin-drexler)! - test release

## 2025.10.0-rc.1

### Minor Changes

- [#2862](https://github.com/Shopify/ui-extensions/pull/2862) [`c9f2f882cf952b005960ca282276be32160f72df`](https://github.com/Shopify/ui-extensions/commit/c9f2f882cf952b005960ca282276be32160f72df) Thanks [@vividviolet](https://github.com/vividviolet)! - Defaulting to string type for enabled features passed to the templates

- [#2862](https://github.com/Shopify/ui-extensions/pull/2862) [`4551f8afdd44979c9074b8c1807ac42323861721`](https://github.com/Shopify/ui-extensions/commit/4551f8afdd44979c9074b8c1807ac42323861721) Thanks [@vividviolet](https://github.com/vividviolet)! - Add Picker

- [#2566](https://github.com/Shopify/ui-extensions/pull/2566) [`16c4403f810ec436889131a5cdbc4ecb7696529d`](https://github.com/Shopify/ui-extensions/commit/16c4403f810ec436889131a5cdbc4ecb7696529d) Thanks [@vividviolet](https://github.com/vividviolet)! - Support remote-dom for Admin surface

- [#2862](https://github.com/Shopify/ui-extensions/pull/2862) [`2437fdf57129a85be463af9a6562d1fa8919a391`](https://github.com/Shopify/ui-extensions/commit/2437fdf57129a85be463af9a6562d1fa8919a391) Thanks [@vividviolet](https://github.com/vividviolet)! - Add discount function settings api

### Patch Changes

- [#2721](https://github.com/Shopify/ui-extensions/pull/2721) [`f1d75899f9927ce56ca574ed89d34f00c69bd399`](https://github.com/Shopify/ui-extensions/commit/f1d75899f9927ce56ca574ed89d34f00c69bd399) Thanks [@henrytao-me](https://github.com/henrytao-me)! - Add preact entry to ui-extensions

- [#2848](https://github.com/Shopify/ui-extensions/pull/2848) [`48e87d9ee7746eb40f0a493df02f26cafc106ce7`](https://github.com/Shopify/ui-extensions/commit/48e87d9ee7746eb40f0a493df02f26cafc106ce7) Thanks [@vividviolet](https://github.com/vividviolet)! - Add Grid Item component for Admin

- [#2766](https://github.com/Shopify/ui-extensions/pull/2766) [`cd06fbdec2e09ee50e4b0ef8c530fddf70cdcf97`](https://github.com/Shopify/ui-extensions/commit/cd06fbdec2e09ee50e4b0ef8c530fddf70cdcf97) Thanks [@vividviolet](https://github.com/vividviolet)! - Remove global declaration from target d.ts as this was causing conflicting types

- [#2735](https://github.com/Shopify/ui-extensions/pull/2735) [`7cf6153a97a94d7dcbf9708c43deaab90f5d2131`](https://github.com/Shopify/ui-extensions/commit/7cf6153a97a94d7dcbf9708c43deaab90f5d2131) Thanks [@henrytao-me](https://github.com/henrytao-me)! - Patch preact signal

- [#2570](https://github.com/Shopify/ui-extensions/pull/2570) [`9cb03b55ad6e47a3defad22a11932ccf51dc5dcf`](https://github.com/Shopify/ui-extensions/commit/9cb03b55ad6e47a3defad22a11932ccf51dc5dcf) Thanks [@vividviolet](https://github.com/vividviolet)! - Update components types for Admin surface

- [#2491](https://github.com/Shopify/ui-extensions/pull/2491) [`1e1f82e4f05af62246421851638db5dff4c79046`](https://github.com/Shopify/ui-extensions/commit/1e1f82e4f05af62246421851638db5dff4c79046) Thanks [@belalsj](https://github.com/belalsj)! - AdminBlock remove summary prop and add collapsedSummary

- [#2493](https://github.com/Shopify/ui-extensions/pull/2493) [`4f8ebb54dea1a1b93d4c8e515b1e0f8f32651caa`](https://github.com/Shopify/ui-extensions/commit/4f8ebb54dea1a1b93d4c8e515b1e0f8f32651caa) Thanks [@vividviolet](https://github.com/vividviolet)! - Fix shopify global declaration

- [#2862](https://github.com/Shopify/ui-extensions/pull/2862) [`13e58950a65c5ecbfbc3a6046b7bd7c93884334d`](https://github.com/Shopify/ui-extensions/commit/13e58950a65c5ecbfbc3a6046b7bd7c93884334d) Thanks [@vividviolet](https://github.com/vividviolet)! - Sync picker and resourcePicker docs with app-bridge

- [#2502](https://github.com/Shopify/ui-extensions/pull/2502) [`b82774f5250ad69ad12ef39eee9d2c96b120bff0`](https://github.com/Shopify/ui-extensions/commit/b82774f5250ad69ad12ef39eee9d2c96b120bff0) Thanks [@vividviolet](https://github.com/vividviolet)! - Add new remote-dom components for Admin

## 2024.10.0

### Major Changes

- [#2374](https://github.com/Shopify/ui-extensions/pull/2374) [`4dec3851bf53f6cf289ca8c265cd13f8c123ab06`](https://github.com/Shopify/ui-extensions/commit/4dec3851bf53f6cf289ca8c265cd13f8c123ab06) Thanks [@robin-drexler](https://github.com/robin-drexler)! - customer account ui extensions order status `shop.storefrontUrl` does not contain a trailing slash anymore

### Minor Changes

- [#2307](https://github.com/Shopify/ui-extensions/pull/2307) [`21234eea51b50dfc53d3fc4962512728b4a19446`](https://github.com/Shopify/ui-extensions/commit/21234eea51b50dfc53d3fc4962512728b4a19446) Thanks [@oliverigor](https://github.com/oliverigor)! - Add size property to Modal

- [#2371](https://github.com/Shopify/ui-extensions/pull/2371) [`28edde440ceee584c71c5ac983252ca71a7f853a`](https://github.com/Shopify/ui-extensions/commit/28edde440ceee584c71c5ac983252ca71a7f853a) Thanks [@shopify-github-actions-access](https://github.com/apps/shopify-github-actions-access)! - Adds `type` property to `selectedPaymentOption`

- [#2361](https://github.com/Shopify/ui-extensions/pull/2361) [`89438897001dce9058030e6ee1655747a66ec71a`](https://github.com/Shopify/ui-extensions/commit/89438897001dce9058030e6ee1655747a66ec71a) Thanks [@oliverigor](https://github.com/oliverigor)! - Add primary and secondary actions to Modal component

- [#2294](https://github.com/Shopify/ui-extensions/pull/2294) [`fd4ecf2aef0414e790a4a78ae6a9fa013acbafda`](https://github.com/Shopify/ui-extensions/commit/fd4ecf2aef0414e790a4a78ae6a9fa013acbafda) Thanks [@Fionoble](https://github.com/Fionoble)! - Add currencyCode to admin MoneyField component

- [#2285](https://github.com/Shopify/ui-extensions/pull/2285) [`118654e61e393c2885198ab5dafddb4cf4d62669`](https://github.com/Shopify/ui-extensions/commit/118654e61e393c2885198ab5dafddb4cf4d62669) Thanks [@Fionoble](https://github.com/Fionoble)! - Add suffix to NumberField and TextField

- [#2362](https://github.com/Shopify/ui-extensions/pull/2362) [`9fe9d56d190fee5ee444ed980a5ef60106dfda12`](https://github.com/Shopify/ui-extensions/commit/9fe9d56d190fee5ee444ed980a5ef60106dfda12) Thanks [@billfienberg](https://github.com/billfienberg)! - add accessibilityLabel to admin's Button

- [#2297](https://github.com/Shopify/ui-extensions/pull/2297) [`7ab538090e8bcef052bfc782b31639efe89ff262`](https://github.com/Shopify/ui-extensions/commit/7ab538090e8bcef052bfc782b31639efe89ff262) Thanks [@shopify-github-actions-access](https://github.com/apps/shopify-github-actions-access)! - update generate-doc version, add attributes to Icon

- [#2247](https://github.com/Shopify/ui-extensions/pull/2247) [`8bca1a1710431083b7e98966ec76f3fe17720d5c`](https://github.com/Shopify/ui-extensions/commit/8bca1a1710431083b7e98966ec76f3fe17720d5c) Thanks [@belalsj](https://github.com/belalsj)! - New Action Extension targets: Catalog, Company, Gift Card

- [#2197](https://github.com/Shopify/ui-extensions/pull/2197) [`a8de80b0e252ebd0c529bfe88d02d2e35e2a0461`](https://github.com/Shopify/ui-extensions/commit/a8de80b0e252ebd0c529bfe88d02d2e35e2a0461) Thanks [@klenotiw](https://github.com/klenotiw)! - Add metafields to PickupPointOption

- [#2211](https://github.com/Shopify/ui-extensions/pull/2211) [`f81712b643430dd1cbdce54b3edf0c80bc0dafe5`](https://github.com/Shopify/ui-extensions/commit/f81712b643430dd1cbdce54b3edf0c80bc0dafe5) Thanks [@shopify-github-actions-access](https://github.com/apps/shopify-github-actions-access)! - Address autocomplete extensions now support 'company', 'latitude', and 'longitude' values

- [#2358](https://github.com/Shopify/ui-extensions/pull/2358) [`37620b9d47f38586c843a9c11a6de2e0461bc0dd`](https://github.com/Shopify/ui-extensions/commit/37620b9d47f38586c843a9c11a6de2e0461bc0dd) Thanks [@Fionoble](https://github.com/Fionoble)! - Add display:none to Box

- [#2220](https://github.com/Shopify/ui-extensions/pull/2220) [`9e619fca6ea4f816148c90158b46bc1db5bfbad7`](https://github.com/Shopify/ui-extensions/commit/9e619fca6ea4f816148c90158b46bc1db5bfbad7) Thanks [@LucasLacerdaUX](https://github.com/LucasLacerdaUX)! - Add QRCode component

### Patch Changes

- [#2284](https://github.com/Shopify/ui-extensions/pull/2284) [`f84592931962537d345dfd68bf2a2f2396373740`](https://github.com/Shopify/ui-extensions/commit/f84592931962537d345dfd68bf2a2f2396373740) Thanks [@brianshen1990](https://github.com/brianshen1990)! - expose Switch component to customer account unstable surface

- [#2385](https://github.com/Shopify/ui-extensions/pull/2385) [`9347443b76210c2f9f3ce45bb488c38ec08efb6f`](https://github.com/Shopify/ui-extensions/commit/9347443b76210c2f9f3ce45bb488c38ec08efb6f) Thanks [@jplhomer](https://github.com/jplhomer)! - Add missing documentation for `auth.idToken()` API

- [#2356](https://github.com/Shopify/ui-extensions/pull/2356) [`a2d458be51a708aeac6a1879554051f98371f908`](https://github.com/Shopify/ui-extensions/commit/a2d458be51a708aeac6a1879554051f98371f908) Thanks [@brianshen1990](https://github.com/brianshen1990)! - add full page navigation api to order full page extension target

- [#2347](https://github.com/Shopify/ui-extensions/pull/2347) [`dd8a861caba591c1087e8349e8a9bbfdc2681cb8`](https://github.com/Shopify/ui-extensions/commit/dd8a861caba591c1087e8349e8a9bbfdc2681cb8) Thanks [@brianshen1990](https://github.com/brianshen1990)! - Add customer-account.order.page.render target

- [#2369](https://github.com/Shopify/ui-extensions/pull/2369) [`7ef1d9cdd37c42277e240eb660e08de54967461c`](https://github.com/Shopify/ui-extensions/commit/7ef1d9cdd37c42277e240eb660e08de54967461c) Thanks [@brianshen1990](https://github.com/brianshen1990)! - update error message for useNavigationCurrentEntry api

- [#2132](https://github.com/Shopify/ui-extensions/pull/2132) [`9f7ee640e434bb175b90248c29bb194f321e871a`](https://github.com/Shopify/ui-extensions/commit/9f7ee640e434bb175b90248c29bb194f321e871a) Thanks [@ncardeli](https://github.com/ncardeli)! - Improve TypeScript definition for the Position type used by the position property

- [#2252](https://github.com/Shopify/ui-extensions/pull/2252) [`d6ac8d4e4180eef5242719bfaffe998441be1aa9`](https://github.com/Shopify/ui-extensions/commit/d6ac8d4e4180eef5242719bfaffe998441be1aa9) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Add admin company location block

## 2024.7.0

### Minor Changes

- [#1888](https://github.com/Shopify/ui-extensions/pull/1888) [`199a90fef0f4ce90a8f6ae6a8298c9d9c437f2f4`](https://github.com/Shopify/ui-extensions/commit/199a90fef0f4ce90a8f6ae6a8298c9d9c437f2f4) Thanks [@elanalynn](https://github.com/elanalynn)! - Add new block extension targets: collection, draft-order, abandoned-checkout, and product-variant

- [#1981](https://github.com/Shopify/ui-extensions/pull/1981) [`ba2510f0f4737a56abe4171a08b8adea4488f8b4`](https://github.com/Shopify/ui-extensions/commit/ba2510f0f4737a56abe4171a08b8adea4488f8b4) Thanks [@shopify-github-actions-access](https://github.com/apps/shopify-github-actions-access)! - Updates Order Status API with `processedAt` attribute

- [#1987](https://github.com/Shopify/ui-extensions/pull/1987) [`952489d3c27a2f5c8bcdad29e516480fe71e94e8`](https://github.com/Shopify/ui-extensions/commit/952489d3c27a2f5c8bcdad29e516480fe71e94e8) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - - Adds `useCustomerPrivacy` hook.

- [#2144](https://github.com/Shopify/ui-extensions/pull/2144) [`321749e68edf6d64a82ffe2c4c99d0f19ac4e63c`](https://github.com/Shopify/ui-extensions/commit/321749e68edf6d64a82ffe2c4c99d0f19ac4e63c) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Added `CartInstructions` (accessed using `api.instructions`) to checkout. These represent the cart instructions used to create the checkout and possibly limit extension capabilities. These instructions should be checked prior to performing any actions that may be affected by them.

  For example, if you intend to add a discount code via the `applyDiscountCodeChange` method, check `api.instructions.discounts.canUpdateDiscountCodes` to ensure it's supported in this checkout.

- [#2005](https://github.com/Shopify/ui-extensions/pull/2005) [`47512e33ddfb3d99a48fbcebdd20647cbc149fd7`](https://github.com/Shopify/ui-extensions/commit/47512e33ddfb3d99a48fbcebdd20647cbc149fd7) Thanks [@shopify-github-actions-access](https://github.com/apps/shopify-github-actions-access)! - Adds `selectedCountryCode` to `AddressAutocompleteSuggestionApi`.

- [#2067](https://github.com/Shopify/ui-extensions/pull/2067) [`3c3505c16c1deb6f202cbecf6747c0fdc6b79228`](https://github.com/Shopify/ui-extensions/commit/3c3505c16c1deb6f202cbecf6747c0fdc6b79228) Thanks [@shopify-github-actions-access](https://github.com/apps/shopify-github-actions-access)! - Support split shipping in Shipping option list and item targets.

- [#1924](https://github.com/Shopify/ui-extensions/pull/1924) [`a4f275abcb0c0166e0383fc5c1ed544b938def29`](https://github.com/Shopify/ui-extensions/commit/a4f275abcb0c0166e0383fc5c1ed544b938def29) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - - Adds the ability to read and write tracking consent metafield data to the Customer Privacy API.

  - Updates the `Sheet` component and examples.

- [#1807](https://github.com/Shopify/ui-extensions/pull/1807) [`08067cbba140d72f115e38f218dd0caead13f0d5`](https://github.com/Shopify/ui-extensions/commit/08067cbba140d72f115e38f218dd0caead13f0d5) Thanks [@nataliejeong](https://github.com/nataliejeong)! - Add Extension Target for Reorder Flow

- [#2059](https://github.com/Shopify/ui-extensions/pull/2059) [`bf839358269255bb6a86fd9a64295b4ea89d6004`](https://github.com/Shopify/ui-extensions/commit/bf839358269255bb6a86fd9a64295b4ea89d6004) Thanks [@Fionoble](https://github.com/Fionoble)! - Add resource picker to admin block extension

- [#2040](https://github.com/Shopify/ui-extensions/pull/2040) [`c8d876e83f3144361e09c375c3dc89af2029655b`](https://github.com/Shopify/ui-extensions/commit/c8d876e83f3144361e09c375c3dc89af2029655b) Thanks [@elanalynn](https://github.com/elanalynn)! - Add AdminPrintAction component

- [#2065](https://github.com/Shopify/ui-extensions/pull/2065) [`c2c51b82135fadf9dd4a2b1ad95dc59cabd9064c`](https://github.com/Shopify/ui-extensions/commit/c2c51b82135fadf9dd4a2b1ad95dc59cabd9064c) Thanks [@elanalynn](https://github.com/elanalynn)! - Add admin print action targets

- [#2118](https://github.com/Shopify/ui-extensions/pull/2118) [`0016e7e5031934e21b26398958d69b97a20ccebd`](https://github.com/Shopify/ui-extensions/commit/0016e7e5031934e21b26398958d69b97a20ccebd) Thanks [@shopify-github-actions-access](https://github.com/apps/shopify-github-actions-access)! - - Adds `oneTimeUse` to `ShippingAddress` to denote whether the address can be saved in checkout.

  - Adds `sku` to `ProductVariant` in checkout.
  - Adds `bullet` icon in checkout.

- [#1916](https://github.com/Shopify/ui-extensions/pull/1916) [`f9a593edd7bc6ea9f46f3927efd3b9fa6ebc5b5a`](https://github.com/Shopify/ui-extensions/commit/f9a593edd7bc6ea9f46f3927efd3b9fa6ebc5b5a) Thanks [@mleandres](https://github.com/mleandres)! - - Adds `purchase.address-autocomplete.suggest` extension target
  - Adds the `primaryAction` and `secondaryAction` to the `Sheet` component

### Patch Changes

- [#2015](https://github.com/Shopify/ui-extensions/pull/2015) [`5ded8d2cb5d9ae502aa75183714f84dc92b820ea`](https://github.com/Shopify/ui-extensions/commit/5ded8d2cb5d9ae502aa75183714f84dc92b820ea) Thanks [@PSalmers](https://github.com/PSalmers)! - Homogenizes terminology to use the term "placement" in place of "supported location", "placement reference", and others.

- [#1883](https://github.com/Shopify/ui-extensions/pull/1883) [`a87b8f3ac19ba9db78ed5933c2e0099195dc8c5b`](https://github.com/Shopify/ui-extensions/commit/a87b8f3ac19ba9db78ed5933c2e0099195dc8c5b) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Moves `Capability` type to shared types file

- [#1996](https://github.com/Shopify/ui-extensions/pull/1996) [`0c05f0d17d91a9cb7ad61f1806d7d0a20bd09912`](https://github.com/Shopify/ui-extensions/commit/0c05f0d17d91a9cb7ad61f1806d7d0a20bd09912) Thanks [@aledalgrande](https://github.com/aledalgrande)! - Add metafields to PickupLocationOption

- [#1960](https://github.com/Shopify/ui-extensions/pull/1960) [`c30a9639a5209862f4177f26ef3bc26e299c3c7b`](https://github.com/Shopify/ui-extensions/commit/c30a9639a5209862f4177f26ef3bc26e299c3c7b) Thanks [@shopify-github-actions-access](https://github.com/apps/shopify-github-actions-access)! - Added `appMetafields` field to `AddressAutocompleteStandardApi`

- [#2037](https://github.com/Shopify/ui-extensions/pull/2037) [`0fd33b35c651b89d24c4fc560f376e91658d70a6`](https://github.com/Shopify/ui-extensions/commit/0fd33b35c651b89d24c4fc560f376e91658d70a6) Thanks [@brianshen1990](https://github.com/brianshen1990)! - add authenticationState api to customer account ui extension

- [#2053](https://github.com/Shopify/ui-extensions/pull/2053) [`9c1777d48e0d81fea811cfbcd9764e98cf65778d`](https://github.com/Shopify/ui-extensions/commit/9c1777d48e0d81fea811cfbcd9764e98cf65778d) Thanks [@ncardeli](https://github.com/ncardeli)! - Publish display property

- [#2014](https://github.com/Shopify/ui-extensions/pull/2014) [`ac077c8becee6f02fbb4fd9f04d029dbf9b838f2`](https://github.com/Shopify/ui-extensions/commit/ac077c8becee6f02fbb4fd9f04d029dbf9b838f2) Thanks [@oliverigor](https://github.com/oliverigor)! - Add Switch component

- [#1942](https://github.com/Shopify/ui-extensions/pull/1942) [`b086046068ccb984b37c92a4e17378ada1774524`](https://github.com/Shopify/ui-extensions/commit/b086046068ccb984b37c92a4e17378ada1774524) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Improve error messaging when a React hook is used from a different API surface than the extension calling it.

- [#1931](https://github.com/Shopify/ui-extensions/pull/1931) [`a744908ee0cedbc627a7bfac18294f34cad8746d`](https://github.com/Shopify/ui-extensions/commit/a744908ee0cedbc627a7bfac18294f34cad8746d) Thanks [@shopify-github-actions-access](https://github.com/apps/shopify-github-actions-access)! - - Add code examples for custom address autocomplete extensions
  - Update documentation for custom address autocomplete extensions
  - Misc. type updates and documentation updates

## 2024.4.0

### Minor Changes

- [#1693](https://github.com/Shopify/ui-extensions/pull/1693) [`5d2905b1`](https://github.com/Shopify/ui-extensions/commit/5d2905b15f6dda6e311022fd1d93c7865db0d157) Thanks [@elskhn](https://github.com/elskhn)! - Adds new `purchase.checkout.pickup-location-option-item.render-after` extension target, rendered inside each local pickup option item.

- [#1781](https://github.com/Shopify/ui-extensions/pull/1781) [`0772c011`](https://github.com/Shopify/ui-extensions/commit/0772c011f27ace1c51242ed1b116511076c00bff) Thanks [@jonathanhamel4](https://github.com/jonathanhamel4)! - Adds `buyerJourney.steps`, `buyerJourney.activeStep`, and their associated react hooks to the checkout surface API.

- [#1673](https://github.com/Shopify/ui-extensions/pull/1673) [`21cb3205`](https://github.com/Shopify/ui-extensions/commit/21cb32055f97060a75a1f28af8721208d09544ca) Thanks [@brianshen1990](https://github.com/brianshen1990)! - add requireLogin for CA order status api

- [#1832](https://github.com/Shopify/ui-extensions/pull/1832) [`43390b05`](https://github.com/Shopify/ui-extensions/commit/43390b05cd0685dd62c226ab5f1c2f9294974bf7) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds `region` to Customer Privacy API.

- [#1682](https://github.com/Shopify/ui-extensions/pull/1682) [`02ca0b9a`](https://github.com/Shopify/ui-extensions/commit/02ca0b9a56206d14ec742c062ca6b66c46f67c30) Thanks [@thitemple](https://github.com/thitemple)! - Adds the `OrderConfirmationApi` to `purchase.thank-you` and `customer-account.order-status` extension targets.

- [#1837](https://github.com/Shopify/ui-extensions/pull/1837) [`947b4433`](https://github.com/Shopify/ui-extensions/commit/947b4433a494c05a197aab6460ecff405df27163) Thanks [@JoshuaWhite1](https://github.com/JoshuaWhite1)! - add new targets for action extensions

- [#1689](https://github.com/Shopify/ui-extensions/pull/1689) [`dd256672`](https://github.com/Shopify/ui-extensions/commit/dd256672a055363064029b417c1659c38efbd907) Thanks [@klenotiw](https://github.com/klenotiw)! - Adds the new `customerPrivacy` and `applyTrackingConsentChange` APIs.

### Patch Changes

- [#1695](https://github.com/Shopify/ui-extensions/pull/1695) [`c6c4a60d`](https://github.com/Shopify/ui-extensions/commit/c6c4a60deff13f066689827a8523a5a03e260d76) Thanks [@cpeddecord](https://github.com/cpeddecord)! - exporting FunctionSettingsError

- [#1838](https://github.com/Shopify/ui-extensions/pull/1838) [`57ab9d90`](https://github.com/Shopify/ui-extensions/commit/57ab9d9097f0ec725a4e543fb927d9f326f5aca4) Thanks [@aledalgrande](https://github.com/aledalgrande)! - Update the `ValidationData` type to include `metafields`.

- [#1684](https://github.com/Shopify/ui-extensions/pull/1684) [`48a5f605`](https://github.com/Shopify/ui-extensions/commit/48a5f605163deec6d1d01f1fcecd32eee4259493) Thanks [@cpeddecord](https://github.com/cpeddecord)! - New `Section` component available to admin UI extensions.

- [#1648](https://github.com/Shopify/ui-extensions/pull/1648) [`8476dfee`](https://github.com/Shopify/ui-extensions/commit/8476dfeeb6142a3c01f8af3c869bf4d1cd430d0f) Thanks [@NathanJolly](https://github.com/NathanJolly)! - Updates to the point-of-sale directories to catch them up to main branch

- [#1840](https://github.com/Shopify/ui-extensions/pull/1840) [`e5b82886`](https://github.com/Shopify/ui-extensions/commit/e5b828867ba9f0aa41e74e9439ec47517d463dc7) Thanks [@aledalgrande](https://github.com/aledalgrande)! - Redefine types for validations in a way that works for doc generation

- [#1663](https://github.com/Shopify/ui-extensions/pull/1663) [`7d2fdcb5`](https://github.com/Shopify/ui-extensions/commit/7d2fdcb5550e235ed001f7111a8d8d2d28088789) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Adds 2024-01 as a valid `ApiVersion` type value.

- [#1658](https://github.com/Shopify/ui-extensions/pull/1658) [`58026776`](https://github.com/Shopify/ui-extensions/commit/58026776a7e86f5fb2b1fd086ceec903d7577615) Thanks [@brianshen1990](https://github.com/brianshen1990)! - Drop runExtension support for customer account ui extension

- [#1824](https://github.com/Shopify/ui-extensions/pull/1824) [`6211f9a5`](https://github.com/Shopify/ui-extensions/commit/6211f9a5fa0cc6e806d69e507d5e4a99c72de5f4) Thanks [@aledalgrande](https://github.com/aledalgrande)! - Updates the `shopifyFunction` type to use `id` rather than `uuid` for Checkout rules.

- [#1685](https://github.com/Shopify/ui-extensions/pull/1685) [`a1b884ed`](https://github.com/Shopify/ui-extensions/commit/a1b884ed64c39954a6cd9d6db0dbf42b93395628) Thanks [@brianshen1990](https://github.com/brianshen1990)! - expose authenticated account related hooks

- [#1654](https://github.com/Shopify/ui-extensions/pull/1654) [`e096e9a2`](https://github.com/Shopify/ui-extensions/commit/e096e9a248dd95c5c0aad44d514b87ba2dab7661) Thanks [@oliverigor](https://github.com/oliverigor)! - Add docs fixes for the conditional style Style type

- [#1679](https://github.com/Shopify/ui-extensions/pull/1679) [`45687187`](https://github.com/Shopify/ui-extensions/commit/4568718724d88b7a6ca48d7481a8086f32b8dda4) Thanks [@cpeddecord](https://github.com/cpeddecord)! - Adds a top-level <FunctionSettings /> component to admin surface

- [#1681](https://github.com/Shopify/ui-extensions/pull/1681) [`9d21ef30`](https://github.com/Shopify/ui-extensions/commit/9d21ef3052269f7fa568329960ebc1cd35422aea) Thanks [@cpeddecord](https://github.com/cpeddecord)! - adds definitions for validation settings admin extension target

## 2024.1.0

### Major Changes

- [#1585](https://github.com/Shopify/ui-extensions/pull/1585) [`70f9bdc1`](https://github.com/Shopify/ui-extensions/commit/70f9bdc1bd0a4caf3d6b0d7033dcef0a012b3f90) Thanks [@jamesvidler](https://github.com/jamesvidler)! - The `purchase.checkout.shipping-option-list.render-before` and `purchase.checkout.shipping-option-list.render-after` will be duplicated for possible types of delivery groups (One Time Purchase and Subscription).
  You can use the new `target` or `useDeliveryGroupTarget()` React hook to access the delivery group the extension is attached to.

### Minor Changes

- [#1515](https://github.com/Shopify/ui-extensions/pull/1515) [`2452a939`](https://github.com/Shopify/ui-extensions/commit/2452a939e84c1a13ef1a107360419edee6c3a1d9) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds custom header and footer unified extension targets for checkout and thank you pages

- [#1472](https://github.com/Shopify/ui-extensions/pull/1472) [`9c836557`](https://github.com/Shopify/ui-extensions/commit/9c836557d97f08496bb073a11a0fb209eb176f5f) Thanks [@sirgalleto](https://github.com/sirgalleto)! - Add order routing extension targets and API

- [#1437](https://github.com/Shopify/ui-extensions/pull/1437) [`6de2fce0`](https://github.com/Shopify/ui-extensions/commit/6de2fce01bc32174089f91aafd870877a878a6eb) Thanks [@shopi-dori](https://github.com/shopi-dori)! - Adds the `bankIdNumber` to the `PaymentOptionItemApi`.
  Adds `background` to `View`, `Grid`, `GridItem`, `Pressable`, `ScrollView`, `InlineStack`, and `BlockStack` components.

- [#1424](https://github.com/Shopify/ui-extensions/pull/1424) [`9a8dda8c`](https://github.com/Shopify/ui-extensions/commit/9a8dda8c9332d5ed24fa020f6b03106e2da14e9c) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Add Badge component to admin

- [#1428](https://github.com/Shopify/ui-extensions/pull/1428) [`9cd7d6f9`](https://github.com/Shopify/ui-extensions/commit/9cd7d6f9977683456399aed34f730adeecf98443) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Add Banner component to admin

- [#1430](https://github.com/Shopify/ui-extensions/pull/1430) [`0a8b378a`](https://github.com/Shopify/ui-extensions/commit/0a8b378aac8ecc98c9b2d8b4142618aa50082663) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Add ChoiceList to admin

- [#1625](https://github.com/Shopify/ui-extensions/pull/1625) [`29625d18`](https://github.com/Shopify/ui-extensions/commit/29625d18c269b1cb0e9ffe0b890c466d4a6901a8) Thanks [@billfienberg](https://github.com/billfienberg)! - Add ColorPicker remote component

- [#1431](https://github.com/Shopify/ui-extensions/pull/1431) [`8f82c578`](https://github.com/Shopify/ui-extensions/commit/8f82c5784944ed63d20a02859561d6655257edc2) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Add ProgressIndicator to admin

### Patch Changes

- [#1601](https://github.com/Shopify/ui-extensions/pull/1601) [`ccbb2353`](https://github.com/Shopify/ui-extensions/commit/ccbb235377cb5c725832726abca99b1bc2f52a7b) Thanks [@belalsj](https://github.com/belalsj)! - Update Button and Text with interestTarget API

- [#1503](https://github.com/Shopify/ui-extensions/pull/1503) [`f4268b21`](https://github.com/Shopify/ui-extensions/commit/f4268b216c4ba75728c75a239b35354ab467dd6c) Thanks [@anahita-m](https://github.com/anahita-m)! - Removing legacy customer account extension targets

- [#1473](https://github.com/Shopify/ui-extensions/pull/1473) [`903a62c7`](https://github.com/Shopify/ui-extensions/commit/903a62c7db9f2bf980c44f358445991864f644e6) Thanks [@mikewilson01](https://github.com/mikewilson01)! - Add additional props to LWS component

- [#1401](https://github.com/Shopify/ui-extensions/pull/1401) [`0f0e410d`](https://github.com/Shopify/ui-extensions/commit/0f0e410d1b1c8a787a45227c86b256131031a114) Thanks [@JoshuaWhite1](https://github.com/JoshuaWhite1)! - Added details about title/summary truncation to docs

- [#1448](https://github.com/Shopify/ui-extensions/pull/1448) [`be9465df`](https://github.com/Shopify/ui-extensions/commit/be9465df3f58c3fd439b6bbb9424c7caf0bafb7e) Thanks [@robin-drexler](https://github.com/robin-drexler)! - add previously internal customer account apis to unstable

- [#1458](https://github.com/Shopify/ui-extensions/pull/1458) [`1fb524f6`](https://github.com/Shopify/ui-extensions/commit/1fb524f695f65541df0b9dbec93e0b8b5c65386c) Thanks [@robin-drexler](https://github.com/robin-drexler)! - fix policy modal handling

- [#1434](https://github.com/Shopify/ui-extensions/pull/1434) [`b45e1b7f`](https://github.com/Shopify/ui-extensions/commit/b45e1b7f5d1642a0eb8f3d9055d541dc8dda2f13) Thanks [@mikewilson01](https://github.com/mikewilson01)! - Add onStatusChange callback to LoginWithShop component

- [#1466](https://github.com/Shopify/ui-extensions/pull/1466) [`e53621b6`](https://github.com/Shopify/ui-extensions/commit/e53621b6457f68331d7c6b175b078627ef3fa7ea) Thanks [@mikewilson01](https://github.com/mikewilson01)! - Update props for LoginWithShop component

- [#1496](https://github.com/Shopify/ui-extensions/pull/1496) [`bb30cc52`](https://github.com/Shopify/ui-extensions/commit/bb30cc52550b1e973ef8560b3f742c3c5c6c9b3f) Thanks [@brianshen1990](https://github.com/brianshen1990)! - remove deprecated fields from doc in customer account ui extensions

- [#1569](https://github.com/Shopify/ui-extensions/pull/1569) [`cbc51b33`](https://github.com/Shopify/ui-extensions/commit/cbc51b33d376370bff9f4dc980e66b495f5fcfaa) Thanks [@oluwatimio](https://github.com/oluwatimio)! - Remove customer account location api

- [#1598](https://github.com/Shopify/ui-extensions/pull/1598) [`345ed9a0`](https://github.com/Shopify/ui-extensions/commit/345ed9a00d3fb1d9f35be4e92dcf022d29794aba) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Deprecate summary prop for AdminBlock

## 2023.10.0

### Minor Changes

- [#1296](https://github.com/Shopify/ui-extensions/pull/1296) [`a8e16322`](https://github.com/Shopify/ui-extensions/commit/a8e16322b367c4efd079d8e69331bd234bedb0c8) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Bump `@remote-ui/core` version.

- [#1340](https://github.com/Shopify/ui-extensions/pull/1340) [`a7ea6cb0`](https://github.com/Shopify/ui-extensions/commit/a7ea6cb06c3838228bfeefa94d4826b747720ad3) Thanks [@lsit](https://github.com/lsit)! - Add PaymentIcon component to the checkout surface

- [#1351](https://github.com/Shopify/ui-extensions/pull/1351) [`8df8429b`](https://github.com/Shopify/ui-extensions/commit/8df8429b69c3bdec736d0885c922be1db2c4c5fe) Thanks [@jkeohan](https://github.com/jkeohan)! - Add ProductThumbnail component to the checkout surface

- [#1397](https://github.com/Shopify/ui-extensions/pull/1397) [`198d0848`](https://github.com/Shopify/ui-extensions/commit/198d08481470776f547e26f70fbc8b9836da3e6d) Thanks [@jamesvidler](https://github.com/jamesvidler)! - New `ConsentCheckbox` and `ConsentPhoneField` components which allow extensions to render their own consent UI, supporting the "sms-marketing" policy.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`3437fc05`](https://github.com/Shopify/ui-extensions/commit/3437fc050df2d7ee1d95a75084804ad0f47a70e3) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds `purchase.checkout.payment-method-list.render-before` and `purchase.checkout.payment-method-list.render-after` extension targets, rendered above and below the payment method list.

- [#1281](https://github.com/Shopify/ui-extensions/pull/1281) [`d539b687`](https://github.com/Shopify/ui-extensions/commit/d539b68792ab3068c2ddd89ae8a2077cc1ddcc56) Thanks [@elanalynn](https://github.com/elanalynn)! - Add download and target props to ButtonAnchorProps in admin

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds useCartlineTarget API and deprecates useTarget API.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`1dd9abf0`](https://github.com/Shopify/ui-extensions/commit/1dd9abf0faf5b63c9b6c341608fc53a8207f485d) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Storage API stored data is now shared between all activated extension targets of the extension.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Includes masked identifier when submitting custom redeemable data.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Provides payment attributes to checkout extension.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds support for decorative color in Text and TextBlock components.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`7a65c283`](https://github.com/Shopify/ui-extensions/commit/7a65c2836aa91ac3e6e225d8476b2c44baae87fb) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds the `purchase.checkout.delivery-address.render-after` static extension target which is rendered after the shipping address form elements.

- [#1315](https://github.com/Shopify/ui-extensions/pull/1315) [`22f71433`](https://github.com/Shopify/ui-extensions/commit/22f71433069b4cc1d4a322dad8dc6ecb70959ea8) Thanks [@dnagoda](https://github.com/dnagoda)! - # Add checkoutToken Api

  Extensions now have access to the checkout token (a stable id used to identify the checkout) directly through the standard api. The checkout token will match:

  - **token** field in [WebPixel checkout payload](https://shopify.dev/docs/api/pixels/customer-events#checkout).
  - **checkout_token** in the [Admin REST Api Order resource](https://shopify.dev/docs/api/admin-rest/unstable/resources/order#resource-object)

### Patch Changes

- [#1361](https://github.com/Shopify/ui-extensions/pull/1361) [`82ba4be1`](https://github.com/Shopify/ui-extensions/commit/82ba4be1efd0745ebd14ef10db4c54badba8c9f6) Thanks [@lauramann](https://github.com/lauramann)! - Adds b2bEnabled enabledFeature on CustomerSegmentTemplateApi

- [#1286](https://github.com/Shopify/ui-extensions/pull/1286) [`d0bd64d2`](https://github.com/Shopify/ui-extensions/commit/d0bd64d27f4cb41c31ef174393029d841a744ce3) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Add exports for InternalCustomerSegmentTemplate categories and icons

- [#1274](https://github.com/Shopify/ui-extensions/pull/1274) [`e198e10a`](https://github.com/Shopify/ui-extensions/commit/e198e10a99fc3da52d37822959db94105f04987f) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Update CustomerSegmentTemplate prop names

- [#1316](https://github.com/Shopify/ui-extensions/pull/1316) [`0905d719`](https://github.com/Shopify/ui-extensions/commit/0905d7193344c28fc9d346c2f7df873f23856671) Thanks [@lihaokx](https://github.com/lihaokx)! - 1. Rename point to target; 2. Update extension target names; 3, Add new types

- [#1403](https://github.com/Shopify/ui-extensions/pull/1403) [`1de5d9cf`](https://github.com/Shopify/ui-extensions/commit/1de5d9cf7c14f1f7220be4af8c8b35561ee862b8) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Supports improvements for new checkout extensibility docs IA. Organizes docs by targets, and groups APIs.

- [#1275](https://github.com/Shopify/ui-extensions/pull/1275) [`f4d0ea17`](https://github.com/Shopify/ui-extensions/commit/f4d0ea1754f132337536e1154a4ea4ed7d1fefde) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Expose CustomerSegmentTemplate category and icon types

- [#1074](https://github.com/Shopify/ui-extensions/pull/1074) [`3e60fb40`](https://github.com/Shopify/ui-extensions/commit/3e60fb402fdec6c624e85d925cffa955faadf6c8) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Rename components with Admin prefix

- [#1343](https://github.com/Shopify/ui-extensions/pull/1343) [`fa561eed`](https://github.com/Shopify/ui-extensions/commit/fa561eed6071fc7e8308e7fecf589b60093cafe4) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Update docs for action extension GA

- [#1294](https://github.com/Shopify/ui-extensions/pull/1294) [`1dd7a197`](https://github.com/Shopify/ui-extensions/commit/1dd7a1975cf23522f667fe19d1261b761726a252) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Remove CustomerSegmentationTemplate and deprecated prop names

- [#1283](https://github.com/Shopify/ui-extensions/pull/1283) [`8a9917b2`](https://github.com/Shopify/ui-extensions/commit/8a9917b247068178dba339bfa4fbfb91efc2fe0c) Thanks [@lihaokx](https://github.com/lihaokx)! - Move customer account ui extension from main to unstable branch.

- [#1289](https://github.com/Shopify/ui-extensions/pull/1289) [`1be8d871`](https://github.com/Shopify/ui-extensions/commit/1be8d871a284967c7f9860a2321666b6f416c57f) Thanks [@lauramann](https://github.com/lauramann)! - Adds extension target for segment details

- [#1279](https://github.com/Shopify/ui-extensions/pull/1279) [`f537b081`](https://github.com/Shopify/ui-extensions/commit/f537b0814d3fcf0605396e9453a95ad4b58fcd2a) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Introduces InternalCustomerSegmentTemplate component

## 2023.7.2

### Patch Changes

- [#1267](https://github.com/Shopify/ui-extensions/pull/1267) [`dc7f7395`](https://github.com/Shopify/ui-extensions/commit/dc7f739538dd648c135768c2e71c5873e6a672e0) Thanks [@robin-drexler](https://github.com/robin-drexler)! - fix customer-account surface build and context

## 2023.7.1

### Patch Changes

- [#1249](https://github.com/Shopify/ui-extensions/pull/1249) [`fc0186ef`](https://github.com/Shopify/ui-extensions/commit/fc0186ef27b46aac7676d4b254626cf5c01e4239) Thanks [@mleandres](https://github.com/mleandres)! - New `useDeliveryGroup()` hook and improved documentation.

- [#1210](https://github.com/Shopify/ui-extensions/pull/1210) [`1faf52a5`](https://github.com/Shopify/ui-extensions/commit/1faf52a53aac15eae0b37738fe5871d6ee2ef8d4) Thanks [@vividviolet](https://github.com/vividviolet)! - Expose query API for Admin UI extensions

## 2023.7.0

### Major Changes

- [#1145](https://github.com/Shopify/ui-extensions/pull/1145) [`2d147efa`](https://github.com/Shopify/ui-extensions/commit/2d147efab147ac9fdf77f5dd0d27fe65495bb0da) Thanks [@lemonmade](https://github.com/lemonmade)! - Update API type names to match new extension target names

### Minor Changes

- [#1064](https://github.com/Shopify/ui-extensions/pull/1064) [`266c13c0`](https://github.com/Shopify/ui-extensions/commit/266c13c0ab971d7c88c485c2747b753c2e05a4d1) Thanks [@Fionoble](https://github.com/Fionoble)! - Added new admin components: Box, BlockStack, Checkbox, Form, InlineStack, TextArea

- [#1100](https://github.com/Shopify/ui-extensions/pull/1100) [`c7dba7ad`](https://github.com/Shopify/ui-extensions/commit/c7dba7adbd1349031d52b3ab6bbb4880fbd572d1) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Add support for reading and writing cart metafields.

- [#1145](https://github.com/Shopify/ui-extensions/pull/1145) [`2d147efa`](https://github.com/Shopify/ui-extensions/commit/2d147efab147ac9fdf77f5dd0d27fe65495bb0da) Thanks [@lemonmade](https://github.com/lemonmade)! - Add `Extension.target` field for checkout UI extensions to read the current extension target being rendered.

- [#1057](https://github.com/Shopify/ui-extensions/pull/1057) [`3dff93ac`](https://github.com/Shopify/ui-extensions/commit/3dff93acc1eb10fa524d5985fec2ca9df49fdcdd) Thanks [@Fionoble](https://github.com/Fionoble)! - Exposes Action and Block extension targets in the admin surface.

- [#1145](https://github.com/Shopify/ui-extensions/pull/1145) [`2d147efa`](https://github.com/Shopify/ui-extensions/commit/2d147efab147ac9fdf77f5dd0d27fe65495bb0da) Thanks [@lemonmade](https://github.com/lemonmade)! - Add `customer-account` entrypoints for order status page extensions

- [#774](https://github.com/Shopify/ui-extensions/pull/774) [`feaab61b`](https://github.com/Shopify/ui-extensions/commit/feaab61bfd0fb1c472133418ac7946d5dcdfc155) Thanks [@carolopolo](https://github.com/carolopolo)! - Changes typing of `description` prop of `<CustomerSegmentationTemplate/>` from `string` to `string | string[]`

- [#1145](https://github.com/Shopify/ui-extensions/pull/1145) [`2d147efa`](https://github.com/Shopify/ui-extensions/commit/2d147efab147ac9fdf77f5dd0d27fe65495bb0da) Thanks [@lemonmade](https://github.com/lemonmade)! - Add support for new extension target names

### Patch Changes

- [#1152](https://github.com/Shopify/ui-extensions/pull/1152) [`505582a6`](https://github.com/Shopify/ui-extensions/commit/505582a623a056726109710e35a7aeb40530e8fa) Thanks [@vividviolet](https://github.com/vividviolet)! - Rename all extensionPoint references to extension target

## 2023.4.3

### Patch Changes

- [#1216](https://github.com/Shopify/ui-extensions/pull/1216) [`9052b155`](https://github.com/Shopify/ui-extensions/commit/9052b1550f38d21563bcb36530f6b2bc580363eb) Thanks [@jamesvidler](https://github.com/jamesvidler)! - PickupLocationsApi and PickupPointsApi now return a `isLocationFormVisible` property as opposed to `locationFormVisible`. ShippingMethodDetailsApi now gurantees a target (`ShippingOption`) will be returned.

## 2023.4.2

### Patch Changes

- [#1135](https://github.com/Shopify/ui-extensions/pull/1135) [`b6df631c`](https://github.com/Shopify/ui-extensions/commit/b6df631cc4dd145d80555c05cfa79e02092210dc) Thanks [@lemonmade](https://github.com/lemonmade)! - Backported `Extension.target` field for checkout UI extensions

- [#1135](https://github.com/Shopify/ui-extensions/pull/1135) [`b6df631c`](https://github.com/Shopify/ui-extensions/commit/b6df631cc4dd145d80555c05cfa79e02092210dc) Thanks [@lemonmade](https://github.com/lemonmade)! - Preserve generic type argument for `I18nTranslate` function

## 2023.4.1

### Minor Changes

- [#1100](https://github.com/Shopify/ui-extensions/pull/1100) [`c7dba7ad`](https://github.com/Shopify/ui-extensions/commit/c7dba7adbd1349031d52b3ab6bbb4880fbd572d1) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Add support for reading and writing cart metafields.

### Patch Changes

- [#1117](https://github.com/Shopify/ui-extensions/pull/1117) [`8e11ad23`](https://github.com/Shopify/ui-extensions/commit/8e11ad230991479b9d944b3811aafb0a1f4a0b2c) Thanks [@olavoasantos](https://github.com/olavoasantos)! - Clean up on Admin examples and types

- [#1100](https://github.com/Shopify/ui-extensions/pull/1100) [`c7dba7ad`](https://github.com/Shopify/ui-extensions/commit/c7dba7adbd1349031d52b3ab6bbb4880fbd572d1) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Updated faker dependancies for ui-extensions-react.

- [#1100](https://github.com/Shopify/ui-extensions/pull/1100) [`c7dba7ad`](https://github.com/Shopify/ui-extensions/commit/c7dba7adbd1349031d52b3ab6bbb4880fbd572d1) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Updated the documented examples to import from the ui-extensions package.

## 2023.4.0

### Minor Changes

- [#1064](https://github.com/Shopify/ui-extensions/pull/1064) [`266c13c0`](https://github.com/Shopify/ui-extensions/commit/266c13c0ab971d7c88c485c2747b753c2e05a4d1) Thanks [@Fionoble](https://github.com/Fionoble)! - Added new admin components: Box, BlockStack, Checkbox, Form, InlineStack, TextArea

- [#1057](https://github.com/Shopify/ui-extensions/pull/1057) [`3dff93ac`](https://github.com/Shopify/ui-extensions/commit/3dff93acc1eb10fa524d5985fec2ca9df49fdcdd) Thanks [@Fionoble](https://github.com/Fionoble)! - Exposes Action and Block extension targets in the admin surface.

- [#774](https://github.com/Shopify/ui-extensions/pull/774) [`feaab61b`](https://github.com/Shopify/ui-extensions/commit/feaab61bfd0fb1c472133418ac7946d5dcdfc155) Thanks [@carolopolo](https://github.com/carolopolo)! - Changes typing of `description` prop of `<CustomerSegmentationTemplate/>` from `string` to `string | string[]`

### Patch Changes

- [#1050](https://github.com/Shopify/ui-extensions/pull/1050) [`df9ff575`](https://github.com/Shopify/ui-extensions/commit/df9ff5753e7072ba2b6b8acd0427f7f331506ba6) Thanks [@lauramann](https://github.com/lauramann)! - Add viewMajor to source in CustomerSegmentationTemplate

- [#1044](https://github.com/Shopify/ui-extensions/pull/1044) [`ca55a50c`](https://github.com/Shopify/ui-extensions/commit/ca55a50cc111f679c4fb4e308db257e4c22b0330) Thanks [@olavoasantos](https://github.com/olavoasantos)! - Add Heading and HeadingGroup components to admin surface

- [#1048](https://github.com/Shopify/ui-extensions/pull/1048) [`faaacfe3`](https://github.com/Shopify/ui-extensions/commit/faaacfe3942b9a25c45f523ab396330221f54564) Thanks [@olavoasantos](https://github.com/olavoasantos)! - Add Button component to the Admin surface

- [#806](https://github.com/Shopify/ui-extensions/pull/806) [`d0e44415`](https://github.com/Shopify/ui-extensions/commit/d0e44415e6913b005d35ff75209bf712e7930f79) Thanks [@jonathanhamel4](https://github.com/jonathanhamel4)! - Moving the Segmentation TemplateCategory from the api to the CustomerSegmentationTemplate component props.

- [#703](https://github.com/Shopify/ui-extensions/pull/703) [`100cfeda`](https://github.com/Shopify/ui-extensions/commit/100cfeda331247d284add99284b244d7a5cb7d0b) Thanks [@vividviolet](https://github.com/vividviolet)! - Add Admin surface to packages

- [#823](https://github.com/Shopify/ui-extensions/pull/823) [`0095a792`](https://github.com/Shopify/ui-extensions/commit/0095a792f4392b242aceccdcc0c8f1741ea22782) Thanks [@lemonmade](https://github.com/lemonmade)! - Example unstable change

- [#892](https://github.com/Shopify/ui-extensions/pull/892) [`0d68e3d1`](https://github.com/Shopify/ui-extensions/commit/0d68e3d163abba8fc48030ec3b2ac287fed4340c) Thanks [@LTiger14](https://github.com/LTiger14)! - Add confettiMajor to source in CustomerSegmentationTemplate

- [#1023](https://github.com/Shopify/ui-extensions/pull/1023) [`d250d7df`](https://github.com/Shopify/ui-extensions/commit/d250d7df500378b496f079292d33b6433053098c) Thanks [@olavoasantos](https://github.com/olavoasantos)! - Remove legacy components on the admin surface and add components based on the unified API

- [#771](https://github.com/Shopify/ui-extensions/pull/771) [`2a3b4bd0`](https://github.com/Shopify/ui-extensions/commit/2a3b4bd0f8dbdf0e36530f2308ef794c71e2daf4) Thanks [@loic-d](https://github.com/loic-d)! - Introduce dateAdded on CustomerSegmentationTemplate

- [#1042](https://github.com/Shopify/ui-extensions/pull/1042) [`de735136`](https://github.com/Shopify/ui-extensions/commit/de735136e204b068f3654272261fb68b1943ad6e) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Add AppAction component

- [#1034](https://github.com/Shopify/ui-extensions/pull/1034) [`35a34867`](https://github.com/Shopify/ui-extensions/commit/35a34867922fde91f84644c06d094ede0ceb0415) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Ported latest changes from @shopify/checkout-ui-extensions package for corresponding version 2023-04.

- [#1074](https://github.com/Shopify/ui-extensions/pull/1074) [`3e60fb40`](https://github.com/Shopify/ui-extensions/commit/3e60fb402fdec6c624e85d925cffa955faadf6c8) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Rename components with Admin prefix

- [#759](https://github.com/Shopify/ui-extensions/pull/759) [`4e71987f`](https://github.com/Shopify/ui-extensions/commit/4e71987f1cd701e049ebfb9e4c726f2a841ce8be) Thanks [@loic-d](https://github.com/loic-d)! - Introduces CustomerSegmentationTemplate component

- [#1073](https://github.com/Shopify/ui-extensions/pull/1073) [`ad9d0f75`](https://github.com/Shopify/ui-extensions/commit/ad9d0f75078c2b2f915a14789f1bc2eec2ca2885) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Added ability to generate docs from within the repository.

- [#766](https://github.com/Shopify/ui-extensions/pull/766) [`0c5b0d5b`](https://github.com/Shopify/ui-extensions/commit/0c5b0d5b623e4d6a7e8c33e821991f9bdc5c8b20) Thanks [@loic-d](https://github.com/loic-d)! - Introduces standardMetafieldDependencies prop on CustomerSegmentationTemplate

- [#722](https://github.com/Shopify/ui-extensions/pull/722) [`c4d3ef8e`](https://github.com/Shopify/ui-extensions/commit/c4d3ef8ea10b8b9bc3a688b9ed7550d717870a22) Thanks [@vividviolet](https://github.com/vividviolet)! - Call root.mount for a rendering extension point

- [#822](https://github.com/Shopify/ui-extensions/pull/822) [`a49cfe5d`](https://github.com/Shopify/ui-extensions/commit/a49cfe5dc9609791af46f9f6170250fec30212b8) Thanks [@jonathanhamel4](https://github.com/jonathanhamel4)! - Changing the dateAdded type from Date to ISO 8601 string

- [#1062](https://github.com/Shopify/ui-extensions/pull/1062) [`aad2fb79`](https://github.com/Shopify/ui-extensions/commit/aad2fb797ef8d9da4c729cdae78f67019520cecf) Thanks [@lauramann](https://github.com/lauramann)! - Adds buyButtonMajor to source in CustomerSegmentationTemplate

- [#1043](https://github.com/Shopify/ui-extensions/pull/1043) [`1db18001`](https://github.com/Shopify/ui-extensions/commit/1db18001ee1e3cdcc421b9078db72f498bd4991f) Thanks [@olavoasantos](https://github.com/olavoasantos)! - Add Text component to the Admin surface

## 2022.10.6

### Patch Changes

- [#717](https://github.com/Shopify/ui-extensions/pull/717) [`5c2f511b`](https://github.com/Shopify/ui-extensions/commit/5c2f511bbea3b4f36fc9c63f79089a79a90ccf26) Thanks [@vividviolet](https://github.com/vividviolet)! - Fix exports for Checkout's surface

## 2022.10.5

### Patch Changes

- [#661](https://github.com/Shopify/ui-extensions/pull/661) [`2bef7a10`](https://github.com/Shopify/ui-extensions/commit/2bef7a10d32f80651d2cfa5ac528f551e4ab8b24) Thanks [@lemonmade](https://github.com/lemonmade)! - Bring in @shopify/checkout-ui-extensions@0.22.0
