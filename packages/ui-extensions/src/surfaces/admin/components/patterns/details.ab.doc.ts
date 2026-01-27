import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import {
  navigationGuidelines,
  layoutGuidelines,
  formGuidelines,
} from '../../../../docs/shared/patterns/design-guidelines';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Details',
  isOneColumnLayout: true,
  overviewPreviewDescription:
    'Edit and view objects with efficient dual-column layout.',
  description: `A details page provides an editable interface for viewing, creating, and editing resource objects within your app. Use the primary column for editable fields and the secondary column for supporting information like status, metadata, and summaries.

  This template is a recommended design pattern, especially for apps in the [Built for Shopify](/docs/apps/launch/built-for-shopify/requirements) program. See [Best practices](#best-practices) below for more details.

  #### Use cases

  - Customer profiles: Managing customer information, order history, contact details
  - Discount management: Setting up and configuring promotional codes, automatic discounts, campaigns
  - Order details: Viewing and modifying order information, fulfillment status, shipping details
  - Product details: Creating, viewing, and editing product information, variants, pricing
  `,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Templates',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/details.png',
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `Following these best practices ensures a consistent merchant experience:

- Use the primary column for information that defines the resource object. Use the secondary column for supporting information (status, metadata, summaries).
- Place unique page actions at the top of the actions list and typical object actions at the bottom.

Additional best practices that satisfy [Built for Shopify](/docs/apps/launch/built-for-shopify/requirements) requirements include:

- [**4.1.2 Mobile-friendly**](/docs/apps/launch/built-for-shopify/requirements#mobile-friendly): The layout should stack responsively on smaller screens
- [**4.1.5 Use the contextual save bar**](/docs/apps/launch/built-for-shopify/requirements#use-the-contextual-save-bar): Forms must use the [Save Bar](/docs/api/app-home/apis/save-bar) so merchants cannot navigate away without saving or discarding changes
- [**4.1.6 Use modals appropriately**](/docs/apps/launch/built-for-shopify/requirements#use-modals-appropriately): Destructive actions (Delete) should use [Modal](/docs/api/app-home/apis/modal) confirmations
- [**4.2.4 Helpful error messages**](/docs/apps/launch/built-for-shopify/requirements#helpful-error-messages): Form validation errors should appear directly below relevant fields in red
- [**4.2.6 Visible previews**](/docs/apps/launch/built-for-shopify/requirements#visible-previews): The dual-column layout lets merchants see changes in real-time without toggling views`,
      sectionSubContent: [
        {
          title: 'APIs and components',
          sectionContent: `- Use [\`s-page\`](/docs/api/app-home/polaris-web-components/structure/page) for page structure and secondary actions (Duplicate, Delete)
- Use [Toast](/docs/api/app-home/apis/toast) for success feedback after saves
- Use [Resource Picker](/docs/api/app-home/apis/resource-picker) when selecting related resources like products or customers`,
        },
        navigationGuidelines,
        layoutGuidelines,
        formGuidelines,
      ],
    },
  ],
  defaultExample: {
    description:
      'A details page with dual-column layout featuring editable fields, status indicators, and supporting metadata sections.',
    codeblock: {
      title: 'Details',
      tabs: [
        {
          title: 'html',
          code: './examples/details.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: './examples/details.jsx',
          language: 'preview-jsx',
          layout: 'templatePattern',
          customStyles: {
            minHeight: '400px',
          },
        },
      ],
    },
    // @ts-expect-error - usedComponents is a proposed schema extension
    usedComponents: [
      'Badge',
      'Box',
      'Button',
      'Grid',
      'Heading',
      'Image',
      'Link',
      'MoneyField',
      'NumberField',
      'SearchField',
      'Section',
      'Select',
      'Stack',
      'Switch',
      'Table',
      'TextArea',
      'TextField',
      'UnorderedList',
      'URLField',
    ],
  },
};

export default data;
