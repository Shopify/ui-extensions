import {resolve} from 'path';
import * as fs from 'fs';

import type {Paths, InterfaceType} from '../types';

import {
  createDependencyGraph,
  filterGraph,
} from '../utilities/dependency-graph';
import {
  renderYamlFrontMatter,
  findUuid,
  dedupe,
  propsTable,
  visibilityToFrontMatterMap,
} from './shared';
import type {Node, Visibility} from './shared';

const additionalPropsTables: string[] = [];

interface Options {
  visibility?: Visibility;
  title?: string;
}

export async function extensionPoints(paths: Paths, options: Options = {}) {
  const extensionsIndex = resolve(`${paths.inputRoot}/src/index.ts`);
  const {visibility = 'hidden', title = 'Checkout'} = options;
  const visibilityFrontMatter = visibilityToFrontMatterMap.get(visibility);

  const graph = await createDependencyGraph(extensionsIndex);
  const allInterfaces = filterGraph(
    graph,
    ({kind}) => kind === 'InterfaceType',
  );

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

  const folder = resolve(`${paths.outputRoot}/extension-points`);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, {recursive: true});
  }

  const apiFile = resolve(`${paths.outputRoot}/extension-points/api.md`);

  let markdown = renderYamlFrontMatter({
    gid: findUuid(apiFile),
    url: `${paths.shopifyDevUrl}/extension-points/api`,
    title: `${title} extension points API`,
    description: `An API reference for ${title} extension points and their respective types.`,
    ...visibilityFrontMatter,
  });

  interfaces.forEach(({name, docs, properties}) => {
    markdown += propsTable(
      name,
      docs,
      properties,
      nodes,
      extensionsIndex,
      additionalPropsTables,
      undefined,
      undefined,
    );
  });

  markdown += dedupe(additionalPropsTables).reverse().join('');

  fs.writeFile(apiFile, markdown, function (err) {
    if (err) throw err;
  });

  additionalPropsTables.length = 0;

  console.log(`📄  Generated extension point docs to ${apiFile}.`);
}
