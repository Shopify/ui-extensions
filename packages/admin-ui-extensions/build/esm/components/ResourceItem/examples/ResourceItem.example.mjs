import { extend, ResourceList, ResourceItem } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var resourceItem1 = root.createComponent(ResourceItem, {
    id: '1234',
    onPress: function onPress() {
      return console.log('Pressed 1');
    }
  });
  resourceItem1.appendChild('Cool item');
  var resourceItem2 = root.createComponent(ResourceItem, {
    id: '5678',
    onPress: function onPress() {
      return console.log('Pressed 2');
    }
  });
  resourceItem2.appendChild('Cooler item');
  var resourceList = root.createComponent(ResourceList, {});
  resourceList.appendChild(resourceItem1);
  resourceList.appendChild(resourceItem2);
  root.appendChild(resourceList);
  root.mount();
});