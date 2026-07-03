---
'@shopify/ui-extensions': patch
---

Remove `@publicDocs` from POS receipt extension targets and their associated types so they no longer appear in generated API reference documentation.

The following targets are now marked `@private` and will be excluded from the public docs:
- `pos.receipt-footer.block.render`
- `pos.receipt-header.block.render`

The following receipt-only types are now marked `@private`:
- `ReceiptComponents`
- `TransactionCompleteWithReprintData`
- `ReprintReceiptData`
- `SaleTransactionData`
- `ReturnTransactionData`
- `ExchangeTransactionData`
- `BaseTransactionComplete`

The targets and types remain in the TypeScript API surface — only their public documentation visibility is removed.
