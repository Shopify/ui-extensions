import { extend, List, ListItem } from '@shopify/admin-ui-extensions';

function buildListItem(root) {
  var listItem = root.createComponent(ListItem);
  listItem.appendChild('Item in list');
  return listItem;
}

extend('Playground', function (root) {
  var list = root.createComponent(List);
  list.appendChild(buildListItem(root));
  list.appendChild(buildListItem(root));
  list.appendChild(buildListItem(root));
  root.appendChild(list);
  root.mount();
});