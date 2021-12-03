"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

function buildListItem(root) {
  const listItem = root.createComponent(_adminUiExtensions.ListItem);
  listItem.appendChild('Item in list');
  return listItem;
}

(0, _adminUiExtensions.extend)('Playground', root => {
  const list = root.createComponent(_adminUiExtensions.List);
  list.appendChild(buildListItem(root));
  list.appendChild(buildListItem(root));
  list.appendChild(buildListItem(root));
  root.appendChild(list);
  root.mount();
});