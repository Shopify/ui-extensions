import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const CHECKOUT_PATH =
  '/docs/api/checkout-ui-extensions/latest/using-polaris-components';

interface DefinitionsConfiguration {
  properties?: boolean;
  events?: boolean;
  slots?: boolean;
  methods?: boolean;
}

interface ComponentDoc {
  name: ReferenceEntityTemplateSchema['name'];
  description: ReferenceEntityTemplateSchema['description'];
  category: ReferenceEntityTemplateSchema['category'];
  related?: ReferenceEntityTemplateSchema['related'];
  requires?: ReferenceEntityTemplateSchema['requires'];
  type?: ReferenceEntityTemplateSchema['type'];
  isVisualComponent?: ReferenceEntityTemplateSchema['isVisualComponent'];
  definitions: DefinitionsConfiguration;
  typeName?: string;
  subcomponent?: {
    name: ReferenceEntityTemplateSchema['name'];
    description?: ReferenceEntityTemplateSchema['description'];
    definitions: DefinitionsConfiguration;
  };
  usefulFor?: string;
  considerations?: string;
  bestPractices?: string;
  subCategory?: ReferenceEntityTemplateSchema['subCategory'];
  extraContent?: ReferenceEntityTemplateSchema['subSections'];
  extraExamples?: ReferenceEntityTemplateSchema['examples'];
}

function toPascalCase(name: string) {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function buildDefinitions({
  name,
  description,
  definitions,
  typeName: typeNameOverride,
}: {
  name: string;
  description?: string;
  definitions: DefinitionsConfiguration;
  typeName?: string;
}) {
  const typeName = typeNameOverride ?? toPascalCase(name);
  // Components with events or methods export a separate {Name}ElementProps
  // interface; simpler components only export {Name}Props.
  const propsType =
    definitions.events || definitions.methods
      ? `${typeName}ElementProps`
      : `${typeName}Props`;

  return [
    ...(description
      ? [
          {
            title: `${name}`,
            description,
            type: propsType,
          },
        ]
      : []),

    ...(!description && definitions.properties
      ? [
          {
            title: 'Properties',
            description: '',
            type: propsType,
          },
        ]
      : []),

    ...(definitions.events
      ? [
          {
            title: 'Events',
            description: `Learn more about [registering events](${CHECKOUT_PATH}#event-handling).`,
            type: `${typeName}ElementEvents`,
          },
        ]
      : []),

    ...(definitions.slots
      ? [
          {
            title: 'Slots',
            description: `Learn more about [component slots](${CHECKOUT_PATH}#slots).`,
            type: `${typeName}ElementSlots`,
          },
        ]
      : []),

    ...(definitions.methods
      ? [
          {
            title: 'Methods',
            description: `Learn more about [component methods](${CHECKOUT_PATH}#methods).`,
            type: `${typeName}ElementMethods`,
          },
        ]
      : []),
  ];
}

export function createComponentDoc({
  name,
  description,
  category,
  related = [],
  requires = '',
  type = '',
  subCategory = '',
  isVisualComponent = true,
  definitions,
  typeName,
  subcomponent,
  usefulFor,
  considerations,
  bestPractices,
  extraContent = [],
  extraExamples,
}: ComponentDoc): ReferenceEntityTemplateSchema {
  const kebabCasedName = name
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

  return {
    name,
    description,
    category,
    related,
    isVisualComponent,
    thumbnail: `${kebabCasedName}-thumbnail.png`,
    requires,
    type,
    subCategory,
    definitions: [
      ...buildDefinitions({name, definitions, typeName}),
      ...(subcomponent ? buildDefinitions(subcomponent) : []),
    ],
    defaultExample: {
      image: `${kebabCasedName}-default.png`,
      codeblock: {
        title: 'Code',
        tabs: [
          {
            code: `./examples/basic-${kebabCasedName}.example.html`,
            language: 'html',
          },
        ],
      },
    },
    examples: extraExamples,
    subSections: [
      ...(usefulFor
        ? [
            {
              title: 'Useful for',
              type: 'Generic' as const,
              anchorLink: 'useful-for',
              sectionContent: usefulFor,
            },
          ]
        : []),
      ...(considerations
        ? [
            {
              title: 'Considerations',
              type: 'Generic' as const,
              anchorLink: 'considerations',
              sectionContent: considerations,
            },
          ]
        : []),
      ...(bestPractices
        ? [
            {
              type: 'Generic' as const,
              anchorLink: 'best-practices',
              title: 'Best Practices',
              sectionContent: bestPractices,
            },
          ]
        : []),
      ...extraContent,
    ],
  };
}
