import type {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  // The title of the page.
  title: 'Targets Overview',
  // A short description of the page. Appears in the hero section below the title.
  description: `
A [target](/docs/apps/app-extensions/configuration#targets) represents where your customer account UI extension will appear.

You register for targets in your [configuration file](/docs/api/checkout-ui-extensions/configuration), and you include a JavaScript function that will run at that location in customer accounts.
  `,
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm id matches the reference name.
  id: 'extension-targets-overview',
  // Basic content for the page and Hero section.
  sections: [
    {
      type: 'Generic',
      // Anchor link for the section.
      anchorLink: 'static-extension-targets',
      // The title of the section.
      title: 'Static extension targets',
      // Content for the section.
      image: 'target-overview-static-extension-targets',
      altText:
        'The background of the entire diagram is a light red, which is the color that represents static extension targets. In the center is a solid-line box that says Core Feature. Above and below it, connected to the Core Feature by a lock icon, there are two red dotted-line boxes that contain example names of static extension targets, indicating that they are always tied to the Core Feature.',
      sectionContent: `Static extension targets render immediately before or after most core customer account features.
      \n\nWhen a core customer account feature isn't rendered, neither are the static extension targets tied to it.
      \n\nChoose static extension targets when your content and functionality is closely related to a core customer account feature.
      `,
      sectionCard: [
        {
          name: 'Extension targets',
          subtitle: 'API reference',
          url: '/docs/api/customer-account-ui-extensions/targets',
          type: 'blocks',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'block-extension-targets',
      title: 'Block extension targets',
      sectionContent: `Block extension targets render between core customer account features. Block extensions are always rendered, regardless of what other elements of the customer account are present.\n\nBlock extension targets always support multiple placements. Each placement has an associated placement reference that represents its location on the page. For example, the block extension target \`customer-account.order-status.block.render\` supports seven placements. The placement references include \`PAGE_TITLE\`, \`ORDER_SUMMARY1\`, and more.\n\nYou can use placement references as URL parameters to [test block extensions](/docs/apps/build/customer-accounts/test#block-targets) in all supported placements on a page. You can also use placement references to [define the default placement](/docs/apps/build/app-extensions/configure-app-extensions#customer-account-ui-extensions) of an extension for merchants.`,
      altText:
        'The background of the entire diagram is a light purple, which is the color that represents block extension targets. In the center is a solid-line box that says Core Feature. Above and below it, not connected to the Core Feature, there are two purple dotted-line boxes that contain example names of block extension targets, indicating that they render between core features, regardless of whether that core feature is rendered or not.',
      sectionCard: [
        {
          name: 'Extension targets',
          subtitle: 'API reference',
          url: '/docs/api/customer-account-ui-extensions/targets',
          type: 'blocks',
        },
        {
          name: 'Placement references',
          subtitle: 'Learn more',
          url: '/docs/apps/build/customer-accounts/extension-placement#placement-references',
          type: 'resource',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'order-index',
      title: 'Order index',
      sectionContent:
        'The **Order index** page is where customers can view and manage all their past and current orders.',
      accordionContent: [
        {
          title: 'Orders',
          description: `The page contains one block extension that merchants can place above the page title or below the order list.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
            `,
          image: 'target-overview-order-index-orders.png',
          altText:
            "The desktop and mobile view of the Order index page, with the customer-account.order-index.block.render extension target shown in purple dotted-line boxes above the page title, and below the list of orders, indicating that it's a block extension target with multiple placements available.",
        },
        {
          title: 'Order action menu',
          description: `Actions available on specific order
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image: 'target-overview-order-action-menu-extension.png',
          altText:
            'The desktop and mobile view of the order action menu on the Order index page. The menu label is "Manage", and contains one menu item that says "Request return". The menu also contains a red dotted-line box that says  customer-account.order.action.menu-item.render, representing the static extension target that\'s available in this menu.',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'order-status',
      title: 'Order status',
      sectionContent:
        'The **Order status** page is where customers can view, track, and manage a specific order.',
      accordionContent: [
        {
          title: 'Order status',
          description: `For tracking order statuses, and any updates regarding the delivery, pickup, or return of items.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
            `,
          image: 'target-overview-order-status-extension.png',
          altText:
            'The desktop and mobile view of the Order status page. Above and below the page title, there is a purple dotted-line box that indicates the available placements for the block extension target on this page.',
        },
        {
          title: 'Order details',
          description: `Customer, shipping, and billing information associated with the order.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image: 'target-overview-order-details-extension.png',
          altText:
            'The desktop and mobile view of the Order details card on the Order status page, which includes contact information, payment, shipping address, billing address, and more. Above and below the Order details card there is a purple dotted-line box that indicates the available placements for the block extension target on this page. Inside the Order details card is a red dotted-line box that indicates the static extension target available in this location.',
        },
        {
          title: 'Payment status',
          description: `Depending on the payment status of the order, relevant payment information and action items may be displayed here. For example, for orders with payment terms, the amount due, the due data, and a **Pay now** button is displayed.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image: 'target-overview-payment-status.png',
          altText:
            'The desktop and mobile view of the payment status card. Inside the card, below the payment status information, there is a red dotted-line box that says customer-account.order-status.payment-details.render-after, indicating the static extension target available in this location.',
        },
        {
          title: 'Order summary',
          description: `Summary of the items, discounts, and order total.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image: 'target-overview-order-summary.png',
          altText:
            'The desktop and mobile view of the order summary card on the Order status page, which includes the images and names of the items in the order, their cost, and the calculations of subtotal, shipping, taxes, and total for the order. Under every item, there is a red dotted-line box that says customer-account.order-status.cart-line-item.render-after, indicating the static extension target available in this location. Under the entire list of items, there is one red dotted-line box that says customer-account.order-status.cart-line-list.render-after, indicating another static extension target available in this location. A purple dotted-line box that says customer-account.order-status.block-render is shown above the list of items, below the list of items, and below the, indicating the multiple placements available for this block extension target.',
        },
        {
          title: 'Order action menu',
          description: `Actions available on a specific order.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image: 'target-overview-order-status-order-action-menu-extension.png',
          altText:
            'The desktop and mobile video of the order action menu on the Order status page. The menu label is "Manage", and contains one menu item that says "Request return". The menu also contains a red dotted-line box that says  customer-account.order.action.menu-item.render, representing the static extension target that\'s available in this menu.',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'profile-default',
      title: 'Profile (Default)',
      sectionContent:
        'The **Profile** page is where customers view and edit their personal information.',
      accordionContent: [
        {
          title: 'Customer details',
          description: `The customer's name and contact information.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
            `,
          image: 'target-overview-customer-details-extension.png',
          altText:
            "The desktop and mobile view of the Profile page. Above the page title, and below the section of the page that contains the customer's name, email, and phone number, there are purple dotted-line boxes that indicate the available placements for the block extension target on this page.",
        },
        {
          title: 'Addresses',
          description: `The customer's personal addresses.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image: 'target-overview-addresses-extension.png',
          altText:
            "The desktop and mobile view of the addresses section of the Profile page. Inside the addresses card, under the customer's saved addresses, there's a red dotted-line box that says customer-account.profile.addresses.render-after, indicating the static extension target available in this location.",
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'profile-b2b',
      title: 'Profile (B2B)',
      sectionContent:
        'For B2B customers, the **Profile** page includes information about the customer, company, and the company location(s) the customer has access to. Learn more about the differences between the [default and B2B experiences](/docs/apps/customer-accounts#default-and-b2b-experiences).',
      accordionContent: [
        {
          title: 'Customer details',
          description: `The customer's name and contact information.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
            `,
          image: 'target-overview-customer-details-extension.png',
          altText:
            "The desktop and mobile view of the Profile page. Above the page title, and below the section of the page that contains the customer's name, email, and phone number, there are purple dotted-line boxes that indicate the available placements for the block extension target on this page.",
        },
        {
          title: 'Company details',
          description: `The company name. This extension target can be used to add more information about the company.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image: 'target-overview-company-details-extension.png',
          altText:
            'The desktop and mobile view of the company section of the Profile page. The header of the section says "Celadon" which is an example company name. Under the header, there is a red dotted-line box that says customer-account.profile.company-details.render-after, indicating the static extension target available in this location.',
        },
        {
          title: 'Company location details',
          description: `The shipping address, billing address, and payment details associated with each specific company location.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image: 'target-overview-company-location-details-extension.png',
          altText:
            "The desktop and mobile view of the section of the B2B Profile page that contains details about the company location. Under the addresses section, there's a red dotted-line box that says customer-account.profile.company-location-addresses.render-after, indicating the static extension target available in this location. Under the payment methods section, there's another red dotted-line box that says customer-account.profile.company-location-payment.render-after, indicating a static extension target available in this location.",
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'order-action-menu-extension-target',
      title: 'Order action menu',
      sectionContent:
        'Order-related actions that customers can access from both the **Order index** and **Order status** page.',
      accordionContent: [
        {
          title: 'Order index page',
          description: `Where customers can view and manage all their past and current orders.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
            `,
          image: 'target-overview-order-index-page-extension.png',
          altText:
            "The desktop and mobile view of the Order index page that contains a list of all orders. In the Manage menu, there's a red dotted-line box that says customer-account.order-action-menu-item.render, indicating the static extension target available in this location.",
        },
        {
          title: 'Order status page',
          description: `Where customers can view, track, and manage a specific order.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image: 'target-overview-order-status-page-extension.png',
          altText:
            "The desktop and mobile view of the Order status page that contains details about a specific order. In the Manage menu, there's a red dotted-line box that says customer-account.order-action-menu-item.render, indicating the static extension target available in this location.",
        },
        {
          title: 'Order action modal',
          description: `A modal that can rendered to complete an order action flow.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image: 'target-overview-order-action-render-extension.png',
          altText:
            'The desktop and mobile views of the customer-account.order.action.render extension target.',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'full-page-extension-target',
      title: 'Full-page extension',
      sectionContent:
        'This full-page extension allows you to create a new page in customer accounts. It renders in the main content area, below the header, and above the footer.',
      image: 'target-overview-full-page-extension.png',
      altText:
        'A desktop view of the header and footer of customer accounts. The entire main content area between the header and footer is occupied by a large blue dotted-line box that says Full-page extension, indicating that this area can be populated by a full-page customer account UI extension.',
    },
  ],
};

export default data;
