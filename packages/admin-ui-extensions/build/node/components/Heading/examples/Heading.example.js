"use strict";

var _adminUiExtensions = require("@shopify/admin-ui-extensions");

(0, _adminUiExtensions.extend)('Playground', root => {
  const heading = root.createComponent(_adminUiExtensions.Heading, {
    id: 'profile_heading',
    level: 3
  });
  const headingText = root.createText('This is a Title');
  heading.appendChild(headingText);
  root.appendChild(heading);
  root.mount();
});