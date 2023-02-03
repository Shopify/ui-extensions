import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'Buttons are used for actions, such as “Add”, “Continue”, “Pay now”, or “Save”.',
  thumbnail: 'button-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ButtonProps',
      description: '',
      type: 'ButtonProps',
    },
  ],
  category: 'Components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'button-default.png',
    codeblock: {
      title: 'Basic Button',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/Button/examples/basic-button.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-button.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'appearance',
      title: 'Appearance',
      sectionContent:
        '| Value | Description |\n| --- | --- |\n| <code>"critical"</code> | Conveys a problem has arisen. |\n| <code>"monochrome"</code> | Takes the color of its parent.|',
    },
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Make button labels clear, so that customers can predict the results of interacting with the button.\n\n- Use primary buttons for actions that progress customers through checkout, such as <b>Continue to shipping</b> and <b>Pay now</b>.\n\n- Use secondary buttons for actions that you want to draw attention to, but aren’t primary, such as <b>Track your order.</b>\n\n- Use plain buttons when you want the appearance of a text link with the hit area of a button. This works well alongside other buttons to create hierarchies such as <b>Continue</b> and <b>Return to cart.</b>',
    },
  ],
  related: [
    {
      name: 'Link',
      subtitle: 'Component',
      url: 'link',
      type: 'Component',
    },
  ],
};

export default data;
