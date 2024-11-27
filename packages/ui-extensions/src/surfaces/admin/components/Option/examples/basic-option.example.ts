import {extension} from '@shopify/ui-extensions/admin';

export default extension('Playground', (root) => {
  let value = '2';

  const select = document.createElement('shopify-select');
  select.value = 'value';
  select.label = 'Country';
  select.onchange = (event) => {
    console.log('new value', event.target.value);
    value = event.target.value;
  };
  root.appendChild(select);

  const selectOptions = [
    {
      value: '1',
      label: 'Australia',
    },
    {
      value: '2',
      label: 'Canada',
    },
    {
      value: '3',
      label: 'France',
    },
    {
      value: '4',
      label: 'Japan',
    },
    {
      value: '5',
      label: 'Nigeria',
    },
    {
      value: '6',
      label: 'United States',
    },
  ];

  const options = selectOptions.map((opt) => {
    const optionElem = document.createElement('shopify-option');
    optionElem.value = opt.value;
    optionElem.textContent = opt.label;
    return optionElem;
  });
  select.append(...options);
});
