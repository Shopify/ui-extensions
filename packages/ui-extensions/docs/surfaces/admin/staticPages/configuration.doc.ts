import {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Configuration',
  description:
    'When you create an admin UI extension, the shopify.ui.extension.toml file is automatically generated in your admin UI extension directory. This guide describes the properties that you can configure in shopify.ui.extension.toml.',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  id: 'configuration',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'how-it-works',
      title: 'How it works',
      sectionContent: `Define properties for your Admin block extension in the extension configuration file. The \`shopify.extension.toml\` file contains the extension's configuration, which include the extension name, \`api_version\`, extension targets and modules.

These extensions are currently in a Develoepr Preview so they cannot be published to Shopify.`,
    },
    {
      type: 'GenericList',
      anchorLink: 'configuration-options',
      title: 'Configuration Options',
      listItems: [
        {
          name: 'name',
          description:
            'The name of the extension. This is the name that will be displayed in the container of your extension.',
          value: 'string',
          isOptional: false,
        },
        {
          name: 'api_version',
          description:
            'The version of the Components and APIs that the extension uses',
          value: 'string',
          isOptional: false,
        },
        {
          name: 'extensions',
          description:
            'This is a grouping of properties that define the extension being developed.',
          value: 'string',
          isOptional: false,
        },
        {
          name: 'handle',
          description:
            'The handle of the extension. This value is not merchant facing.',
          value: 'string',
          isOptional: false,
        },
        {
          name: 'type',
          description:
            'This is an enum value indicating what the extension run time is. For all current extensions, this value will be ui_extension.',
          value: 'ui_extension',
          isOptional: false,
        },
        {
          name: 'extensions.targeting',
          description:
            'This is a grouping of extension targets that the extension is targeting.',
          value: 'string',
          isOptional: false,
        },
        {
          name: 'module',
          description:
            'A relative path to the extension code that will be executed for the specified target.',
          value: 'string',
          isOptional: false,
        },
        {
          name: 'target',
          description:
            'A string indicator of the extension target. These values will indicate where the extension target in the specified module will render.',
          value: 'ExtensionPoints',
          isOptional: false,
        },
      ],
      codeblock: {
        title: 'shpoify.extension.toml',
        tabs: [
          {
            code: './examples/shopify.extension.toml',
            language: 'toml',
            title: 'shpoify.ui.extension.toml',
          },
        ],
      },
    },
  ],
};

export default data;
