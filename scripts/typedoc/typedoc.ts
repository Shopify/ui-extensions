import {resolve, extname} from 'path';
import * as fs from 'fs';
import {v4 as uuidv4} from 'uuid';

import type {
  Documentation,
  InterfaceType,
  LocalReference,
  RemoteComponent,
  Type,
  PropertySignature,
} from './types';
import {createDependencyGraph, Module} from './utilities/dependency-graph';

extensionPoints();
components();

interface Node {
  value: RemoteComponent | Type | LocalReference;
  module: Module | undefined;
}

const additionalPropsTables: string[] = [];

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

async function components() {
  const componentIndex = resolve(
    '../checkout-web/packages/argo-checkout/src/components/index.ts',
  );

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

  const devDocs = resolve(
    '../shopify-dev/content/tools/argo-checkout/components',
  );

  const indexFile = resolve(
    '../shopify-dev/content/tools/argo-checkout/components/index.md',
  );

  let index = `---\ngid: ${findUuid(
    indexFile,
  )}\nurl: /tools/argo-checkout/components/index\ntitle: Argo Checkout Components\ndescription: A list of Argo Checkout Components.\nhidden: true\n---\n\n`;

  const components = [
    ...new Set(nodes.filter(({value}: any) => value.kind === 'Component')),
  ];

  components.forEach(({value: {name, docs, props}}: any) => {
    const file = `${devDocs}/${name.toLowerCase()}.md`;
    const uuid = findUuid(file);

    let markdown = `---\ngid: ${uuid}\nurl: /tools/argo-checkout/components/${name.toLowerCase()}\ntitle: ${name}\nhidden: true\n---\n\n`;
    markdown += `${docs ? `${strip(docs.content).trim()}\n\n` : ''}`;

    const examples = getComponentExamplesFor(name);

    if (examples.length > 0) {
      markdown += getComponentExamplesFor(name);
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

    fs.writeFile(`${devDocs}/${name.toLowerCase()}.md`, markdown, function (
      err,
    ) {
      if (err) throw err;
    });

    additionalPropsTables.length = 0;
    index += `- [${name}](/tools/argo-checkout/components/${name.toLowerCase()})\n`;
  });

  // Write the component table of contents
  fs.writeFile(indexFile, index, function (err) {
    if (err) throw err;
  });
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
  markdown += '<table><tr><th>Name</th><th>Type</th><th>Description</th></tr>';

  properties.forEach(({name: propName, optional, value, docs: propDocs}) => {
    markdown += `<tr><td>${propName}${
      optional ? '?' : ''
    }</td><td><code>${propType(value, exports, dir)}</code></td><td>${
      propDocs ? strip(propDocs.content).replace(/(\r\n|\n|\r)/gm, '') : ''
    }</td></tr>`;
  });

  markdown += '</table>\n\n';

  return markdown;
}

function propType(value: any, exports: any[], dir: string): any {
  let params = '';
  if (value.params != null && value.params.length > 0) {
    params = `<${value.params
      .map((param: any) => propType(param, exports, dir))
      .join(', ')}>`;
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

function getComponentExamplesFor(name: string) {
  let markdown = '';
  const jsExamples: string[] = [];
  const reactExamples: string[] = [];
  const jsFolder = resolve(
    `../checkout-web/packages/argo-checkout/src/components/${name}/examples`,
  );
  const reactFolder = resolve(
    `../checkout-web/packages/argo-checkout-react/src/components/${name}/examples`,
  );

  if (fs.existsSync(jsFolder)) {
    fs.readdirSync(jsFolder).forEach((file) => {
      jsExamples.push(
        `{% highlight ${extname(file).split('.').pop()} %}\n${fs.readFileSync(
          `${jsFolder}/${file}`,
          'utf8',
        )}\n{% endhighlight %}\n\n`,
      );
    });
  }

  if (fs.existsSync(reactFolder)) {
    fs.readdirSync(reactFolder).forEach((file) => {
      reactExamples.push(
        `{% highlight ${extname(file).split('.').pop()} %}\n${fs.readFileSync(
          `${reactFolder}/${file}`,
          'utf8',
        )}\n{% endhighlight %}\n\n`,
      );
    });
  }

  if (jsExamples.length > 0 && reactExamples.length > 0) {
    markdown += '{% sections "JS, React" %}\n\n';
    markdown += jsExamples.join('');
    markdown += '\n\n----\n\n';
    markdown += reactExamples.join('');
    markdown += '{% endsections %}\n\n';
  } else {
    markdown += jsExamples.join('') + reactExamples.join('');
  }

  return markdown;
}
