import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ChoiceList';
import choiceSharedContent from '../../../../docs/shared/components/Choice';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  subcomponent: {
    ...choiceSharedContent,
    definitions: {properties: true, slots: true},
  },
  extraExamples: {
    description: `The \`ChoiceList\` component offers different variants to suit various use cases. Choose the right variant based on the number of choices, the complexity of the content, and the available screen space. Below are some best practices for each variant.`,
    examples: [
      {
        description: `This classic and flexible variant is ideal for <strong>up to 10 choices</strong>. It’s the most common and recognizable format for making a selection from a vertical list.

<strong>Best Practices</strong>
<ul>
  <li><strong>Keep it simple:</strong> Keep the initial content for each item as concise as possible so users can quickly scan and compare their choices.</li>
  <li><strong>Add extra content strategically:</strong> Only use the "selected content" slot if the information is <strong>essential and directly tied</strong> to the selected item. For example, a map that shows the location of a chosen address is an effective use case. If the content doesn’t need to be in close proximity to the selected item, place it elsewhere on the page to reduce visual clutter.</li>
</ul>`,
        codeblock: {
          title: 'List Variant',
          tabs: [
            {
              code: './examples/list-choice-variant.example.html',
              language: 'html',
            },
          ],
        },
        image: 'choicelist-list-variant.png',
      },
      {
        description: `This variant is designed for options that require both <strong>secondary content</strong> and a clear visual separation. It’s well-suited for <strong>up to 5 choices</strong> where each item is complex and needs its own defined space. Due to its "chunky" footprint, using more than 5 can take up too much vertical space.

<strong>Best Practices</strong>
<ul>
  <li><strong>Focus on clarity:</strong> Use this variant to help users compare options with more complexity than a simple list, such as an item with a title, a description, and a price.</li>
  <li><strong>Be intentional with extra content:</strong> Just like the List variant, only include extra content when it’s <strong>crucial for the user to make a final decision</strong> and when its close proximity to the selected block is a benefit.</li>
</ul>`,
        codeblock: {
          title: 'Block Variant',
          tabs: [
            {
              code: './examples/block-choice-variant.example.html',
              language: 'html',
            },
          ],
        },
        image: 'choicelist-block-variant.png',
      },
      {
        description: `This compact variant is ideal when <strong>screen real estate is limited</strong>. It works best for <strong>up to 3 to 5 choices</strong> depending on the typical length of the content.

<strong>Best Practices</strong>
<ul>
  <li><strong>Keep content short and simple:</strong> Due to its horizontal layout, content for each item must be <strong>succinct, simple, and short</strong>, especially on mobile.</li>
  <li><strong>Avoid extra content:</strong> This variant does not support extra content upon selection, so it’s best for a scenario where the user's decision doesn’t require additional information.</li>
</ul>`,
        codeblock: {
          title: 'Inline Variant',
          tabs: [
            {
              code: './examples/inline-choice-variant.example.html',
              language: 'html',
            },
          ],
        },
        image: 'choicelist-inline-variant.png',
      },
      {
        description: `This variant is best for <strong>up to 6 choices</strong>, arranged in a grid-like layout. It’s great for scenarios where choices have significant visual differences and need to be arranged for easy comparison.

<strong>Best Practices</strong>
<ul>
  <li><strong>Keep content short and simple:</strong> The content in each item needs to be <strong>succinct and simple</strong> because the horizontal and vertical constraints of the grid can limit the available space.</li>
  <li><strong>Avoid extra content:</strong> This variant does not support extra content upon selection, so it’s best for a scenario where the user's decision doesn’t require additional information.</li>
</ul>`,
        codeblock: {
          title: 'Grid Variant',
          tabs: [
            {
              code: './examples/grid-choice-variant.example.html',
              language: 'html',
            },
          ],
        },
        image: 'choicelist-grid-variant.png',
      },
    ],
  },
});

export default data;
