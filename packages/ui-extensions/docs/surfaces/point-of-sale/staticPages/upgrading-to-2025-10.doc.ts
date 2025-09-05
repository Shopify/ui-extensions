import type {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  title: 'Upgrading to 2025-10',
  description: `
This guide describes how to upgrade your point-of-sale UI extension to API version \`2025-10\` and adopt [Polaris](/beta/next-gen-dev-platform/polaris) web components.
`,
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm the id matches the reference name.
  id: 'upgrading-to-2025-10',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'update-api-version',
      title: 'Update API version',
      sectionContent:
        'Set the API version to `2025-10` in `shopify.extension.toml` to use Polaris web components.',
      sectionNotice: [
        {
          title: 'Early access preview',
          sectionContent: `
We do not recommend migrating your production point-of-sale UI extension to Polaris yet. However, now is a great time to explore this new version and start thinking about what it means for your own extensions.
`,
          type: 'info',
        },
      ],
      codeblock: {
        title: 'shopify.extension.toml',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: './examples/upgrading-to-2025-10/shopify.extension-new.toml',
            language: 'toml',
          },
        ],
      },
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'adjust-dependencies',
      title: 'Adjust package dependencies',
      sectionContent: `
As of \`2025-10\`, Shopify recommends Preact for UI extensions. Update the dependencies in your \`package.json\` file and re-install.
`,
      accordionContent: [
        {
          title: 'New dependencies with Preact',
          description: '',
          codeblock: {
            title: 'New dependencies with Preact',
            tabs: [
              {
                title: 'package.json',
                code: './examples/upgrading-to-2025-10/package-json-new.json',
                language: 'json',
              },
            ],
          },
        },
        {
          title: 'Previous dependencies with React',
          description: '',
          codeblock: {
            title: 'Previous dependencies with React',
            tabs: [
              {
                title: 'package.json',
                code: './examples/upgrading-to-2025-10/package-json-old-react.json',
                language: 'json',
              },
            ],
          },
        },
        {
          title: 'Previous dependencies with JavaScript',
          description: '',
          codeblock: {
            title: 'Previous dependencies with JavaScript',
            tabs: [
              {
                title: 'package.json',
                code: './examples/upgrading-to-2025-10/package-json-old-js.json',
                language: 'json',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'make-typescript-adjustments',
      title: 'Make TypeScript adjustments',
      sectionContent: `
These steps make TypeScript aware of the new global \`shopify\` object. Skip these steps if your app was not built using TypeScript.
`,
      accordionContent: [
        {
          title: "Update your extension's tsconfig.json",
          description:
            "Update your extension config at a path like `extensions/{extension-name}/tsconfig.json`. You do **not** need to change your app's root `tsconfig.json` file.",
          codeblock: {
            title: "Update your extension's tsconfig.json",
            tabs: [
              {
                title: 'New tsconfig.json',
                code: './examples/upgrading-to-2025-10/new-tsconfig.example.json',
                language: 'json',
              },
              {
                title: 'Old tsconfig.json',
                code: './examples/upgrading-to-2025-10/old-tsconfig.example.json',
                language: 'json',
              },
            ],
          },
        },
        {
          title:
            'Generate type definition file to support new global shopify object',
          description:
            'These commands generate a `shopify.d.ts` file in your extension directory.',
          codeblock: {
            title: 'Support new global shopify object',
            tabs: [
              {
                title: 'CLI',
                code: './examples/upgrading-to-2025-10/support-new-shopify-global.example.bash',
                language: 'bash',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'migrate-api-calls',
      title: 'Migrate API calls',
      sectionContent:
        "Instead of accessing APIs from a callback parameter, access them from the global `shopify` object. Here's an example of migrating API calls.",
      accordionContent: [
        {
          title: 'New API calls in Preact',
          description: '',
          codeblock: {
            title: 'New API calls in Preact',
            tabs: [
              {
                title: 'Preact',
                code: './examples/upgrading-to-2025-10/apis-new.tsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'Previous API calls in React',
          description: '',
          codeblock: {
            title: 'Previous API calls in React',
            tabs: [
              {
                title: 'React',
                code: './examples/upgrading-to-2025-10/apis-old-react.tsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'Previous API calls in JavaScript',
          description: '',
          codeblock: {
            title: 'Previous API calls in JavaScript',
            tabs: [
              {
                title: 'JavaScript',
                code: './examples/upgrading-to-2025-10/apis-old-js.ts',
                language: 'ts',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'migrate-hooks',
      title: 'Migrate hooks',
      sectionContent:
        "If you had previously been using React hooks, import those same hooks from a new Preact-specific package. Here's an example of migrating hooks.",
      accordionContent: [
        {
          title: 'New hooks in Preact',
          description: '',
          codeblock: {
            title: 'New hooks in Preact',
            tabs: [
              {
                title: 'Preact',
                code: './examples/upgrading-to-2025-10/hooks-new.tsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'Previous hooks in React',
          description: '',
          codeblock: {
            title: 'Previous hooks in React',
            tabs: [
              {
                title: 'React',
                code: './examples/upgrading-to-2025-10/hooks-old.tsx',
                language: 'tsx',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'migrate-to-polaris-web-components',
      title: 'Migrate to Polaris web components',
      sectionContent:
        'Polaris web components are exposed as custom HTML elements. Update your React or JavaScript components to custom elements.',
      accordionContent: [
        {
          title: 'New components in Preact',
          description: '',
          codeblock: {
            title: 'New components in Preact',
            tabs: [
              {
                title: 'Preact',
                code: './examples/upgrading-to-2025-10/components-new.tsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'Previous components in React',
          description: '',
          codeblock: {
            title: 'Previous components in React',
            tabs: [
              {
                title: 'React',
                code: './examples/upgrading-to-2025-10/components-old-react.tsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'Previous components in JavaScript',
          description: '',
          codeblock: {
            title: 'Previous components in JavaScript',
            tabs: [
              {
                title: 'JavaScript',
                code: './examples/upgrading-to-2025-10/components-old-js.ts',
                language: 'ts',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'polaris-web-components',
      title: 'Polaris web components',
      sectionContent: '',
      sectionNotice: [
        {
          title: 'Early access preview',
          sectionContent: `
These web components are an early access preview of the [Polaris](/beta/next-gen-dev-platform/polaris) UI framework. We will add more components over time.

Use the comparison table below to see which Polaris web components are available today, which are coming soon, and how they map to legacy components.
`,
          type: 'info',
        },
      ],
    },
    {
      type: 'Markdown',
      anchorLink: 'mapping-legacy-components-to-polaris-web-components',
      title: 'Mapping legacy components to Polaris web components',
      sectionContent: `
|   **Legacy&nbsp;Component**   |   **Polaris&nbsp;Web&nbsp;Component**   |   **Migration&nbsp;Notes**   |
| :----------------------: | :-------------------------------: | :---------------------: |
|   \`Badge\`                  |   [\`Badge\`](polaris-web-components/titles-and-text/badge)   |   Available   |
|   \`Banner\`                 |   [\`Banner\`](polaris-web-components/feedback/banner)   |   Available   |
|   \`Box\`                    |   [\`Box\`](polaris-web-components/structure/box)   |   Available   |
|   \`Button\`                 |   [\`Button\`](polaris-web-components/actions/button)   |   Available   |
|   \`CameraScanner\`          |   \`CameraScanner\`   |   Coming soon   |
|   \`DateField\`              |   [\`DateField\`](polaris-web-components/forms/datefield)   |   Available   |
|   \`DatePicker\`             |   [\`DatePicker\`](polaris-web-components/forms/datepicker)   |   Available   |
|   \`DatePicker\`            |   [\`DateSpinner\`](polaris-web-components/forms/datespinner)   |   Available, Replaces \`DatePicker.inputMode="spinner"\`   |
|   \`Dialog\`                 |   [\`Modal\`](polaris-web-components/structure/modal)   |   Available   |
|   \`EmailField\`             |   [\`EmailField\`](polaris-web-components/forms/emailfield)   |   Available   |
|   \`Heading\`                |   [\`Heading\`](polaris-web-components/titles-and-text/heading)   |   Available   |
|   \`Icon\`                   |   [\`Icon\`](polaris-web-components/media/icon)   |  Available, more icons coming soon.  |
|   \`Image\`                  |   [\`Image\`](polaris-web-components/media/image)   |   Available   |
|   \`List\`                   |   VirtualizedList   |  Coming soon   |
|   \`Navigator\`              |      |   Removed.   |
|   \`NumberField\`            |   [\`NumberField\`](polaris-web-components/forms/numberfield)   |   Available   |
|   \`PinPad\`                 |     |   Coming soon   |
|   \`POSBlock\`               |   \`POSBlock\`   |   Coming soon   |
|   \`POSBlockRow\`            |    |   Replaced by \`POSBlock\`  |
|   \`POSReceiptBlock\`        |     |   Replaced by \`POSBlock\`   |
|   \`PrintPreview\`           |   \`DocumentPreview\`   |   Coming soon   |
|   \`QRCode\`                 |   \`QRCode\`   |   Coming soon   |
|   \`RadioButtonList\`        |   [\`ChoiceList\`](polaris-web-components/forms/choicelist)   |   Available   |
|   \`Screen\`                 |   [\`Page\`](polaris-web-components/structure/page)   |   Available   |
|   \`ScrollView\`             |   [\`ScrollBox\`](polaris-web-components/structure/scrollbox)   |   Available  |
|   \`SearchBar\`              |   [\`SearchField\`](polaris-web-components/forms/searchfield)   |   Available   |
|   \`Section\`                |   [\`Section\`](polaris-web-components/structure/section)   |   Available   |
|   \`SectionHeader\`          |     |   Use \`Section.heading\`   |
|   \`SegmentedControl\`       |   \`Tabs\`/\`Tab\`   |   Coming soon   |
|   \`Selectable\`             |   [\`Clickable\`](polaris-web-components/actions/clickable)   |   Available   |
|   \`Stack\`                  |   [\`Stack\`](polaris-web-components/structure/stack)   |   Available   |
|   \`Stepper\`                |   [\`NumberField\`](polaris-web-components/forms/numberfield)   |   Use \`NumberField\` with stepper controls   |
|   \`Text\`                   |   [\`Text\`](polaris-web-components/titles-and-text/text)   |   Available   |
|   \`TextArea\`               |   [\`TextArea\`](polaris-web-components/forms/textarea)   |   Available   |
|   \`TextField\`              |   [\`TextField\`](polaris-web-components/forms/textfield)   |   Available   |
|   \`Tile\`                   | [\`Tile\`](polaris-web-components/actions/tile)  |  Available   |
|   \`TimeField\`              |   \`TimeField\`   |   Coming soon   |
|   \`TimePicker\`             |   [\`TimePicker\`](polaris-web-components/forms/timepicker)   |   Available   |
`,
    },
  ],
};

export default data;
