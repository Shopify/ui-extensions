"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', function (root) {
  var heading = root.createComponent(_adminUiExtensions.Heading, {
    id: 'profile_heading',
    level: 3
  });
  var headingText = root.createText('This is a Title');
  heading.appendChild(headingText);
  root.appendChild(heading);
  root.mount();
});