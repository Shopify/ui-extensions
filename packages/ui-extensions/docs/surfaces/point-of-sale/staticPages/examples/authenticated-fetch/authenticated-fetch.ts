import {
  extension,
  POSBlock,
  Text,
  POSBlockRow,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.customer-details.block.render', (root, api) => {
  const customerId = api.customer.id;
  const infoText = root.createComponent(Text);
  const posBlockRow = root.createComponent(POSBlockRow);

  async function getLoyaltyInfo() {
    const res = await fetch(`${URL}/api/loyalty/${customerId}`);
    const json = await res.json();
    infoText.replaceChildren(json.loyaltySummary);
  }

  posBlockRow.append(infoText);
  const posBlock = root.createComponent(POSBlock);

  posBlock.append(posBlockRow);
  root.append(posBlock);

  getLoyaltyInfo();
});
