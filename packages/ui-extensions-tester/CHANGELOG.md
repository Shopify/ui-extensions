# @shopify/ui-extensions-tester

## 2026.10.0-rc.6

### Patch Changes

- Updated dependencies [[`3001369`](https://github.com/Shopify/ui-extensions/commit/3001369d03fe3f12d8750ce73ad3e544392e6289), [`2ff93b3`](https://github.com/Shopify/ui-extensions/commit/2ff93b334fdd7332bd3cb938ab31b0b20f336236), [`bfe153f`](https://github.com/Shopify/ui-extensions/commit/bfe153f855cd64985ebad152c3a5fa5ae0f2fdc0)]:
  - @shopify/ui-extensions@2026.10.0-rc.6

## 2026.10.0-rc.5

### Major Changes

- [#4612](https://github.com/Shopify/ui-extensions/pull/4612) [`8e59844`](https://github.com/Shopify/ui-extensions/commit/8e59844f885f3df4e409964b5df370e5a58c7f21) Thanks [@aaronschubert0](https://github.com/aaronschubert0)! - Remove the POS Action API (`shopify.action.presentModal()`) from action render targets (`*.action.render`).

  Action render targets are themselves the modal destination that `presentModal()` opens, so exposing the Action API there had no meaningful destination — calling `shopify.action.presentModal()` from `pos.cart.line-item-details.action.render` (the one action render target that still exposed it) pushed another instance of the same target onto the navigation stack, rendering a duplicate modal on top of the already-open one.

  Action render targets now expose only `ActionTargetApi` plus their contextual APIs, matching every other `*.action.render` target. Extensions that need in-workflow navigation should use the Navigation API (`shopify.navigation`). This is a versioned breaking change: the surface is removed for API versions `2026-10` and later; older API versions keep their published types.

### Patch Changes

- Updated dependencies [[`d8b03c9`](https://github.com/Shopify/ui-extensions/commit/d8b03c99ac71e227d55743a5da657b94575e31b7), [`8e59844`](https://github.com/Shopify/ui-extensions/commit/8e59844f885f3df4e409964b5df370e5a58c7f21)]:
  - @shopify/ui-extensions@2026.10.0-rc.5

## 2026.10.0-rc.4

### Minor Changes

- [#4235](https://github.com/Shopify/ui-extensions/pull/4235) [`54b934a`](https://github.com/Shopify/ui-extensions/commit/54b934a59bd2709c7976d85d8210d7d8d42d2e56) Thanks [@vctrchu](https://github.com/vctrchu)! - Add Subscribable Storage to the POS Storage interface for reactive cross-target communication.

### Patch Changes

- Updated dependencies [[`54b934a`](https://github.com/Shopify/ui-extensions/commit/54b934a59bd2709c7976d85d8210d7d8d42d2e56)]:
  - @shopify/ui-extensions@2026.10.0-rc.4

## 2026.10.0-rc.3

### Patch Changes

- Updated dependencies [[`72e6b9d`](https://github.com/Shopify/ui-extensions/commit/72e6b9d54806606ef60f9634c1efa60e6894e36d)]:
  - @shopify/ui-extensions@2026.10.0-rc.3

## 2026.10.0-rc.2

### Minor Changes

- [#4600](https://github.com/Shopify/ui-extensions/pull/4600) [`54c52f0`](https://github.com/Shopify/ui-extensions/commit/54c52f0a2731a48e7c1745cad4787c85fd9b04e1) Thanks [@one20](https://github.com/one20)! - Add Product Configuration should-render targets

### Patch Changes

- Updated dependencies [[`54c52f0`](https://github.com/Shopify/ui-extensions/commit/54c52f0a2731a48e7c1745cad4787c85fd9b04e1)]:
  - @shopify/ui-extensions@2026.10.0-rc.2

## 2026.10.0-rc.1

### Major Changes

- [#4600](https://github.com/Shopify/ui-extensions/pull/4600) [`8152f17`](https://github.com/Shopify/ui-extensions/commit/8152f17ff00eb87e09b3189a59223fb65405007a) Thanks [@andrewmcgov](https://github.com/andrewmcgov)! - 2026-10-rc release

### Patch Changes

- Updated dependencies [[`ae2cd13`](https://github.com/Shopify/ui-extensions/commit/ae2cd13acee575bef8ed5e6049cdb59da433f427), [`8152f17`](https://github.com/Shopify/ui-extensions/commit/8152f17ff00eb87e09b3189a59223fb65405007a)]:
  - @shopify/ui-extensions@2026.10.0-rc.1

## 2026.7.1

### Patch Changes

- Updated dependencies [[`a87a7b3`](https://github.com/Shopify/ui-extensions/commit/a87a7b3943d46ea75e522527d152b3e50ef1bbd5)]:
  - @shopify/ui-extensions@2026.7.1

## 2026.7.0

### Minor Changes

- [#4489](https://github.com/Shopify/ui-extensions/pull/4489) [`8f27436`](https://github.com/Shopify/ui-extensions/commit/8f274366bdae412475113320e77bf1b6042ee735) Thanks [@akhayoon](https://github.com/akhayoon)! - Add `session.staffMember` for POS UI extensions so extensions can read and subscribe to the currently pinned staff member.

### Patch Changes

- [#4491](https://github.com/Shopify/ui-extensions/pull/4491) [`2399687`](https://github.com/Shopify/ui-extensions/commit/23996878ba8d12aa290a14b0f267d28ead3781f7) Thanks [@jasonblickhan](https://github.com/jasonblickhan)! - Add `admin.abandoned-checkout-index.action.render` and `admin.abandoned-checkout-index.action.should-render` extension targets for the abandoned checkout index page. This mirrors the action targets already available on other resource index pages (orders, customers, products, draft orders, etc.) and unblocks `admin.abandoned-checkout-index.action.link` admin link extensions.

- [#4468](https://github.com/Shopify/ui-extensions/pull/4468) [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Narrow `AppHomeApi.intents` to a new `AppHomeIntents` shape that exposes a signal-like `request` so the runtime can stream link intents into a long-lived `admin.app.home.render` extension. `WithGeneratedIntents` continues to narrow `request.value` to the CLI-generated variants.

- [#4468](https://github.com/Shopify/ui-extensions/pull/4468) [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Expose the `Tools` API on `AppHomeApi` so `admin.app.home.render` extensions can call `shopify.tools.register(...)` even before the CLI generates typed overloads. Adds a matching mock to `@shopify/ui-extensions-tester`.

- [#4499](https://github.com/Shopify/ui-extensions/pull/4499) [`e0e4f00`](https://github.com/Shopify/ui-extensions/commit/e0e4f003cd508ded2eafb0f3194c8ac92092ea51) Thanks [@charlesdobson](https://github.com/charlesdobson)! - Add `pick` action and `shopify/File` resource type to the admin Intents API, enabling extensions to open the file picker via `intents.invoke('pick:shopify/File', …)`.

- [#4544](https://github.com/Shopify/ui-extensions/pull/4544) [`7a403f6`](https://github.com/Shopify/ui-extensions/commit/7a403f6ef14e9f7234d5bda2634b7c3b75770e82) Thanks [@vctrchu](https://github.com/vctrchu)! - Remove native `Event` inheritance from POS event payload types.

- [#4535](https://github.com/Shopify/ui-extensions/pull/4535) [`d70009a`](https://github.com/Shopify/ui-extensions/commit/d70009a05130b86c296f59463d74e40e3ca4afe1) Thanks [@vctrchu](https://github.com/vctrchu)! - Remove the deprecated POS `.observe` event extension targets: `pos.transaction-complete.event.observe`, `pos.cash-tracking-session-start.event.observe`, `pos.cash-tracking-session-complete.event.observe`, and `pos.cart-update.event.observe`. These were early-access targets with effectively no production usage.

  Use the `pos.app.ready.data` background target instead: `shopify.addEventListener('transactioncomplete' | 'cashtrackingsessionstart' | 'cashtrackingsessioncomplete', callback)` for the event targets, and `shopify.cart.current.subscribe()` for cart updates.

  This also removes the `EventExtensionTargets`/`EventExtensionTarget` types and the `TransactionCompleteData`, `CashTrackingSessionStartData`, `CashTrackingSessionCompleteData`, and `CartUpdateEventData` payload types. The receipt-target type `TransactionCompleteWithReprintData` is unchanged.

- [#4349](https://github.com/Shopify/ui-extensions/pull/4349) [`f2b2b10`](https://github.com/Shopify/ui-extensions/commit/f2b2b10e99c4672c38b83cc048c2de93abbb7444) Thanks [@vividviolet](https://github.com/vividviolet)! - Publish package with admin.app.home.render target

- Updated dependencies [[`2399687`](https://github.com/Shopify/ui-extensions/commit/23996878ba8d12aa290a14b0f267d28ead3781f7), [`234aead`](https://github.com/Shopify/ui-extensions/commit/234aead78ce9ac90077a67fbc219897832aafd74), [`5d1769d`](https://github.com/Shopify/ui-extensions/commit/5d1769da4bba2d7cb7630f21dd0a34d75d993032), [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5), [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5), [`e0e4f00`](https://github.com/Shopify/ui-extensions/commit/e0e4f003cd508ded2eafb0f3194c8ac92092ea51), [`be8c9e2`](https://github.com/Shopify/ui-extensions/commit/be8c9e206525a41f2544810a328d901e2cdcbb95), [`b965a97`](https://github.com/Shopify/ui-extensions/commit/b965a97767d71320ea31293b94cc13e39ccd5893), [`338a696`](https://github.com/Shopify/ui-extensions/commit/338a696739672a058813810771d737d84bee5559), [`d607e02`](https://github.com/Shopify/ui-extensions/commit/d607e026f6652eafa19a1a3c8352a431b9ecc47b), [`19794cd`](https://github.com/Shopify/ui-extensions/commit/19794cd8ab69f661442b71891ece2a5bccd7efa1), [`060e669`](https://github.com/Shopify/ui-extensions/commit/060e669fb5ff34b30f7e8a8fb1b2696e038a4938), [`3785596`](https://github.com/Shopify/ui-extensions/commit/3785596844eb8ba8e56b6c2a9f0459b72e43d480), [`bf2184a`](https://github.com/Shopify/ui-extensions/commit/bf2184a8d55a756533c46a60bf022653b7bfc423), [`ea1b6f4`](https://github.com/Shopify/ui-extensions/commit/ea1b6f4c725cc61efa03f4d859ba82ea3d50c2d1), [`fe62c86`](https://github.com/Shopify/ui-extensions/commit/fe62c86217956ebf72c6b8e63b81d226f3a97da4), [`c9f995c`](https://github.com/Shopify/ui-extensions/commit/c9f995c0e40b9166123f7b135c3247bbd8e3c36d), [`cc5f4b3`](https://github.com/Shopify/ui-extensions/commit/cc5f4b3d624bcf12bb0ce4d8dc7d71ee0494ad1e), [`7a403f6`](https://github.com/Shopify/ui-extensions/commit/7a403f6ef14e9f7234d5bda2634b7c3b75770e82), [`9608767`](https://github.com/Shopify/ui-extensions/commit/96087678e4b82d80afd1efb5f9974f3e988024cd), [`d70009a`](https://github.com/Shopify/ui-extensions/commit/d70009a05130b86c296f59463d74e40e3ca4afe1), [`7129e7d`](https://github.com/Shopify/ui-extensions/commit/7129e7d73b03c7127cd4a255a668c15f800e2d9b), [`f2b2b10`](https://github.com/Shopify/ui-extensions/commit/f2b2b10e99c4672c38b83cc048c2de93abbb7444), [`f972657`](https://github.com/Shopify/ui-extensions/commit/f972657cc48c1b6a674f55ccb586e56d5be35e80), [`8f27436`](https://github.com/Shopify/ui-extensions/commit/8f274366bdae412475113320e77bf1b6042ee735), [`eb74ecc`](https://github.com/Shopify/ui-extensions/commit/eb74eccd35fdf7b6a780320c6eb3830cee7ea24f)]:
  - @shopify/ui-extensions@2026.7.0

## 2026.7.0-rc.7

### Patch Changes

- Updated dependencies [[`f972657`](https://github.com/Shopify/ui-extensions/commit/f972657cc48c1b6a674f55ccb586e56d5be35e80)]:
  - @shopify/ui-extensions@2026.7.0-rc.7

## 2026.7.0-rc.6

### Minor Changes

- [#4489](https://github.com/Shopify/ui-extensions/pull/4489) [`8f27436`](https://github.com/Shopify/ui-extensions/commit/8f274366bdae412475113320e77bf1b6042ee735) Thanks [@akhayoon](https://github.com/akhayoon)! - Add `session.staffMember` for POS UI extensions so extensions can read and subscribe to the currently pinned staff member.

### Patch Changes

- [#4491](https://github.com/Shopify/ui-extensions/pull/4491) [`2399687`](https://github.com/Shopify/ui-extensions/commit/23996878ba8d12aa290a14b0f267d28ead3781f7) Thanks [@jasonblickhan](https://github.com/jasonblickhan)! - Add `admin.abandoned-checkout-index.action.render` and `admin.abandoned-checkout-index.action.should-render` extension targets for the abandoned checkout index page. This mirrors the action targets already available on other resource index pages (orders, customers, products, draft orders, etc.) and unblocks `admin.abandoned-checkout-index.action.link` admin link extensions.

- [#4468](https://github.com/Shopify/ui-extensions/pull/4468) [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Narrow `AppHomeApi.intents` to a new `AppHomeIntents` shape that exposes a signal-like `request` so the runtime can stream link intents into a long-lived `admin.app.home.render` extension. `WithGeneratedIntents` continues to narrow `request.value` to the CLI-generated variants.

- [#4468](https://github.com/Shopify/ui-extensions/pull/4468) [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5) Thanks [@JoviDeCroock](https://github.com/JoviDeCroock)! - Expose the `Tools` API on `AppHomeApi` so `admin.app.home.render` extensions can call `shopify.tools.register(...)` even before the CLI generates typed overloads. Adds a matching mock to `@shopify/ui-extensions-tester`.

- Updated dependencies [[`2399687`](https://github.com/Shopify/ui-extensions/commit/23996878ba8d12aa290a14b0f267d28ead3781f7), [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5), [`84c8acd`](https://github.com/Shopify/ui-extensions/commit/84c8acd397c77dd9f34f75b93f0b3516e66f08a5), [`338a696`](https://github.com/Shopify/ui-extensions/commit/338a696739672a058813810771d737d84bee5559), [`d607e02`](https://github.com/Shopify/ui-extensions/commit/d607e026f6652eafa19a1a3c8352a431b9ecc47b), [`fe62c86`](https://github.com/Shopify/ui-extensions/commit/fe62c86217956ebf72c6b8e63b81d226f3a97da4), [`cc5f4b3`](https://github.com/Shopify/ui-extensions/commit/cc5f4b3d624bcf12bb0ce4d8dc7d71ee0494ad1e), [`8f27436`](https://github.com/Shopify/ui-extensions/commit/8f274366bdae412475113320e77bf1b6042ee735)]:
  - @shopify/ui-extensions@2026.7.0-rc.6

## 2026.7.0-rc.5

### Patch Changes

- Updated dependencies [[`be8c9e2`](https://github.com/Shopify/ui-extensions/commit/be8c9e206525a41f2544810a328d901e2cdcbb95)]:
  - @shopify/ui-extensions@2026.7.0-rc.5

## 2026.7.0-rc.4

### Patch Changes

- Updated dependencies [[`060e669`](https://github.com/Shopify/ui-extensions/commit/060e669fb5ff34b30f7e8a8fb1b2696e038a4938)]:
  - @shopify/ui-extensions@2026.7.0-rc.4

## 2026.7.0-rc.3

### Patch Changes

- [#4349](https://github.com/Shopify/ui-extensions/pull/4349) [`f2b2b10`](https://github.com/Shopify/ui-extensions/commit/f2b2b10e99c4672c38b83cc048c2de93abbb7444) Thanks [@vividviolet](https://github.com/vividviolet)! - Publish package with admin.app.home.render target

- Updated dependencies [[`234aead`](https://github.com/Shopify/ui-extensions/commit/234aead78ce9ac90077a67fbc219897832aafd74), [`ea1b6f4`](https://github.com/Shopify/ui-extensions/commit/ea1b6f4c725cc61efa03f4d859ba82ea3d50c2d1), [`f2b2b10`](https://github.com/Shopify/ui-extensions/commit/f2b2b10e99c4672c38b83cc048c2de93abbb7444)]:
  - @shopify/ui-extensions@2026.7.0-rc.3

## 2026.7.0-rc.2

### Patch Changes

- Updated dependencies [[`bf2184a`](https://github.com/Shopify/ui-extensions/commit/bf2184a8d55a756533c46a60bf022653b7bfc423)]:
  - @shopify/ui-extensions@2026.7.0-rc.2

## 2026.7.0-rc.1

### Major Changes

- [`eb74ecc`](https://github.com/Shopify/ui-extensions/commit/eb74eccd35fdf7b6a780320c6eb3830cee7ea24f) Thanks [@lrsterrett](https://github.com/lrsterrett)! - 2026-07-rc release

### Patch Changes

- Updated dependencies [[`eb74ecc`](https://github.com/Shopify/ui-extensions/commit/eb74eccd35fdf7b6a780320c6eb3830cee7ea24f)]:
  - @shopify/ui-extensions@2026.7.0-rc.1

## 2026.4.0

### Minor Changes

- [#4114](https://github.com/Shopify/ui-extensions/pull/4114) [`9556ec6`](https://github.com/Shopify/ui-extensions/commit/9556ec6da13bc810bb1967f61afda2e9b4613884) Thanks [@kumar303](https://github.com/kumar303)! - Add `setUpExtension()` for Explicit Resource Management (`using` keyword) support.

### Patch Changes

- [#4148](https://github.com/Shopify/ui-extensions/pull/4148) [`3b9614b`](https://github.com/Shopify/ui-extensions/commit/3b9614b572b7eb84715dc7656364ad38c9a4ead2) Thanks [@lrsterrett](https://github.com/lrsterrett)! - Remove types for `ui` from checkout ui extension api as `ui` wasn't supported since 2025.10.0 For reference, closing a modal can be done declaritively on the modal polaris component, instead of the deprecated `ui.overlay.close`

- Updated dependencies [[`a5c2bbf`](https://github.com/Shopify/ui-extensions/commit/a5c2bbf71decdf210d46ad4d6dc814faa6c0912f), [`db7cec2`](https://github.com/Shopify/ui-extensions/commit/db7cec21f1fd428115d4540158f235a714b585de), [`3b9614b`](https://github.com/Shopify/ui-extensions/commit/3b9614b572b7eb84715dc7656364ad38c9a4ead2), [`6c3ac55`](https://github.com/Shopify/ui-extensions/commit/6c3ac5559c50553314cdea0993e39fcf853cc3d0), [`acd9002`](https://github.com/Shopify/ui-extensions/commit/acd9002d9d8768732bbbf19eccae268ffde9a07b), [`12df6f9`](https://github.com/Shopify/ui-extensions/commit/12df6f92b68bca036132b3c54a69e28e15330a65), [`21566b3`](https://github.com/Shopify/ui-extensions/commit/21566b391651653c8e3d626811d5b787b26f9fe3), [`b60a9a1`](https://github.com/Shopify/ui-extensions/commit/b60a9a18a1da763fe8c9c01ce4911c4754926cce), [`7408712`](https://github.com/Shopify/ui-extensions/commit/7408712b9d85eb4464560bf2078aa2a81a1ff3af), [`d1c35f2`](https://github.com/Shopify/ui-extensions/commit/d1c35f25cc86dfa1dcf8934a7b7cf5fa9856846a), [`77d447c`](https://github.com/Shopify/ui-extensions/commit/77d447c7f34151d3af49f6b7c4bc987558eec292)]:
  - @shopify/ui-extensions@2026.4.0

## 2026.4.0-rc.3

### Minor Changes

- [#4114](https://github.com/Shopify/ui-extensions/pull/4114) [`9556ec6`](https://github.com/Shopify/ui-extensions/commit/9556ec6da13bc810bb1967f61afda2e9b4613884) Thanks [@kumar303](https://github.com/kumar303)! - Add `setUpExtension()` for Explicit Resource Management (`using` keyword) support.

### Patch Changes

- [#4148](https://github.com/Shopify/ui-extensions/pull/4148) [`3b9614b`](https://github.com/Shopify/ui-extensions/commit/3b9614b572b7eb84715dc7656364ad38c9a4ead2) Thanks [@lrsterrett](https://github.com/lrsterrett)! - Remove types for `ui` from checkout ui extension api as `ui` wasn't supported since 2025.10.0 For reference, closing a modal can be done declaritively on the modal polaris component, instead of the deprecated `ui.overlay.close`

- Updated dependencies [[`3b9614b`](https://github.com/Shopify/ui-extensions/commit/3b9614b572b7eb84715dc7656364ad38c9a4ead2), [`7408712`](https://github.com/Shopify/ui-extensions/commit/7408712b9d85eb4464560bf2078aa2a81a1ff3af)]:
  - @shopify/ui-extensions@2026.4.0-rc.3

## 2026.4.0-rc.2

### Patch Changes

- Updated dependencies [[`db7cec2`](https://github.com/Shopify/ui-extensions/commit/db7cec21f1fd428115d4540158f235a714b585de), [`6c3ac55`](https://github.com/Shopify/ui-extensions/commit/6c3ac5559c50553314cdea0993e39fcf853cc3d0), [`12df6f9`](https://github.com/Shopify/ui-extensions/commit/12df6f92b68bca036132b3c54a69e28e15330a65), [`21566b3`](https://github.com/Shopify/ui-extensions/commit/21566b391651653c8e3d626811d5b787b26f9fe3), [`b60a9a1`](https://github.com/Shopify/ui-extensions/commit/b60a9a18a1da763fe8c9c01ce4911c4754926cce)]:
  - @shopify/ui-extensions@2026.4.0-rc.2
