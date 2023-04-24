import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Disclosure',
  description:
    'Disclosure is an optionally controlled component used to put long sections of information under blocks that users can expand or collapse.',
  thumbnail: 'Disclosure-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'DisclosureProps',
      description: '',
      type: 'DisclosureProps',
    },
  ],
  category: 'Components',
  subCategory: 'Interactive',
  defaultExample: {
    image: 'disclosure-default.png',
    codeblock: {
      title: 'Basic Disclosure',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/Disclosure/examples/basic-disclosure.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-disclosure.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Disclosures should be initiated by the buyer.\n\n- Use disclosures to hide content until they are relevant to the buyer.\n\n- Avoid hiding critical information that buyers need to complete their checkout.\n\n- Keep content inside disclosures concise.\n\n- Avoid nesting of disclosures.\n\n- Keep the activator and the content it toggles in close proximity to each other.',
    },
  ],
  related: [],
};

export default data;
