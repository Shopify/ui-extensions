import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Select';
import optionSharedContent from '../../../../docs/shared/components/Option';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Display hint text when no option is selected to guide the buyer. This example displays a language select with `placeholder` prompting the user to choose.',
        codeblock: {
          title: 'Add placeholder text to a select',
          tabs: [
            {
              code: './examples/select-placeholder.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subcomponent: {
    ...optionSharedContent,
    definitions: {properties: true},
  },
});

export default data;
