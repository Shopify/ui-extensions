import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Announcement';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {events: true, methods: true},
  bestPractices: `- Prioritize the default state: The most effective use of the announcement bar is when content is short enough to display entirely in its default state, with no need for expansion. This provides the best user experience.
- Handle content truncation: The component has a strict maximum height. Content that exceeds the expanded state's height will be cut off with no scrolling capability. Ensure your application's logic handles excessively long content gracefully to prevent truncation.
- Provide a modal alternative: If your application needs to display more than a few lines of content, avoid cramming it into the announcement bar. Instead, use the bar as a teaser that links to a modal. This is the recommended pattern for displaying surveys, detailed offers, or other longer-form content.`,
});

export default data;
