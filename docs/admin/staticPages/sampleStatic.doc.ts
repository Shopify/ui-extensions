import {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'a title',
  description: 'description',
  id: '<your-reference-name>',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'fakeAnchorLink',
      title: 'a title',
      sectionContent: 'The section content is written here.',
      sectionNotice: [
        {
          title: 'A very important title.',
          sectionContent: 'Due to XYZ, this is a very important notice.',
          type: 'critical',
        },
      ],
      sectionCard: [
        {
          name: 'a fake name',
          subtitle: 'Navigate to',
          url: 'www.anotherUrl.com',
          type: 'hook',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'generic-accordion',
      sectionContent: 'The section content is written here.',
      title: 'A title',
      accordionContent: [
        {
          title: 'An accordion title',
          description: 'The description of the accordion content.',
        },
      ],
    },
    {
      type: 'Resource',
      anchorLink: 'fakeAnchorLink',
      title: 'a title',
      resources: [
        {
          name: 'the entity name',
          subtitle: 'More information about the entity.',
          url: 'www.shopify-entity.com',
          type: 'component',
        },
      ],
    },
  ],
};

export default data;
