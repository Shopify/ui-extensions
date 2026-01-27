/**
 * Shared design guidelines for pattern documentation.
 * Import these into .ab.doc.ts files to maintain consistency across patterns.
 */

export const navigationGuidelines = {
  title: 'Navigation',
  sectionContent: `- Provide breadcrumbs or a Back button so users can return to the previous page without using the browser button.
- Use tabs sparingly for secondary navigation when the nav menu isn't sufficient.
- Clicking a tab should only change content below it, not above.
- Tabs should never wrap onto multiple lines or shift position when navigating.
- Offer clear and predictable action labels.`,
};

export const layoutGuidelines = {
  title: 'Layout',
  sectionContent: `- Use looser spacing for low-density layouts, tighter spacing for high-density layouts.
- Always use the default width. Full width wastes space and makes the page harder to parse.
- Arrange content in order of importance.
- Group similar content in the same card.`,
};

export const formGuidelines = {
  title: 'Forms',
  sectionContent: `- For more than five inputs, use sections with titles in one card or use multiple cards with headers.
- Continuous data validation or auto-save is consistent with the standard Shopify admin save UX.`,
};
