# @shopify/ui-extensions-tester

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
