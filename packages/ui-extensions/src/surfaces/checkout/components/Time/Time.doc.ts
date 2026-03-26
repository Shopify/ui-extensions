import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Time';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
    description: 'Examples of additional ways to use the Time component.',
    examples: [
      {
        description:
          'Set `dateTime` to an ISO value for machine-readable time and use human-friendly text as the display content. This contrasts with the full-date format in the default sample.',
        codeblock: {
          title: 'Show a same-day pickup window',
          tabs: [
            {
              code: './examples/time-pickup.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  bestPractices:
    '- Use Time component for displaying time values to ensure consistent formatting.\n\n- Provide time values in a clear, readable format.\n\n- Consider using 24-hour format for international audiences.\n\n- Include timezone information when relevant.\n\n- Use Time component for any time-related content to maintain semantic meaning.',
});

export default data;
