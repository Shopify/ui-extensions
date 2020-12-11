# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.8.2](https://github.com/Shopify/argo-admin/compare/v0.8.1...v0.8.2) (2020-12-11)


### Bug Fixes

* fix webpack alias for argo-admin-cli ([721d176](https://github.com/Shopify/argo-admin/commit/721d1761a36fc59d3327120ffeaf4c48bac66a03))





## [0.8.1](https://github.com/Shopify/argo-admin/compare/v0.8.0...v0.8.1) (2020-12-11)


### Bug Fixes

* fix depdenencies in argo-admin-cli ([3cd72fe](https://github.com/Shopify/argo-admin/commit/3cd72fe73e2499c8ad7c14dfd5a373a059cd7b5c))
* use github badge ([f275d1c](https://github.com/Shopify/argo-admin/commit/f275d1c00f3e978ef3aece207086c9530271d314))
* use proper .gitignore relative folder syntax ([ff909e2](https://github.com/Shopify/argo-admin/commit/ff909e25e54e4e9520fdc5a8a163e64664655399))





# 0.8.0 (2020-12-08)


### Bug Fixes

* **host:** load Resize Observer polyfll when not supported ([ef727d1](https://github.com/Shopify/argo-admin/commit/ef727d1d30262eb26034da80d437d11de95008bb))
* allow overriding denyList ([e10f438](https://github.com/Shopify/argo-admin/commit/e10f4387c521a4b493af7e9d942b12ca2d011ced))
* async cause callbacks not to work ([#556](https://github.com/Shopify/argo-admin/issues/556)) ([e45c1b0](https://github.com/Shopify/argo-admin/commit/e45c1b0695d4ead12e0c0c5f558dee8038699659))
* button with icon is centered when displayed without text ([#1010](https://github.com/Shopify/argo-admin/issues/1010)) ([1f0133b](https://github.com/Shopify/argo-admin/commit/1f0133b85ba35343f02f6aee885e99ab2b76a2c1))
* card property names ([1ca05d7](https://github.com/Shopify/argo-admin/commit/1ca05d72be45e751d408fec3b1062b355a61344b))
* clean up hooks inside ArgoExtension ([b44d393](https://github.com/Shopify/argo-admin/commit/b44d3937942d4092fd9bd97c513b548349c88504))
* clean up webpack configs and package.json ([51becc4](https://github.com/Shopify/argo-admin/commit/51becc48730c30e18533f521eb969103003deedb))
* correct name SubscriptionManagement ([#496](https://github.com/Shopify/argo-admin/issues/496)) ([3577d00](https://github.com/Shopify/argo-admin/commit/3577d009f9a416c4636fdb1a7ebd29379020bc0b))
* fix hotswap nested array object in remote-ui ([9be1bf6](https://github.com/Shopify/argo-admin/commit/9be1bf678a0f575150ab0d913223c452737e389f))
* fix infinite loop due to callback arguments ([a409c66](https://github.com/Shopify/argo-admin/commit/a409c669fe4f7a325b4b611374894b92b144dd0a))
* fix layout extension api ([d49ff2b](https://github.com/Shopify/argo-admin/commit/d49ff2b12ded8ff7d944e741d11bfb32b9eea5b3))
* fix locale extension api ([d00a519](https://github.com/Shopify/argo-admin/commit/d00a519f9ebd6b7e1a226a76a9b931a5170e7dc0))
* fix maximum stack size in host components ([650af48](https://github.com/Shopify/argo-admin/commit/650af484d9fa0e4ba86971ef78855bb8915545b1))
* fix missing return value for hotswap container api ([34e9b45](https://github.com/Shopify/argo-admin/commit/34e9b4536e55cca3956dbe1a77049f76ec9dd0dd))
* fix nested stack item layout issue ([768eb1c](https://github.com/Shopify/argo-admin/commit/768eb1cddaee94be61f84e85ac0f4710ac7aeb6d))
* fix OptionList ([d05553a](https://github.com/Shopify/argo-admin/commit/d05553a1affca5f0b9545580b158a5fc25911a95))
* fix remote-ui hotswap nested function ([76e31cd](https://github.com/Shopify/argo-admin/commit/76e31cd59db8a1609c876fd81ae2f79d4bbe8437))
* fix TextField component props ([f5809c9](https://github.com/Shopify/argo-admin/commit/f5809c92f10e0d5f79fb33f864da60a38bd32670))
* fix TextField onBlur and onFocus ([419ade6](https://github.com/Shopify/argo-admin/commit/419ade659ff79dc8d63db4bcc379930ab0f7b1b0))
* improve readme structure ([b42da3c](https://github.com/Shopify/argo-admin/commit/b42da3c1866f864559bc69176316602cc4c13a1b))
* input types and Argo modal infinite re-render issue ([15331cb](https://github.com/Shopify/argo-admin/commit/15331cb251092c1e7984a8ba0e59afc9a64f6495))
* make links safe ([bac28f0](https://github.com/Shopify/argo-admin/commit/bac28f067f3861482adb872be2ba36cebdc8f4f8))
* re-add card action ([#602](https://github.com/Shopify/argo-admin/issues/602)) ([cdd6785](https://github.com/Shopify/argo-admin/commit/cdd6785c47417d4f6fe2e8e94bab64cb758a79b8))
* re-enable build check in CI ([91fb603](https://github.com/Shopify/argo-admin/commit/91fb60334dad07c58b0759333bba22ef45818056))
* remove done from data api ([88c00d6](https://github.com/Shopify/argo-admin/commit/88c00d6f562783772716fceadf78df949c1d703d))
* remove id from TextField.onClearButtonClick ([9b78df8](https://github.com/Shopify/argo-admin/commit/9b78df8131eb21d38752182052d6d796466eead2))
* remove OptionList from Subscription extension point ([45b4d20](https://github.com/Shopify/argo-admin/commit/45b4d202be63acbc677cb33e4c75a13f22ac8f23))
* reset independent versioning ([5e6761a](https://github.com/Shopify/argo-admin/commit/5e6761a0075b57538aacfc28f5437e647930a450))
* resource list onQueryClear reset the list items ([9209240](https://github.com/Shopify/argo-admin/commit/920924045cb94af2f81c3dc7b056883540e4a3f5))
* standardize form field naming ([5391b59](https://github.com/Shopify/argo-admin/commit/5391b598a9e6f516f2d4aff603d9aeee634d67e3))
* text-field onchange error ([#1015](https://github.com/Shopify/argo-admin/issues/1015)) ([d76197e](https://github.com/Shopify/argo-admin/commit/d76197e12b6ce658136921550c33253aa01f7dd0))
* update polaris and polaris icons ([4da7004](https://github.com/Shopify/argo-admin/commit/4da700468637e2a12b9f48c86f9599336b52869c))
* update readme with more accurate info about remote-ui functionality ([ab66a0c](https://github.com/Shopify/argo-admin/commit/ab66a0c621196a4bde71a48bff1f9ae54337a551))
* **app-chrome-container:** remove unnecessary conditional ([cd99192](https://github.com/Shopify/argo-admin/commit/cd99192b17fae7a72d16f6b84f25c1e3ca398c6d))
* **build-consumer:** add `argo-admin-react` package ([982a449](https://github.com/Shopify/argo-admin/commit/982a4499a1f849ef62f96299ba2d551f4338c229))
* **playground:** add style override for top-level cards ([719ef7f](https://github.com/Shopify/argo-admin/commit/719ef7fa52ca2cef94662175804230e990a186a7))
* **playground:** fix missing icon, polaris overrides ([a890eaf](https://github.com/Shopify/argo-admin/commit/a890eafb504e58e34bb4a32424d0241c03e1365a))
* **playground:** inject script after content ([d47b830](https://github.com/Shopify/argo-admin/commit/d47b830f9837585a6f2fe1472d9e00af7f7dc8ea))
* **playground:** main menu icons ([2b25be6](https://github.com/Shopify/argo-admin/commit/2b25be6d959f4a5c374920905cac7e42a38d49df))
* queued state ([#1022](https://github.com/Shopify/argo-admin/issues/1022)) ([ce59897](https://github.com/Shopify/argo-admin/commit/ce598976e3bcab839d6e4a4beb805ce785600d1d))
* queued state ([#1027](https://github.com/Shopify/argo-admin/issues/1027)) ([bd65dde](https://github.com/Shopify/argo-admin/commit/bd65dde232c9805d13c311288b11599f7a7da902))
* replace render error image ([#500](https://github.com/Shopify/argo-admin/issues/500)) ([dc87105](https://github.com/Shopify/argo-admin/commit/dc87105f9ee6352fffd13611bb3c42e0bd4a4f7e))
* simplify stack component to remove forcing key prop ([342830d](https://github.com/Shopify/argo-admin/commit/342830de650f5cdc438b2ab2ec6c5e41ad1826c3))
* update SessionToken interface to reflect undefined state ([9569eef](https://github.com/Shopify/argo-admin/commit/9569eef64c70101059b3b53ea2abfedbe64f383e))
* **components:** add items prop to List ([b986475](https://github.com/Shopify/argo-admin/commit/b986475d108088fc2b0d7a0d03c1f88f5e736742))
* **components:** fix broken reference ([f1ad9bd](https://github.com/Shopify/argo-admin/commit/f1ad9bd52d365db8780e881b947484e99fbc1841))
* **components:** fix text elements rendering children ([441a1bc](https://github.com/Shopify/argo-admin/commit/441a1bc1390f0b6802993d9ae05c0a42f3487b8f))
* **components:** remove internal state management of form components ([1e09d74](https://github.com/Shopify/argo-admin/commit/1e09d74ca5010cdaac683ddd4d20b1c0a81c562e))
* **playground:** extract Repl state management into a reducer ([cc01879](https://github.com/Shopify/argo-admin/commit/cc01879093461e850ba08e307128482c283cf7a3))
* **playground:** make repl work with the new data source ([f1e9c6f](https://github.com/Shopify/argo-admin/commit/f1e9c6f0b90ebd83b57c77f2e10ee23107a261c6))
* **playground:** remove non-relevant snippets ([1a719fc](https://github.com/Shopify/argo-admin/commit/1a719fc8e559710c6f44d52ab9df7af318831f1f))
* **playground:** retain function calls over rpc ([2c00688](https://github.com/Shopify/argo-admin/commit/2c0068884e870f10e365a3ea9309f18704073d2e))
* **playground:** unify Lisp and JSON REPL ([0e022f9](https://github.com/Shopify/argo-admin/commit/0e022f935726aa7f9013db9e0b97fefdb2a5500e))
* **playground:** update lisp snippets ([46df783](https://github.com/Shopify/argo-admin/commit/46df783f1de701c466352988a20ce750cc55d459))
* **playground:** update to the latest version of the renderer ([4c62235](https://github.com/Shopify/argo-admin/commit/4c62235b36f293caba57963215b9f5d148464259))
* **playground:** use new data source ([4d13305](https://github.com/Shopify/argo-admin/commit/4d13305d150c0d74f6d78353951b147782b980fe))
* **renderer:** add if() to stdlib ([ddc651b](https://github.com/Shopify/argo-admin/commit/ddc651ba6038fc58bda1078c6a22c4f04dc158cd))
* **renderer:** externalize data management ([3197a53](https://github.com/Shopify/argo-admin/commit/3197a53ba5f129075372abcd6e87606e464208e6))
* **renderer:** force UI update after external code or state change ([d5947f1](https://github.com/Shopify/argo-admin/commit/d5947f12fdd252a64c15f30a1eda9dc658e1ad1c))
* **renderer:** new useDataSource interface ([6f02327](https://github.com/Shopify/argo-admin/commit/6f023277390a8cb2fdc370cbc4dc7a19651046c1))
* **renderer:** re-evaluate code only when it has changed ([17dd943](https://github.com/Shopify/argo-admin/commit/17dd943deca42c4d9a3fc5741de0d319e7b9d2a3))
* **renderer:** reset data source on prop change ([0ca1d12](https://github.com/Shopify/argo-admin/commit/0ca1d12d1bd54e8bfcced4ebe97a53d7ab22a31f))
* **renderer:** revert re-evaluate code only when it has changed ([e2866b1](https://github.com/Shopify/argo-admin/commit/e2866b1a53c673fe1655ff4d34579aeff96bb7bb))
* **renderer:** revert to old state management ([474425c](https://github.com/Shopify/argo-admin/commit/474425c12e84ec3ce949ff23dd6f2da726fc1dcd))
* **renderer:** simplify and test Renderer ([ae9e0b2](https://github.com/Shopify/argo-admin/commit/ae9e0b2b690e75e2367d6065c167563f6382e1b0))
* **renderer:** update packages ([6809a5f](https://github.com/Shopify/argo-admin/commit/6809a5f2cf737daeca93a1f694506e6247bdc0b8))
* actually remove private key from package.json ([e200056](https://github.com/Shopify/argo-admin/commit/e200056d92b07e94f3df7fb27344d20425037744))
* add lerna version to lerna.json ([443ee61](https://github.com/Shopify/argo-admin/commit/443ee61f30bce0c797e355691f1a2e44934ce304))
* add missing dependency, strscan, to renderer ([7a39b72](https://github.com/Shopify/argo-admin/commit/7a39b72ea7c905ec17ef1bf93b7c5fb8a97db116))
* downgrade Polaris to 3.x ([2b87a2a](https://github.com/Shopify/argo-admin/commit/2b87a2a5175c71638bb7235443814ceef2b1743d))
* manually specify package deps ([70d48ae](https://github.com/Shopify/argo-admin/commit/70d48ae483de8406d00e8663dff6796fd6418aab))
* Remove private key from package.json ([873b8fc](https://github.com/Shopify/argo-admin/commit/873b8fceb8e81ce6db8acdbe0fdbd6b6a5617c73))
* tweak npm/lerna configs ([77c5085](https://github.com/Shopify/argo-admin/commit/77c50854026c35b1523ead456f1175b25a875ae8))


### chore

* **components:** set up components package to use remote-ui ([c4f2f97](https://github.com/Shopify/argo-admin/commit/c4f2f973022e49bf34e7def253ef3c22221e9174))


### Features

* add argo modal container ([2511eaa](https://github.com/Shopify/argo-admin/commit/2511eaa457c12b20490b561bcf31cdd87f137538))
* add Badge component ([26abe81](https://github.com/Shopify/argo-admin/commit/26abe81165a612992c0d7d9fcbf0e312ec9cdcfc))
* add banner component ([35914bf](https://github.com/Shopify/argo-admin/commit/35914bfaad320ee1b07260edcf82bef78e3d8b9c))
* add blacklist sandbox for worker ([d4c37d3](https://github.com/Shopify/argo-admin/commit/d4c37d319b4433fce39fda151b59d384e1d7a809))
* add Button component ([1c2a41d](https://github.com/Shopify/argo-admin/commit/1c2a41d807d276d39f25dfbb4a876777f8fd95fb))
* add Checkbox component ([109c37b](https://github.com/Shopify/argo-admin/commit/109c37bc7561da100c5e8dd44df6c4cd324ccb17))
* add clearButton prop to Textfield ([feb1733](https://github.com/Shopify/argo-admin/commit/feb1733d119b0c88bbfd658371f8fb6d51025bab))
* add component groups ([#514](https://github.com/Shopify/argo-admin/issues/514)) ([11fb50b](https://github.com/Shopify/argo-admin/commit/11fb50b0ad910d923405535d109a9f220a83d9e3))
* add disabled prop to Button component ([0359815](https://github.com/Shopify/argo-admin/commit/0359815dcc346b002fe25e3dcecb2e637957dcbf))
* add extension point to api ([f30fd1c](https://github.com/Shopify/argo-admin/commit/f30fd1cef7adedd86e0025d5f3d397113f4e5f3a))
* add in-line errors to textfield component ([c0a2ee8](https://github.com/Shopify/argo-admin/commit/c0a2ee8257cffeb976166938c7dbc5e7b3e6b2ff))
* add link and toast components ([2830599](https://github.com/Shopify/argo-admin/commit/2830599aa686bf9c055c36078c9f7008819783c9))
* add LocaleInput ([6f6b88d](https://github.com/Shopify/argo-admin/commit/6f6b88d9c413829a07a412bcf23c8a629d9d547d))
* add MerchantMetafield extension point ([eeb975f](https://github.com/Shopify/argo-admin/commit/eeb975f850b155fa6619a7d7e03dafac68ac6e54))
* add mobile worker ([c0182ae](https://github.com/Shopify/argo-admin/commit/c0182ae5d49c3663b0d5385208136160f806e076))
* add Modal component ([9ee5b22](https://github.com/Shopify/argo-admin/commit/9ee5b221e43812cfaa8301593f54960ae714c7fb))
* add new subscription-management type ([96b4d90](https://github.com/Shopify/argo-admin/commit/96b4d9008cd80ab5195626e55685defc9e920e47))
* add number textfield ([26df79c](https://github.com/Shopify/argo-admin/commit/26df79cbc07e09f1eb8764ad00505fc448a86ea1))
* add product data input ([305d464](https://github.com/Shopify/argo-admin/commit/305d464dff656ee4fc3f702f36601ddba309eeec))
* add render timeout hook and example playground ([#473](https://github.com/Shopify/argo-admin/issues/473)) ([5976199](https://github.com/Shopify/argo-admin/commit/5976199b669d95ce539a021dc484148ef1f0d1bf))
* add ResizeObserver ([60ccf8b](https://github.com/Shopify/argo-admin/commit/60ccf8b16ba9ab88929d9798409947cc9d3a205a))
* add ResourceList component ([4d6dc99](https://github.com/Shopify/argo-admin/commit/4d6dc993ddb8a0dbe47f7a78ca45cc58dda6cda7))
* add Select component ([3ecb252](https://github.com/Shopify/argo-admin/commit/3ecb25206b5ac9762348a9f878ac41a323dae8e6))
* add SessionTokenInput ([e8532b9](https://github.com/Shopify/argo-admin/commit/e8532b986e403bdf7d10540284cd90b386dd4ab1))
* add Spinner component ([0c2a2e7](https://github.com/Shopify/argo-admin/commit/0c2a2e761bac18bc7f36ba05baefc73efe3c1c7a))
* add suffix prop to texrfield ([27e452f](https://github.com/Shopify/argo-admin/commit/27e452f043bcec7531713efbcb2ebcc974df73a2))
* add validation to select ([#521](https://github.com/Shopify/argo-admin/issues/521)) ([a13acd8](https://github.com/Shopify/argo-admin/commit/a13acd86c9545fe04a15f074ee79bf7b95dcd4de))
* added readyState no script ([#563](https://github.com/Shopify/argo-admin/issues/563)) ([afa23f7](https://github.com/Shopify/argo-admin/commit/afa23f7b8d604b7f0d4b9983d4be877e2e85e3e9))
* adds AppReviewList UI ([8367b1e](https://github.com/Shopify/argo-admin/commit/8367b1ef083cb3cd565d5e989faf2bb44d01bccf))
* adds StackItem component ([91a1eaf](https://github.com/Shopify/argo-admin/commit/91a1eaffcdf4e35e70a12d0565f6b1ec7b1e08a6))
* api consistency onclick to onpress ([6c68dd6](https://github.com/Shopify/argo-admin/commit/6c68dd6291cdaee34539c6a4357ba07f0190b075))
* consistent form api ([21b251e](https://github.com/Shopify/argo-admin/commit/21b251e0d1fec7e4de15eb1b2f66c36e57b4a383))
* data api ([#704](https://github.com/Shopify/argo-admin/issues/704)) ([ac25d95](https://github.com/Shopify/argo-admin/commit/ac25d951af5e048a83c81b78dfdb3c37a2b6b48a))
* data passing ([e510c12](https://github.com/Shopify/argo-admin/commit/e510c120143abab4e1ee4c15ea02191dc6c34428))
* enable 2 new extension points ([c2313f4](https://github.com/Shopify/argo-admin/commit/c2313f4a93a74dc8ff964504c7923b124cf8a028))
* enable displaying an error and loading state ([31d2a86](https://github.com/Shopify/argo-admin/commit/31d2a867a9248d5be4e1e98b8b4dee15031959a1))
* enable web worker to load inline app extension scripts ([847d874](https://github.com/Shopify/argo-admin/commit/847d874095dd0cbe0a5c956f645bd056d104a27f))
* error unsupported component ([#902](https://github.com/Shopify/argo-admin/issues/902)) ([938363e](https://github.com/Shopify/argo-admin/commit/938363e561225cdf24693f6a7e012016d37d851f))
* expose React for compiled bundle ([7e2bf60](https://github.com/Shopify/argo-admin/commit/7e2bf6089dddf1a82b095819f96caead4b94eaf7))
* extension point components ([#820](https://github.com/Shopify/argo-admin/issues/820)) ([9be8c61](https://github.com/Shopify/argo-admin/commit/9be8c61f7a567be8b1c2ec13156a5dd3422182d0))
* extract ArgoExtension and other extension input utils ([a7b4aff](https://github.com/Shopify/argo-admin/commit/a7b4aff35f7cf16a091bb056fa46a38a4eab0b4e))
* hook up modal action inputs ([9784bfe](https://github.com/Shopify/argo-admin/commit/9784bfe4bf5c5bade33b394bce1d79b93d255e46))
* hot-swap api ([#1096](https://github.com/Shopify/argo-admin/issues/1096)) ([473597b](https://github.com/Shopify/argo-admin/commit/473597bbacc846f194431a44ebb9c90a27b181d6))
* implement Select component ([798c333](https://github.com/Shopify/argo-admin/commit/798c3337e0025818939a753b1b5bb173b2bf50ee))
* radio and checkbox to use children not label ([e5c7705](https://github.com/Shopify/argo-admin/commit/e5c77051d6c3039aa40d912c699d049fa8d191a0))
* radio id and checked is optional ([9c3954e](https://github.com/Shopify/argo-admin/commit/9c3954e7852e0aa6d314a824c2e64dc68d967886))
* radio onchange gives value not id ([#914](https://github.com/Shopify/argo-admin/issues/914)) ([9202a9e](https://github.com/Shopify/argo-admin/commit/9202a9e16863153ceb686e5abdd604cee8b7841a))
* radiobutton ([0438e25](https://github.com/Shopify/argo-admin/commit/0438e25b15cdc504a03b2cdc28b9526e83ed2b15))
* radiobutton cleanup ([7ecdaec](https://github.com/Shopify/argo-admin/commit/7ecdaece6f5eab9da72866693b992547eff2db2a))
* remove extension point enum ([06479db](https://github.com/Shopify/argo-admin/commit/06479db477722dad8fa5625cbc99274a07916037))
* rename modal actions to container api ([50746d5](https://github.com/Shopify/argo-admin/commit/50746d52f7a46a87d6c51a6989fb93ebdec2953b))
* rename pressable to clickable ([e48be20](https://github.com/Shopify/argo-admin/commit/e48be20b3282f6299e225d4e7d937b2b0c70302a))
* rename radio button to radio ([5a15c0a](https://github.com/Shopify/argo-admin/commit/5a15c0a9ed25fb0b196252db059bd86601c72263))
* rename subscription management ([#973](https://github.com/Shopify/argo-admin/issues/973)) ([5752089](https://github.com/Shopify/argo-admin/commit/575208901f6e7a5b37d2d0dfb2799c59fdbee15b))
* slight design adjustments ([0e1f337](https://github.com/Shopify/argo-admin/commit/0e1f337d0452a0a45b4d59d0d430e23ce8c9a3e3))
* support screen size ([a6df892](https://github.com/Shopify/argo-admin/commit/a6df892ead47ce038a63a3e11698bc72b859cd96))
* toast ([#483](https://github.com/Shopify/argo-admin/issues/483)) ([0898253](https://github.com/Shopify/argo-admin/commit/08982538144fade980752c71597ed3e574eaa2a8))
* update data-api with container changes ([#761](https://github.com/Shopify/argo-admin/issues/761)) ([24308ed](https://github.com/Shopify/argo-admin/commit/24308ed9459b93373dc5218c79674dcd812cd308))
* upgrade remote-ui 1.5.0 ([#1121](https://github.com/Shopify/argo-admin/issues/1121)) ([1350755](https://github.com/Shopify/argo-admin/commit/13507554568ad75872f2bd10a3ef417956411639))
* **android:** use the _correct_ new AST format for android ([cd3d398](https://github.com/Shopify/argo-admin/commit/cd3d3982a7f1d3b0abeca386f8c42ce17617108b))
* **android:** use the new AST format for android ([48f5489](https://github.com/Shopify/argo-admin/commit/48f54892bedaa61145c76c97224dd637f285c453))
* **api:** connect extension to graphql ([59c8730](https://github.com/Shopify/argo-admin/commit/59c8730989b52f7522c8b8214716bd55e144985c))
* **app-chrome-container:** add playground example ([a1e314e](https://github.com/Shopify/argo-admin/commit/a1e314e845b1d573bb317eb5ba2a3373abfec1cb))
* **app-extensions-renderer:** add AppExtensions component ([#123](https://github.com/Shopify/argo-admin/issues/123)) ([330aef4](https://github.com/Shopify/argo-admin/commit/330aef450ce40062072fca8da7d788d311c27e1a))
* **app-overlay:** update header ([f34da64](https://github.com/Shopify/argo-admin/commit/f34da64b789aa3be967c2e19f57ebe5f294f3ef5))
* **argo-admin-react:** create separate package for react components ([e6625cb](https://github.com/Shopify/argo-admin/commit/e6625cb365aca18ee3d211db45b60b7947312892))
* **card:** add card header ([d26d69f](https://github.com/Shopify/argo-admin/commit/d26d69fcf3c48c9356bc825a44f40ca097044df3))
* **component:** add new Page and Thumbnail component ([fef40dc](https://github.com/Shopify/argo-admin/commit/fef40dc52509af6dc7b8b1db023900ed53cf4d3a))
* **component:** implement Page and Thumbnail component ([6ac45be](https://github.com/Shopify/argo-admin/commit/6ac45be5cafdddd925bbba64a6bbb724b16dae46))
* **component:** text with sizes ([8d755da](https://github.com/Shopify/argo-admin/commit/8d755da50eed62edf6d372bd08eb0c6782fc4613))
* **components:** add clickable component ([a93dd1e](https://github.com/Shopify/argo-admin/commit/a93dd1e233e2ab7d6fad4334a151dd6b0380730b))
* **components:** add OptionsList component ([7da5016](https://github.com/Shopify/argo-admin/commit/7da5016ad0bae7047b86b4e20d147cba6894cd08))
* **components:** add structured component definition for Button ([6f812e3](https://github.com/Shopify/argo-admin/commit/6f812e3de212da40ee49a349efe978cfc770b6a1))
* **components:** add text component ([a65d9a9](https://github.com/Shopify/argo-admin/commit/a65d9a9f960ddd67cd92f6e4474d417f0b6ffd4d))
* **icon:** add Icon component ([b570e38](https://github.com/Shopify/argo-admin/commit/b570e38c1de5e6f0279fb254624f4f0f31e2c6eb))
* **playground:** add JSON Repl page and home card ([9e36069](https://github.com/Shopify/argo-admin/commit/9e3606922a3a713738487c22d74d11efaaeb8a82))
* **product-reviews:** generate review list from placeholder data ([f76aaef](https://github.com/Shopify/argo-admin/commit/f76aaef9bc101b367a796d9d12813462aaab3555))
* **product-reviews:** set up app scaffolding in playground ([fc59504](https://github.com/Shopify/argo-admin/commit/fc595045f65fe355807020a1bc8c30f29cf85f8d))
* **renderer:** changes AST format ([4542acd](https://github.com/Shopify/argo-admin/commit/4542acdfc0b336922c9ab94b70c838cc3a8c0923))
* **renderer:** component construction ([f34cb51](https://github.com/Shopify/argo-admin/commit/f34cb5182b434c8c2462a790ca33d23f684e9fef))
* **renderer:** extract parsing from Renderer ([289fc09](https://github.com/Shopify/argo-admin/commit/289fc0932b9d172fb78e99f8ab2f8fe53da7eed3))
* **renderer:** lambda expressions ([323bf42](https://github.com/Shopify/argo-admin/commit/323bf42964cbe05eb7bf1661e4a0290c374cadf8))
* **renderer:** map ([dbedfb5](https://github.com/Shopify/argo-admin/commit/dbedfb533f59a82a05a083cb44a98659db81baa2))
* **renderer:** new AST constructors ([f9cb3f9](https://github.com/Shopify/argo-admin/commit/f9cb3f95058355e184fb41cdc041ee8c5d488c95))
* **renderer:** render without container ([649aac0](https://github.com/Shopify/argo-admin/commit/649aac061f966255df00fffef21f28a4a72fe461))
* **renderer:** simpler AST format ([ad650e8](https://github.com/Shopify/argo-admin/commit/ad650e83850206df29f31d30bed899c86fb14f16))
* **renderer:** throw error on unknown identifier ([6088501](https://github.com/Shopify/argo-admin/commit/6088501218bedb27c5248a3c7ca4117911c6e1df))
* **renderer:** user library ([71b67a2](https://github.com/Shopify/argo-admin/commit/71b67a2c4bbc14f4bb7e9d80337291dab72081b7))
* add basic properties panel ([e81ae67](https://github.com/Shopify/argo-admin/commit/e81ae6764a66601a1fbe23429f9887055c25cdde))
* add textfield and checkbox ([2bde83b](https://github.com/Shopify/argo-admin/commit/2bde83b5e41131eb98fb27fdf15a0426c17bedab))
* lerna sub-package configuration ([780c933](https://github.com/Shopify/argo-admin/commit/780c933469500b9738c7d15cfc421efad140f975))
* restructure ([73299ef](https://github.com/Shopify/argo-admin/commit/73299efe74d126d1f91b7322e4c030f735a6e4f0))


### Reverts

* Revert "chore: change to original remote-ui (#713)" ([5f9bd71](https://github.com/Shopify/argo-admin/commit/5f9bd715f285a0768455ff7ffe150f18d4d6f221)), closes [#713](https://github.com/Shopify/argo-admin/issues/713)
* Revert "v0.2.8-unstable.0" ([43e74ac](https://github.com/Shopify/argo-admin/commit/43e74ac80783b12ea596444e94b757996ae80d75))
* Revert "Remove Registry override from renderer" ([a97678f](https://github.com/Shopify/argo-admin/commit/a97678f72731097ff7326ebec24fa029d918483e))
* Revert "Checkout master before deploy" ([2a11a53](https://github.com/Shopify/argo-admin/commit/2a11a53c7bb07cc0e61ab96924fca882b2195514))


### BREAKING CHANGES

* **components:** component definitions have been deleted





## [0.7.6](https://github.com/Shopify/argo-admin/compare/v0.7.5...v0.7.6) (2020-11-20)

### Bug Fixes

- improve readme structure ([b42da3c](https://github.com/Shopify/argo-admin/commit/b42da3c1866f864559bc69176316602cc4c13a1b))
- update polaris and polaris icons ([4da7004](https://github.com/Shopify/argo-admin/commit/4da700468637e2a12b9f48c86f9599336b52869c))
- update readme with more accurate info about remote-ui functionality ([ab66a0c](https://github.com/Shopify/argo-admin/commit/ab66a0c621196a4bde71a48bff1f9ae54337a551))

## [0.7.5](https://github.com/Shopify/argo-admin/compare/v0.7.4...v0.7.5) (2020-11-05)

### Bug Fixes

- allow overriding denyList ([e10f438](https://github.com/Shopify/argo-admin/commit/e10f4387c521a4b493af7e9d942b12ca2d011ced))
- fix hotswap nested array object in remote-ui ([9be1bf6](https://github.com/Shopify/argo-admin/commit/9be1bf678a0f575150ab0d913223c452737e389f))

## [0.7.4](https://github.com/Shopify/argo-admin/compare/v0.7.3...v0.7.4) (2020-11-03)

### Bug Fixes

- fix remote-ui hotswap nested function ([76e31cd](https://github.com/Shopify/argo-admin/commit/76e31cd59db8a1609c876fd81ae2f79d4bbe8437))

## [0.7.3](https://github.com/Shopify/argo-admin/compare/v0.7.2...v0.7.3) (2020-11-02)

### Bug Fixes

- fix missing return value for hotswap container api ([34e9b45](https://github.com/Shopify/argo-admin/commit/34e9b4536e55cca3956dbe1a77049f76ec9dd0dd))

## [0.7.2](https://github.com/Shopify/argo-admin/compare/v0.7.1...v0.7.2) (2020-10-29)

### Features

- hot-swap api ([#1096](https://github.com/Shopify/app-extension-libs/issues/1096)) ([473597b](https://github.com/Shopify/argo-admin/commit/473597bbacc846f194431a44ebb9c90a27b181d6))
- upgrade remote-ui 1.5.0 ([#1121](https://github.com/Shopify/app-extension-libs/issues/1121)) ([1350755](https://github.com/Shopify/argo-admin/commit/13507554568ad75872f2bd10a3ef417956411639))

## [0.7.1](https://github.com/Shopify/argo-admin/compare/v0.7.0...v0.7.1) (2020-10-22)

### Bug Fixes

- fix nested stack item layout issue ([768eb1c](https://github.com/Shopify/argo-admin/commit/768eb1cddaee94be61f84e85ac0f4710ac7aeb6d))
- **playground:** inject script after content ([d47b830](https://github.com/Shopify/argo-admin/commit/d47b830f9837585a6f2fe1472d9e00af7f7dc8ea))
- **playground:** main menu icons ([2b25be6](https://github.com/Shopify/argo-admin/commit/2b25be6d959f4a5c374920905cac7e42a38d49df))

# [0.7.0](https://github.com/Shopify/argo-admin/compare/v0.6.0...v0.7.0) (2020-10-15)

### Bug Fixes

- **playground:** fix missing icon, polaris overrides ([a890eaf](https://github.com/Shopify/argo-admin/commit/a890eafb504e58e34bb4a32424d0241c03e1365a))
- button with icon is centered when displayed without text ([#1010](https://github.com/Shopify/app-extension-libs/issues/1010)) ([1f0133b](https://github.com/Shopify/argo-admin/commit/1f0133b85ba35343f02f6aee885e99ab2b76a2c1))
- queued state ([#1022](https://github.com/Shopify/app-extension-libs/issues/1022)) ([ce59897](https://github.com/Shopify/argo-admin/commit/ce598976e3bcab839d6e4a4beb805ce785600d1d))
- queued state ([#1027](https://github.com/Shopify/app-extension-libs/issues/1027)) ([bd65dde](https://github.com/Shopify/argo-admin/commit/bd65dde232c9805d13c311288b11599f7a7da902))
- text-field onchange error ([#1015](https://github.com/Shopify/app-extension-libs/issues/1015)) ([d76197e](https://github.com/Shopify/argo-admin/commit/d76197e12b6ce658136921550c33253aa01f7dd0))
- **playground:** add style override for top-level cards ([719ef7f](https://github.com/Shopify/argo-admin/commit/719ef7fa52ca2cef94662175804230e990a186a7))

# [0.6.0](https://github.com/Shopify/argo-admin/compare/v0.6.0-alpha.0...v0.6.0) (2020-10-07)

### Bug Fixes

- **build-consumer:** add `argo-admin-react` package ([982a449](https://github.com/Shopify/argo-admin/commit/982a4499a1f849ef62f96299ba2d551f4338c229))

# [0.6.0-alpha.0](https://github.com/Shopify/argo-admin/compare/v0.5.0...v0.6.0-alpha.0) (2020-09-30)

### Features

- remove extension point enum ([06479db](https://github.com/Shopify/argo-admin/commit/06479db477722dad8fa5625cbc99274a07916037))
- rename subscription management ([#973](https://github.com/Shopify/app-extension-libs/issues/973)) ([5752089](https://github.com/Shopify/argo-admin/commit/575208901f6e7a5b37d2d0dfb2799c59fdbee15b))

# [0.5.0](https://github.com/Shopify/argo-admin/compare/v0.5.0-alpha.1...v0.5.0) (2020-09-30)

**Note:** Version bump only for package root

# [0.5.0-alpha.1](https://github.com/Shopify/argo-admin/compare/v0.5.0-alpha.0...v0.5.0-alpha.1) (2020-09-29)

### Bug Fixes

- remove OptionList from Subscription extension point ([45b4d20](https://github.com/Shopify/argo-admin/commit/45b4d202be63acbc677cb33e4c75a13f22ac8f23))
- resource list onQueryClear reset the list items ([9209240](https://github.com/Shopify/argo-admin/commit/920924045cb94af2f81c3dc7b056883540e4a3f5))

# [0.5.0-alpha.0](https://github.com/Shopify/argo-admin/compare/v0.4.4...v0.5.0-alpha.0) (2020-09-28)

### Bug Fixes

- standardize form field naming ([5391b59](https://github.com/Shopify/argo-admin/commit/5391b598a9e6f516f2d4aff603d9aeee634d67e3))

### Features

- **app-overlay:** update header ([f34da64](https://github.com/Shopify/argo-admin/commit/f34da64b789aa3be967c2e19f57ebe5f294f3ef5))

## [0.4.4](https://github.com/Shopify/argo-admin/compare/v0.4.4-alpha.1...v0.4.4) (2020-09-24)

**Note:** Version bump only for package root

## [0.4.4-alpha.1](https://github.com/Shopify/argo-admin/compare/v0.4.4-alpha.0...v0.4.4-alpha.1) (2020-09-23)

**Note:** Version bump only for package root

## [0.4.4-alpha.0](https://github.com/Shopify/argo-admin/compare/v0.4.3...v0.4.4-alpha.0) (2020-09-18)

### Features

- add extension point to api ([f30fd1c](https://github.com/Shopify/argo-admin/commit/f30fd1cef7adedd86e0025d5f3d397113f4e5f3a))
- api consistency onclick to onpress ([6c68dd6](https://github.com/Shopify/argo-admin/commit/6c68dd6291cdaee34539c6a4357ba07f0190b075))
- consistent form api ([21b251e](https://github.com/Shopify/argo-admin/commit/21b251e0d1fec7e4de15eb1b2f66c36e57b4a383))
- radio and checkbox to use children not label ([e5c7705](https://github.com/Shopify/argo-admin/commit/e5c77051d6c3039aa40d912c699d049fa8d191a0))
- radio id and checked is optional ([9c3954e](https://github.com/Shopify/argo-admin/commit/9c3954e7852e0aa6d314a824c2e64dc68d967886))
- radio onchange gives value not id ([#914](https://github.com/Shopify/app-extension-libs/issues/914)) ([9202a9e](https://github.com/Shopify/argo-admin/commit/9202a9e16863153ceb686e5abdd604cee8b7841a))
- rename pressable to clickable ([e48be20](https://github.com/Shopify/argo-admin/commit/e48be20b3282f6299e225d4e7d937b2b0c70302a))
- rename radio button to radio ([5a15c0a](https://github.com/Shopify/argo-admin/commit/5a15c0a9ed25fb0b196252db059bd86601c72263))

## [0.4.3](https://github.com/Shopify/argo-admin/compare/v0.4.2...v0.4.3) (2020-09-15)

### Features

- error unsupported component ([#902](https://github.com/Shopify/app-extension-libs/issues/902)) ([938363e](https://github.com/Shopify/argo-admin/commit/938363e561225cdf24693f6a7e012016d37d851f))

## [0.4.2](https://github.com/Shopify/argo-admin/compare/v0.4.1...v0.4.2) (2020-08-26)

### Bug Fixes

- make links safe ([bac28f0](https://github.com/Shopify/argo-admin/commit/bac28f067f3861482adb872be2ba36cebdc8f4f8))

## [0.4.1](https://github.com/Shopify/argo-admin/compare/v0.4.0...v0.4.1) (2020-08-25)

### Bug Fixes

- remove id from TextField.onClearButtonClick ([9b78df8](https://github.com/Shopify/argo-admin/commit/9b78df8131eb21d38752182052d6d796466eead2))
- **app-chrome-container:** remove unnecessary conditional ([cd99192](https://github.com/Shopify/argo-admin/commit/cd99192b17fae7a72d16f6b84f25c1e3ca398c6d))

### Features

- **app-chrome-container:** add playground example ([a1e314e](https://github.com/Shopify/argo-admin/commit/a1e314e845b1d573bb317eb5ba2a3373abfec1cb))

# [0.4.0](https://github.com/Shopify/argo-admin/compare/v0.4.0-alpha.0...v0.4.0) (2020-08-05)

**Note:** Version bump only for package root

# [0.4.0-alpha.0](https://github.com/Shopify/argo-admin/compare/v0.3.0...v0.4.0-alpha.0) (2020-08-04)

### Features

- **argo-admin-react:** create separate package for react components ([e6625cb](https://github.com/Shopify/argo-admin/commit/e6625cb365aca18ee3d211db45b60b7947312892))

# [0.3.0](https://github.com/Shopify/argo-admin/compare/v0.2.8...v0.3.0) (2020-07-28)

### Features

- extension point components ([#820](https://github.com/Shopify/app-extension-libs/issues/820)) ([9be8c61](https://github.com/Shopify/argo-admin/commit/9be8c61f7a567be8b1c2ec13156a5dd3422182d0))

## [0.2.7](https://github.com/Shopify/argo-admin/compare/v0.2.6...v0.2.7) (2020-06-25)

**Note:** Version bump only for package root

## [0.2.6](https://github.com/Shopify/argo-admin/compare/v0.2.5...v0.2.6) (2020-06-19)

### Bug Fixes

- fix OptionList ([d05553a](https://github.com/Shopify/argo-admin/commit/d05553a1affca5f0b9545580b158a5fc25911a95))

## [0.2.5](https://github.com/Shopify/argo-admin/compare/v0.2.4...v0.2.5) (2020-06-19)

**Note:** Version bump only for package root

## [0.2.4](https://github.com/Shopify/argo-admin/compare/v0.2.3...v0.2.4) (2020-06-19)

### Bug Fixes

- remove done from data api ([88c00d6](https://github.com/Shopify/argo-admin/commit/88c00d6f562783772716fceadf78df949c1d703d))

## [0.2.3](https://github.com/Shopify/argo-admin/compare/v0.2.2...v0.2.3) (2020-06-19)

**Note:** Version bump only for package root

## [0.2.2](https://github.com/Shopify/argo-admin/compare/v0.2.1...v0.2.2) (2020-06-18)

**Note:** Version bump only for package root

## [0.2.1](https://github.com/Shopify/argo-admin/compare/v0.1.3...v0.2.1) (2020-06-18)

**Note:** Version bump only for package root

## [0.1.3](https://github.com/Shopify/argo-admin/compare/v0.1.2...v0.1.3) (2020-06-18)

### Bug Fixes

- reset independent versioning ([5e6761a](https://github.com/Shopify/argo-admin/commit/5e6761a0075b57538aacfc28f5437e647930a450))

## [0.1.2](https://github.com/Shopify/argo-admin/compare/v0.1.1...v0.1.2) (2020-06-18)

### Features

- update data-api with container changes ([#761](https://github.com/Shopify/app-extension-libs/issues/761)) ([24308ed](https://github.com/Shopify/argo-admin/commit/24308ed9459b93373dc5218c79674dcd812cd308))

## [0.1.1](https://github.com/Shopify/argo-admin/compare/v0.1.0...v0.1.1) (2020-06-18)

### Features

- rename modal actions to container api ([50746d5](https://github.com/Shopify/argo-admin/commit/50746d52f7a46a87d6c51a6989fb93ebdec2953b))

# [0.1.0](https://github.com/Shopify/argo-admin/compare/v0.0.65...v0.1.0) (2020-06-17)

### Features

- data api ([#704](https://github.com/Shopify/app-extension-libs/issues/704)) ([ac25d95](https://github.com/Shopify/argo-admin/commit/ac25d951af5e048a83c81b78dfdb3c37a2b6b48a))

## [0.0.65](https://github.com/Shopify/argo-admin/compare/v0.0.64...v0.0.65) (2020-06-04)

### Bug Fixes

- clean up webpack configs and package.json ([51becc4](https://github.com/Shopify/argo-admin/commit/51becc48730c30e18533f521eb969103003deedb))
- fix layout extension api ([d49ff2b](https://github.com/Shopify/argo-admin/commit/d49ff2b12ded8ff7d944e741d11bfb32b9eea5b3))
- fix locale extension api ([d00a519](https://github.com/Shopify/argo-admin/commit/d00a519f9ebd6b7e1a226a76a9b931a5170e7dc0))

## [0.0.64](https://github.com/Shopify/argo-admin/compare/v0.0.63...v0.0.64) (2020-06-02)

### Bug Fixes

- re-add card action ([#602](https://github.com/Shopify/app-extension-libs/issues/602)) ([cdd6785](https://github.com/Shopify/argo-admin/commit/cdd6785c47417d4f6fe2e8e94bab64cb758a79b8))

### Features

- **components:** add OptionsList component ([7da5016](https://github.com/Shopify/argo-admin/commit/7da5016ad0bae7047b86b4e20d147cba6894cd08))
- add blacklist sandbox for worker ([d4c37d3](https://github.com/Shopify/argo-admin/commit/d4c37d319b4433fce39fda151b59d384e1d7a809))

## [0.0.63](https://github.com/Shopify/argo-admin/compare/v0.0.63-alpha.0...v0.0.63) (2020-05-25)

### Features

- added readyState no script ([#563](https://github.com/Shopify/app-extension-libs/issues/563)) ([afa23f7](https://github.com/Shopify/argo-admin/commit/afa23f7b8d604b7f0d4b9983d4be877e2e85e3e9))

## [0.0.63-alpha.0](https://github.com/Shopify/argo-admin/compare/v0.0.62...v0.0.63-alpha.0) (2020-05-22)

### Bug Fixes

- async cause callbacks not to work ([#556](https://github.com/Shopify/app-extension-libs/issues/556)) ([e45c1b0](https://github.com/Shopify/argo-admin/commit/e45c1b0695d4ead12e0c0c5f558dee8038699659))

### Features

- **card:** add card header ([d26d69f](https://github.com/Shopify/argo-admin/commit/d26d69fcf3c48c9356bc825a44f40ca097044df3))
- add component groups ([#514](https://github.com/Shopify/app-extension-libs/issues/514)) ([11fb50b](https://github.com/Shopify/argo-admin/commit/11fb50b0ad910d923405535d109a9f220a83d9e3))

## [0.0.62](https://github.com/Shopify/argo-admin/compare/v0.0.61...v0.0.62) (2020-05-19)

### Features

- add validation to select ([#521](https://github.com/Shopify/app-extension-libs/issues/521)) ([a13acd8](https://github.com/Shopify/argo-admin/commit/a13acd86c9545fe04a15f074ee79bf7b95dcd4de))
- enable displaying an error and loading state ([31d2a86](https://github.com/Shopify/argo-admin/commit/31d2a867a9248d5be4e1e98b8b4dee15031959a1))

## [0.0.61](https://github.com/Shopify/argo-admin/compare/v0.0.60...v0.0.61) (2020-05-14)

### Bug Fixes

- replace render error image ([#500](https://github.com/Shopify/app-extension-libs/issues/500)) ([dc87105](https://github.com/Shopify/argo-admin/commit/dc87105f9ee6352fffd13611bb3c42e0bd4a4f7e))
- simplify stack component to remove forcing key prop ([342830d](https://github.com/Shopify/argo-admin/commit/342830de650f5cdc438b2ab2ec6c5e41ad1826c3))

### Features

- add MerchantMetafield extension point ([eeb975f](https://github.com/Shopify/argo-admin/commit/eeb975f850b155fa6619a7d7e03dafac68ac6e54))

## [0.0.60](https://github.com/Shopify/argo-admin/compare/v0.0.59...v0.0.60) (2020-05-08)

### Bug Fixes

- correct name SubscriptionManagement ([#496](https://github.com/Shopify/app-extension-libs/issues/496)) ([3577d00](https://github.com/Shopify/argo-admin/commit/3577d009f9a416c4636fdb1a7ebd29379020bc0b))

### Features

- radiobutton ([0438e25](https://github.com/Shopify/argo-admin/commit/0438e25b15cdc504a03b2cdc28b9526e83ed2b15))
- radiobutton cleanup ([7ecdaec](https://github.com/Shopify/argo-admin/commit/7ecdaece6f5eab9da72866693b992547eff2db2a))
- toast ([#483](https://github.com/Shopify/app-extension-libs/issues/483)) ([0898253](https://github.com/Shopify/argo-admin/commit/08982538144fade980752c71597ed3e574eaa2a8))

## [0.0.59](https://github.com/Shopify/argo-admin/compare/v0.0.58...v0.0.59) (2020-05-07)

### Features

- add product data input ([305d464](https://github.com/Shopify/argo-admin/commit/305d464dff656ee4fc3f702f36601ddba309eeec))
- add render timeout hook and example playground ([#473](https://github.com/Shopify/app-extension-libs/issues/473)) ([5976199](https://github.com/Shopify/argo-admin/commit/5976199b669d95ce539a021dc484148ef1f0d1bf))
- expose React for compiled bundle ([7e2bf60](https://github.com/Shopify/argo-admin/commit/7e2bf6089dddf1a82b095819f96caead4b94eaf7))

## [0.0.58](https://github.com/Shopify/argo-admin/compare/v0.0.57...v0.0.58) (2020-05-06)

**Note:** Version bump only for package root

## [0.0.57](https://github.com/Shopify/argo-admin/compare/v0.0.56...v0.0.57) (2020-05-05)

**Note:** Version bump only for package root

## [0.0.56](https://github.com/Shopify/argo-admin/compare/v0.0.55...v0.0.56) (2020-05-05)

**Note:** Version bump only for package root

## [0.0.55](https://github.com/Shopify/argo-admin/compare/v0.0.54...v0.0.55) (2020-05-05)

### Features

- extract ArgoExtension and other extension input utils ([a7b4aff](https://github.com/Shopify/argo-admin/commit/a7b4aff35f7cf16a091bb056fa46a38a4eab0b4e))

## [0.0.54](https://github.com/Shopify/argo-admin/compare/v0.0.53...v0.0.54) (2020-05-04)

### Features

- restructure ([73299ef](https://github.com/Shopify/argo-admin/commit/73299efe74d126d1f91b7322e4c030f735a6e4f0))

## [0.0.53](https://github.com/Shopify/argo-admin/compare/v0.0.52...v0.0.53) (2020-05-01)

### Bug Fixes

- fix TextField onBlur and onFocus ([419ade6](https://github.com/Shopify/argo-admin/commit/419ade659ff79dc8d63db4bcc379930ab0f7b1b0))

## [0.0.52](https://github.com/Shopify/argo-admin/compare/v0.0.51...v0.0.52) (2020-04-30)

### Bug Fixes

- input types and Argo modal infinite re-render issue ([15331cb](https://github.com/Shopify/argo-admin/commit/15331cb251092c1e7984a8ba0e59afc9a64f6495))

### Features

- data passing ([e510c12](https://github.com/Shopify/argo-admin/commit/e510c120143abab4e1ee4c15ea02191dc6c34428))

## [0.0.51](https://github.com/Shopify/argo-admin/compare/v0.0.50...v0.0.51) (2020-04-28)

### Bug Fixes

- fix infinite loop due to callback arguments ([a409c66](https://github.com/Shopify/argo-admin/commit/a409c669fe4f7a325b4b611374894b92b144dd0a))

### Features

- add disabled prop to Button component ([0359815](https://github.com/Shopify/argo-admin/commit/0359815dcc346b002fe25e3dcecb2e637957dcbf))

## [0.0.50](https://github.com/Shopify/argo-admin/compare/v0.0.49...v0.0.50) (2020-04-28)

### Bug Fixes

- clean up hooks inside ArgoExtension ([b44d393](https://github.com/Shopify/argo-admin/commit/b44d3937942d4092fd9bd97c513b548349c88504))

### Features

- add LocaleInput ([6f6b88d](https://github.com/Shopify/argo-admin/commit/6f6b88d9c413829a07a412bcf23c8a629d9d547d))

## [0.0.49](https://github.com/Shopify/argo-admin/compare/v0.0.48...v0.0.49) (2020-04-24)

### Features

- add argo modal container ([2511eaa](https://github.com/Shopify/argo-admin/commit/2511eaa457c12b20490b561bcf31cdd87f137538))
- enable web worker to load inline app extension scripts ([847d874](https://github.com/Shopify/argo-admin/commit/847d874095dd0cbe0a5c956f645bd056d104a27f))
- hook up modal action inputs ([9784bfe](https://github.com/Shopify/argo-admin/commit/9784bfe4bf5c5bade33b394bce1d79b93d255e46))

## [0.0.48](https://github.com/Shopify/argo-admin/compare/v0.0.47...v0.0.48) (2020-04-22)

### Features

- add new subscription-management type ([96b4d90](https://github.com/Shopify/argo-admin/commit/96b4d9008cd80ab5195626e55685defc9e920e47))

## [0.0.47](https://github.com/Shopify/argo-admin/compare/v0.0.46...v0.0.47) (2020-04-22)

### Bug Fixes

- update SessionToken interface to reflect undefined state ([9569eef](https://github.com/Shopify/argo-admin/commit/9569eef64c70101059b3b53ea2abfedbe64f383e))

### Features

- add banner component ([35914bf](https://github.com/Shopify/argo-admin/commit/35914bfaad320ee1b07260edcf82bef78e3d8b9c))
- add clearButton prop to Textfield ([feb1733](https://github.com/Shopify/argo-admin/commit/feb1733d119b0c88bbfd658371f8fb6d51025bab))
- add in-line errors to textfield component ([c0a2ee8](https://github.com/Shopify/argo-admin/commit/c0a2ee8257cffeb976166938c7dbc5e7b3e6b2ff))
- add ResourceList component ([4d6dc99](https://github.com/Shopify/argo-admin/commit/4d6dc993ddb8a0dbe47f7a78ca45cc58dda6cda7))
- add suffix prop to texrfield ([27e452f](https://github.com/Shopify/argo-admin/commit/27e452f043bcec7531713efbcb2ebcc974df73a2))

## [0.0.46](https://github.com/Shopify/argo-admin/compare/v0.0.45...v0.0.46) (2020-04-20)

**Note:** Version bump only for package root

## [0.0.45](https://github.com/Shopify/argo-admin/compare/v0.0.44...v0.0.45) (2020-04-17)

### Features

- add number textfield ([26df79c](https://github.com/Shopify/argo-admin/commit/26df79cbc07e09f1eb8764ad00505fc448a86ea1))

## [0.0.44](https://github.com/Shopify/argo-admin/compare/v0.0.43...v0.0.44) (2020-04-17)

### Features

- add SessionTokenInput ([e8532b9](https://github.com/Shopify/argo-admin/commit/e8532b986e403bdf7d10540284cd90b386dd4ab1))

## [0.0.43](https://github.com/Shopify/argo-admin/compare/v0.0.42...v0.0.43) (2020-04-16)

### Features

- add link and toast components ([2830599](https://github.com/Shopify/argo-admin/commit/2830599aa686bf9c055c36078c9f7008819783c9))

## [0.0.42](https://github.com/Shopify/argo-admin/compare/v0.0.41...v0.0.42) (2020-04-13)

### Features

- add Modal component ([9ee5b22](https://github.com/Shopify/argo-admin/commit/9ee5b221e43812cfaa8301593f54960ae714c7fb))
- add ResizeObserver ([60ccf8b](https://github.com/Shopify/argo-admin/commit/60ccf8b16ba9ab88929d9798409947cc9d3a205a))
- add Select component ([3ecb252](https://github.com/Shopify/argo-admin/commit/3ecb25206b5ac9762348a9f878ac41a323dae8e6))
- add Spinner component ([0c2a2e7](https://github.com/Shopify/argo-admin/commit/0c2a2e761bac18bc7f36ba05baefc73efe3c1c7a))
- implement Select component ([798c333](https://github.com/Shopify/argo-admin/commit/798c3337e0025818939a753b1b5bb173b2bf50ee))
- support screen size ([a6df892](https://github.com/Shopify/argo-admin/commit/a6df892ead47ce038a63a3e11698bc72b859cd96))

## [0.0.41](https://github.com/Shopify/argo-admin/compare/v0.0.40...v0.0.41) (2020-04-07)

### Bug Fixes

- fix maximum stack size in host components ([650af48](https://github.com/Shopify/argo-admin/commit/650af484d9fa0e4ba86971ef78855bb8915545b1))

### Features

- enable 2 new extension points ([c2313f4](https://github.com/Shopify/argo-admin/commit/c2313f4a93a74dc8ff964504c7923b124cf8a028))
- slight design adjustments ([0e1f337](https://github.com/Shopify/argo-admin/commit/0e1f337d0452a0a45b4d59d0d430e23ce8c9a3e3))
- **api:** connect extension to graphql ([59c8730](https://github.com/Shopify/argo-admin/commit/59c8730989b52f7522c8b8214716bd55e144985c))

## [0.0.40](https://github.com/Shopify/argo-admin/compare/v0.0.39...v0.0.40) (2020-04-01)

### Bug Fixes

- fix TextField component props ([f5809c9](https://github.com/Shopify/argo-admin/commit/f5809c92f10e0d5f79fb33f864da60a38bd32670))

### Features

- **components:** add clickable component ([a93dd1e](https://github.com/Shopify/argo-admin/commit/a93dd1e233e2ab7d6fad4334a151dd6b0380730b))
- **product-reviews:** generate review list from placeholder data ([f76aaef](https://github.com/Shopify/argo-admin/commit/f76aaef9bc101b367a796d9d12813462aaab3555))
- add Badge component ([26abe81](https://github.com/Shopify/argo-admin/commit/26abe81165a612992c0d7d9fcbf0e312ec9cdcfc))
- add Button component ([1c2a41d](https://github.com/Shopify/argo-admin/commit/1c2a41d807d276d39f25dfbb4a876777f8fd95fb))
- add Checkbox component ([109c37b](https://github.com/Shopify/argo-admin/commit/109c37bc7561da100c5e8dd44df6c4cd324ccb17))
- add mobile worker ([c0182ae](https://github.com/Shopify/argo-admin/commit/c0182ae5d49c3663b0d5385208136160f806e076))
- adds AppReviewList UI ([8367b1e](https://github.com/Shopify/argo-admin/commit/8367b1ef083cb3cd565d5e989faf2bb44d01bccf))
- adds StackItem component ([91a1eaf](https://github.com/Shopify/argo-admin/commit/91a1eaffcdf4e35e70a12d0565f6b1ec7b1e08a6))
- **icon:** add Icon component ([b570e38](https://github.com/Shopify/argo-admin/commit/b570e38c1de5e6f0279fb254624f4f0f31e2c6eb))

## [0.0.36](https://github.com/Shopify/argo-admin/compare/v0.0.35...v0.0.36) (2020-02-27)

### chore

- **components:** set up components package to use remote-ui ([c4f2f97](https://github.com/Shopify/argo-admin/commit/c4f2f973022e49bf34e7def253ef3c22221e9174))

### Features

- **component:** text with sizes ([8d755da](https://github.com/Shopify/argo-admin/commit/8d755da50eed62edf6d372bd08eb0c6782fc4613))
- **components:** add text component ([a65d9a9](https://github.com/Shopify/argo-admin/commit/a65d9a9f960ddd67cd92f6e4474d417f0b6ffd4d))
- **product-reviews:** set up app scaffolding in playground ([fc59504](https://github.com/Shopify/argo-admin/commit/fc595045f65fe355807020a1bc8c30f29cf85f8d))

### BREAKING CHANGES

- **components:** component definitions have been deleted

## [0.0.31](https://github.com/Shopify/argo-admin/compare/v0.0.30...v0.0.31) (2019-12-16)

### Features

- **components:** add structured component definition for Button ([6f812e3](https://github.com/Shopify/argo-admin/commit/6f812e3de212da40ee49a349efe978cfc770b6a1))

## [0.0.27](https://github.com/Shopify/argo-admin/compare/v0.0.26...v0.0.27) (2019-12-10)

**Note:** Version bump only for package root

## [0.0.26](https://github.com/Shopify/argo-admin/compare/v0.0.25...v0.0.26) (2019-12-09)

### Bug Fixes

- **components:** add items prop to List ([b986475](https://github.com/Shopify/argo-admin/commit/b986475d108088fc2b0d7a0d03c1f88f5e736742))
- **components:** fix text elements rendering children ([441a1bc](https://github.com/Shopify/argo-admin/commit/441a1bc1390f0b6802993d9ae05c0a42f3487b8f))

## [0.0.25](https://github.com/Shopify/argo-admin/compare/v0.0.24...v0.0.25) (2019-12-09)

**Note:** Version bump only for package root

## [0.0.24](https://github.com/Shopify/argo-admin/compare/v0.0.23...v0.0.24) (2019-12-06)

### Bug Fixes

- re-enable build check in CI ([91fb603](https://github.com/Shopify/argo-admin/commit/91fb60334dad07c58b0759333bba22ef45818056))

### Features

- **playground:** add JSON Repl page and home card ([9e36069](https://github.com/Shopify/argo-admin/commit/9e3606922a3a713738487c22d74d11efaaeb8a82))
- **renderer:** extract parsing from Renderer ([289fc09](https://github.com/Shopify/argo-admin/commit/289fc0932b9d172fb78e99f8ab2f8fe53da7eed3))

## [0.0.23](https://github.com/Shopify/argo-admin/compare/v0.0.22...v0.0.23) (2019-11-27)

### Bug Fixes

- **components:** fix broken reference ([f1ad9bd](https://github.com/Shopify/argo-admin/commit/f1ad9bd52d365db8780e881b947484e99fbc1841))

## [0.0.17](https://github.com/Shopify/argo-admin/compare/v0.0.16...v0.0.17) (2019-11-18)

### Bug Fixes

- manually specify package deps ([70d48ae](https://github.com/Shopify/argo-admin/commit/70d48ae483de8406d00e8663dff6796fd6418aab))

## [0.0.16](https://github.com/Shopify/argo-admin/compare/v0.0.15...v0.0.16) (2019-11-18)

### Bug Fixes

- tweak npm/lerna configs ([77c5085](https://github.com/Shopify/argo-admin/commit/77c50854026c35b1523ead456f1175b25a875ae8))

## [0.0.15](https://github.com/Shopify/argo-admin/compare/v0.0.14...v0.0.15) (2019-11-18)

### Bug Fixes

- actually remove private key from package.json ([e200056](https://github.com/Shopify/argo-admin/commit/e200056d92b07e94f3df7fb27344d20425037744))

## [0.0.14](https://github.com/Shopify/argo-admin/compare/v0.0.13...v0.0.14) (2019-11-18)

### Bug Fixes

- Remove private key from package.json ([873b8fc](https://github.com/Shopify/argo-admin/commit/873b8fceb8e81ce6db8acdbe0fdbd6b6a5617c73))

## [0.0.13](https://github.com/Shopify/argo-admin/compare/v0.0.12...v0.0.13) (2019-11-18)

### Bug Fixes

- add lerna version to lerna.json ([443ee61](https://github.com/Shopify/argo-admin/commit/443ee61f30bce0c797e355691f1a2e44934ce304))

## [0.0.12](https://github.com/Shopify/argo-admin/compare/v0.0.11...v0.0.12) (2019-11-18)

**Note:** Version bump only for package root

## [0.0.11](https://github.com/Shopify/argo-admin/compare/v0.0.10...v0.0.11) (2019-11-18)

**Note:** Version bump only for package root

## [0.0.5](https://github.com/Shopify/argo-admin/compare/v0.0.3...v0.0.5) (2019-11-15)

**Note:** Version bump only for package root

## [0.0.4](https://github.com/Shopify/argo-admin/compare/v0.0.3...v0.0.4) (2019-11-15)

**Note:** Version bump only for package root
