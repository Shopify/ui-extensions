import {resolve, extname} from 'path';
import * as fs from 'fs';
import {v4 as uuidv4} from 'uuid';
import showdown from 'showdown';

import type {
  Documentation,
  InterfaceType,
  LocalReference,
  RemoteComponent,
  Type,
  PropertySignature,
  Tag,
} from './types';
import {createDependencyGraph, Module} from './utilities/dependency-graph';

interface Packages {
  [key: string]: string;
}

interface Paths {
  inputRoot: string;
  outputRoot: string;
  packages: Packages;
  shopifyDevUrl: string;
}

export function renderForShopifyDev(paths: Paths) {
  extensionPoints();
  components(paths);
  gettingStarted();
}

function gettingStarted() {
  const indexFile = resolve(
    '../shopify-dev/content/tools/argo-checkout/index.md',
  );

  let markdown = `---\ngid: ${findUuid(
    indexFile,
  )}\nurl: /tools/argo-checkout/index\ntitle: Getting Started with Argo Checkout\ndescription: Getting Started with Argo Checkout.\nhidden: true\n---\n\n`;

  const contentFolder = resolve(
    '../checkout-web/packages/argo-checkout/documentation',
  );

  const files = [
    'getting-started.md',
    'extension-points.md',
    'globals.md',
    'rendering.md',
    'components.md',
  ];

  if (fs.existsSync(contentFolder)) {
    files.forEach((file) => {
      markdown += `${fs.readFileSync(`${contentFolder}/${file}`, 'utf8')}\n`;
    });
  }

  fs.writeFile(indexFile, markdown, function (err) {
    if (err) throw err;
  });

  return markdown;
}

interface Node {
  value: RemoteComponent | Type | LocalReference;
  module: Module | undefined;
}

const additionalPropsTables: string[] = [];
const converter = new showdown.Converter();

async function extensionPoints() {
  const extensionsIndex = resolve(
    '../checkout-web/packages/argo-checkout/src/index.ts',
  );

  const graph = await createDependencyGraph(extensionsIndex);

  const allInterfaces: InterfaceType[] = [];

  for (const value of graph.values()) {
    const localValues = [...value.locals.values()];
    allInterfaces.push(
      ...(localValues.filter(
        ({kind}) => kind === 'InterfaceType',
      ) as InterfaceType[]),
    );
  }

  const nodes: Node[] = [];

  graph.forEach((value) => {
    value.locals.forEach((value: any, key) => {
      if (value.kind !== 'Imported') {
        if (value.name == null) {
          value.name = key;
        }
        nodes.push({value, module: undefined});
      }
    });
  });

  const interfaceEntryPoints = ['ExtensionPoints'];

  const interfaces = allInterfaces.filter(({name}) =>
    interfaceEntryPoints.includes(name),
  );

  const apiFile = resolve(
    '../shopify-dev/content/tools/argo-checkout/extension-points/api.md',
  );

  const folder = resolve(
    '../shopify-dev/content/tools/argo-checkout/extension-points',
  );

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }

  const uuid = findUuid(apiFile);

  let markdown = `---\ngid: ${uuid}\nurl: /tools/argo-checkout/extension-points/api.md\ntitle: Extension Points API\nhidden: true\n---\n\n`;
  interfaces.forEach(({name, docs, properties}) => {
    markdown += propsTable(name, docs, properties, nodes, extensionsIndex);
  });

  markdown += dedupe(additionalPropsTables).reverse().join('');

  fs.writeFile(apiFile, markdown, function (err) {
    if (err) throw err;
  });

  additionalPropsTables.length = 0;
}

async function buildComponentGraph(componentIndex: string) {
  const graph = await createDependencyGraph(componentIndex);

  const nodes: Node[] = [];

  graph.forEach((value) => {
    value.locals.forEach((value: any, key) => {
      if (value.kind !== 'Imported') {
        if (value.name == null) {
          value.name = key;
        }
        nodes.push({value, module: undefined});
      }
    });
  });

  const components = [
    ...new Set(nodes.filter(({value}: any) => value.kind === 'Component')),
  ];

  return {nodes, components};
}

export async function components(paths: Paths) {
  const componentIndex = resolve(`${paths.inputRoot}/src/components/index.ts`);
  const {nodes, components} = await buildComponentGraph(componentIndex);

  const outputRoot = resolve(`${paths.outputRoot}`);
  const componentDocsPath = resolve(`${paths.outputRoot}/components`);

  if (!fs.existsSync(outputRoot)) {
    fs.mkdirSync(outputRoot);
  }

  if (!fs.existsSync(componentDocsPath)) {
    fs.mkdirSync(componentDocsPath);
  }

  const indexFile = resolve(`${paths.outputRoot}/components/index.md`);
  let index = renderYamlFrontMatter({
    gid: findUuid(indexFile),
    url: `${paths.shopifyDevUrl}/components/index`,
    title: 'Argo Checkout Components',
    description: 'A list of Argo Checkout Components.',
    hidden: true,
  });

  components.forEach(({value: {name, docs, props}}: any) => {
    if (name === 'View') return;

    const outputFile = `${componentDocsPath}/${name.toLowerCase()}.md`;

    const docsContent = docs ? strip(docs.content).trim() : '';

    const componentUrl = `${
      paths.shopifyDevUrl
    }/components/${name.toLowerCase()}`;

    let markdown = renderYamlFrontMatter({
      gid: findUuid(outputFile),
      url: componentUrl,
      title: `${name}`,
      // description: docsContent,
      hidden: true,
    });
    markdown += docsContent ? `${docsContent}\n\n` : '';

    const examples = renderComponentExamplesFor(name, paths.packages);
    if (examples.length > 0) {
      markdown += examples;
    }

    const face = nodes.find(({value}: any) => value.name === props.name);
    if (
      face &&
      face.value.kind === 'InterfaceType' &&
      face.value.properties.length > 0
    ) {
      markdown += '## Props\noptional = ?\n';
      markdown += propsTable(
        name,
        docs,
        face.value.properties,
        nodes,
        componentIndex,
        false,
      );
    }

    markdown += dedupe(additionalPropsTables).reverse().join('');

    const contentFolder = resolve(
      `${paths.inputRoot}/src/components/${name}/content`,
    );
    markdown += getAdditionalContentFor(contentFolder);

    fs.writeFile(outputFile, markdown, function (err) {
      if (err) throw err;
    });

    additionalPropsTables.length = 0;
    index += `- [${name}](${componentUrl})\n`;
  });

  // Write the component table of contents
  fs.writeFile(indexFile, index, function (err) {
    if (err) throw err;
  });
}

interface FrontMatter {
  gid: string;
  url: string;
  title: string;
  description?: string;
  hidden: boolean;
}

function renderYamlFrontMatter(frontMatter: FrontMatter) {
  let matter = '---\n';

  (Object.keys(frontMatter) as (keyof FrontMatter)[]).forEach((key) => {
    matter += `${key}: ${frontMatter[key]}\n`;
  });

  matter += '---\n\n';
  return matter;
}

function propsTable(
  name: string,
  docs: Documentation | undefined,
  properties: PropertySignature[],
  exports: Node[],
  dir: string,
  titleAndDocs = true,
) {
  let markdown = '';

  if (titleAndDocs) {
    markdown += `<a name="${name}"></a>\n\n## ${name}\n\n`;
    markdown += `${docs ? `${strip(docs.content).trim()}\n\n` : ''}`;
  }

  const nameHeading =
    properties.filter(({parameters}) => parameters).length > 0
      ? ''
      : '<th>Name</th>';

  markdown += `<table><tr>${nameHeading}<th>Type</th><th>Description</th></tr>`;

  properties.forEach(
    ({name: propName, optional, value, docs: propDocs, parameters}) => {
      if (parameters) {
        markdown += `<tr><td><code>(${paramsType(
          parameters,
          exports,
          dir,
        )}): ${propType(value, exports, dir)}</code></td><td>${
          propDocs
            ? converter.makeHtml(
                strip(propDocs.content).replace(/(\r\n|\n|\r)/gm, ''),
              )
            : ''
        }</td></tr>`;
      } else {
        const content = propDocs
          ? strip(propDocs.content).replace(/(\r\n|\n|\r)/gm, '')
          : '';
        const tags = propDocs?.tags?.length
          ? propDocs.tags.map(stringifyTag).join('<br/>')
          : '';
        markdown += `<tr><td>${propName}${
          optional ? '?' : ''
        }</td><td><code>${propType(
          value,
          exports,
          dir,
        )}</code></td><td style="word-break: break-word;">${converter.makeHtml(
          content,
        )}${tags}</td></tr>`;
      }
    },
  );

  markdown += '</table>\n\n';

  return markdown;
}

function stringifyTag(tag: Tag) {
  let string = sentenceCaseTagName(tag.name);
  if (tag.content) {
    string += `: <code>${tag.content}</code>`;
  }
  return string;
}

function sentenceCaseTagName(tagName: string) {
  const input = tagName.slice(1);
  const result = input.replace(/([A-Z])/g, ' $1').toLowerCase();
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function propType(value: any, exports: any[], dir: string): any {
  let params = '';
  if (value.params != null && value.params.length > 0) {
    params = `<<wbr>${value.params
      .map((param: any) => propType(param, exports, dir))
      .join(', ')}<wbr>>`;
  }

  switch (value.kind) {
    case 'AnyType':
      return '<code>any</code>';
    case 'NullType':
      return '<code>null</code>';
    case 'UnknownType':
      return '<code>unknown</code>';
    case 'VoidType':
      return '<code>void</code>';
    case 'StringType':
      return '<code>string</code>';
    case 'BooleanType':
      return '<code>boolean</code>';
    case 'ArrayType':
      return `${propType(value.elements, exports, dir)}[]`;
    case 'NumberType':
      return '<code>number</code>';
    case 'Local':
      // eslint-disable-next-line no-case-declarations
      const local = exports.find(
        ({value: exportValue}: any) => exportValue.name === value.name,
      );

      if (local == null) {
        // eslint-disable-next-line no-console
        console.warn(
          `Can’t resolve export type \`${value.name}\` in ${dir}. Maybe it’s not exported from the component index or imported from a remote package.`,
        );

        return `<code>${value.name}${params}</code>`;
      }
      local.value.params = value.params;
      return propType(local.value, exports, dir);
    case 'InterfaceType':
      additionalPropsTables.push(
        propsTable(value.name, value.docs, value.properties, exports, dir),
      );
      return `<code><a href="#${value.name}">${value.name}</a>${params}</code>`;
    case 'UnionType':
      return value.types
        .map((type: any) => {
          return propType(type, exports, dir);
        })
        .join(' | ');
    case 'StringLiteralType':
      return `<code>"${value.value}"</code>`;
    case 'NumberLiteralType':
      return `<code>${value.value}</code>`;
    case 'BooleanLiteralType':
      return `<code>${value.value}</code>`;
    case 'FunctionType':
      return `<code>(${paramsType(
        value.parameters,
        exports,
        dir,
      )}) => ${propType(value.returnType, exports, dir)}</code>`;
    default:
      if (value.kind === 'UndocumentedType' && value.name === 'T') {
        return '<code>T</code>';
      }
      return `<pre>${JSON.stringify(value, null, 2)}</pre>`;
  }
}

function paramsType(params: any[], exports: any[], dir: string) {
  return params
    .map((param) => `${param.name}: ${propType(param.type, exports, dir)}`)
    .join(', ');
}

function strip(content: string) {
  return escapeHTML(
    content
      .replace('/**', '')
      .replace('*/', '')
      .replace('\n * ', '\n')
      .replace('\n *', '\n')
      .replace('\n\n * ', '\n\n'),
  );
}

function escapeHTML(html: string) {
  const chars: {[key: string]: string} = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&#34;',
  };
  return html.replace(/[&<>"]/g, (tag: string) => chars[tag] || tag);
}

function findUuid(file: string) {
  let uuid = uuidv4();
  if (fs.existsSync(file)) {
    const uuidMatch = fs
      .readFileSync(file, 'utf8')
      .match(
        /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g,
      );

    if (uuidMatch != null) {
      uuid = uuidMatch[0];
    }
  }

  return uuid;
}

function dedupe<T>(array: T[]) {
  return [...new Set(array)];
}

function renderComponentExamplesFor(name: string, packages: Packages): string {
  const examples: any = {};

  Object.keys(packages).forEach((packageName) => {
    const packagePath = packages[packageName];
    const folder = resolve(`${packagePath}/src/components/${name}/examples`);

    if (fs.existsSync(folder)) {
      fs.readdirSync(folder).forEach((file) => {
        const extension = extname(file).split('.').pop();
        examples[packageName] = `{% highlight ${extension} %}\n`;
        examples[packageName] += fs.readFileSync(`${folder}/${file}`, 'utf8');
        examples[packageName] += '\n{% endhighlight %}\n\n';
      });
    }
  });

  let markdown = '';

  const exampleCount = Object.keys(examples).length;

  if (exampleCount > 1) {
    const sections = Object.keys(examples).join(', ');
    markdown += `{% sections "${sections}" %}\n\n`;
    markdown += Object.values(examples).join('\n\n----\n\n');
    markdown += '{% endsections %}\n\n';
  } else if (exampleCount > 0) {
    markdown += Object.values(examples).join('\n\n----\n\n');
  }

  return markdown;
}

function getAdditionalContentFor(contentFolder: string) {
  let markdown = '';

  if (fs.existsSync(contentFolder)) {
    fs.readdirSync(contentFolder).forEach((file) => {
      markdown += fs.readFileSync(`${contentFolder}/${file}`, 'utf8');
    });
  }

  return markdown;
}
