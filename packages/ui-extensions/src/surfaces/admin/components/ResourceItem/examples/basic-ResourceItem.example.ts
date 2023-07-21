import {extend, ResourceList, ResourceItem} from '@shopify/ui-extensions/admin';

extend('Playground', (root) => {
  const resourceItem1 = root.createComponent(ResourceItem, {
    id: '1234',
    onPress: () => console.log('Pressed 1'),
  });
  resourceItem1.appendChild('Cool item');
  const resourceItem2 = root.createComponent(ResourceItem, {
    id: '5678',
    onPress: () => console.log('Pressed 2'),
  });
  resourceItem2.appendChild('Cooler item');

  const resourceList = root.createComponent(ResourceList, {});

  resourceList.appendChild(resourceItem1);
  resourceList.appendChild(resourceItem2);

  root.appendChild(resourceList);
  root.mount();
});
