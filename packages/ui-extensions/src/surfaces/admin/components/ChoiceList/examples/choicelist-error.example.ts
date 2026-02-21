import {extension, ChoiceList, Button, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.action.render',
  (root, api) => {
    const {data, close} = api;
    const productId = data.selected[0]?.id;
    let complianceRegion = '';

    const stack = root.createComponent(BlockStack);

    const choiceList = root.createComponent(ChoiceList, {
      name: 'complianceRegion',
      value: complianceRegion,
      choices: [
        {label: 'North America (FDA, FTC)', id: 'na'},
        {label: 'European Union (CE, REACH)', id: 'eu'},
        {label: 'Asia-Pacific (JIS, CCC)', id: 'apac'},
      ],
      onChange: (value) => {
        complianceRegion = value;
        choiceList.updateProps({error: undefined});
      },
    });

    const saveButton = root.createComponent(
      Button,
      {
        variant: 'primary',
        onPress: async () => {
          if (!complianceRegion) {
            choiceList.updateProps({error: 'Select a compliance region before saving'});
            return;
          }
          await fetch('/api/products/compliance', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, complianceRegion}),
          });
          close();
        },
      },
      'Set compliance region',
    );

    stack.appendChild(choiceList);
    stack.appendChild(saveButton);
    root.appendChild(stack);
  },
);
