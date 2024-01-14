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
      image:
        'target-overview-static-extension-targets',
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
      sectionContent: `Block extension targets render between core customer account features.
      \n\nBlock extensions are always rendered, regardless of what other elements of the customer account are present. `,
      image:
        'target-overview-block-extension-targets.png',
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
      type: 'GenericAccordion',
      anchorLink: 'order-index',
      title: 'Order index',
      sectionContent:
        'The order index page is where customers can view and manage all their past and current orders.',
      accordionContent: [
        {
          title: 'Orders',
          description: `The page contains one block extension that merchants can place above the page title or below the order list.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
            `,
          image:
            'target-overview-order-index-orders.png',
        },
        {
          title: 'Order action menu',
          description: `Actions available on specific order
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image:
            'target-overview-order-action-menu-extension.png',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'order-status',
      title: 'Order status',
      sectionContent:
        'The order status page is where customers can view, track, and manage a specific order.',
      accordionContent: [
        {
          title: 'Order status',
          description: `For tracking order statuses, and any updates regarding the delivery, pickup, or return of items.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
            `,
          image:
            'target-overview-order-status-extension.png',
        },
        {
          title: 'Order details',
          description: `Customer, shipping, and billing information associated with the order.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image:
            'target-overview-order-details-extension.png',
        },
        {
          title: 'Payment status',
          description: `Depending on the payment status of the order, relevant payment information and action items may be displayed here. For example, for orders with payment terms, the amount due, the due data, and a **Pay now** button is displayed.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image:
            'target-overview-payment-status.png',
        },
        {
          title: 'Order summary',
          description: `Summary of the items, discounts, and order total.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image:
            'target-overview-order-summary.png',
        },
        {
          title: 'Order action menu',
          description: `Actions available on a specific order.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image:
            'target-overview-order-status-order-action-menu-extension.png',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'profile-default',
      title: 'Profile (Default)',
      sectionContent:
        'Where customers view and edit their personal information.',
      accordionContent: [
        {
          title: 'Customer details',
          description: `The customer's name and contact information.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
            `,
          image:
            'target-overview-customer-details-extension.png',
        },
        {
          title: 'Addresses',
          description: `The customer's personal addresses.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image:
            'target-overview-addresses-extension.png',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'profile-b2b',
      title: 'Profile (B2B)',
      sectionContent:
        'For B2B customers, the profile page includes information about the customer, company, and the company location(s) the customer has access to. Review the [UX guidelines](/docs/app/customer-account/best-practices/ux-guidelines) for more information on the differences between the Default vs. B2B experience.',
      accordionContent: [
        {
          title: 'Customer details',
          description: `The customer's name and contact information.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
            `,
          image:
            'target-overview-customer-details-extension.png',
        },
        {
          title: 'Company details',
          description: `The company name. This extension target can be used to add more information about the company.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image:
            'target-overview-company-details-extension.png',
        },
        {
          title: 'Company location details',
          description: `The shipping address, billing address, and payment details associated with each specific company location.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image:
            'target-overview-company-location-details-extension.png',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink:
        'order-action-menu-extension-target',
      title: 'Order action menu',
      sectionContent:
        'Order-related actions that customers can access from both the order index and order status page.',
      accordionContent: [
        {
          title: 'Order index page',
          description: `Where customers can view and manage all their past and current orders.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
            `,
          image:
            'target-overview-order-index-page-extension.png',
        },
        {
          title: 'Order status page',
          description: `Where customers can view, track, and manage a specific order.
          \nSee all [extension targets](/docs/api/customer-account-ui-extensions/targets).
          `,
          image:
            'target-overview-order-status-page-extension.png',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'full-page-extension-target',
      title: 'Full-page extension',
      sectionContent:
        'This full-page extension allows you to create a new page in customer accounts. It renders in the main content area, below the header, and above the footer.',
      image:
        'target-overview-full-page-extension.png',
    },
  ],
};

export default data;
