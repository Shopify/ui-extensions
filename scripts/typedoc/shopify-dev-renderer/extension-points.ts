import {resolve} from 'path';
import * as fs from 'fs';
import {createDependencyGraph, filterGraph} from '@shopify/docs-tools';

import type {Paths, InterfaceType, PropertySignature} from '../types';

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
  const reactIndex = resolve(`${paths.packages.React}/src/hooks/index.ts`);
  const {visibility = 'hidden', title = 'Checkout'} = options;
  const visibilityFrontMatter = visibilityToFrontMatterMap.get(visibility);

  const reactGraph = await buildHooksGraph(reactIndex);

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

  
  reactGraph.hooks.forEach(({value}: any) => {
    
    const property: PropertySignature = {
      kind: 'PropertySignature',
      optional: false,
      name: value.name,
      value: value
    }
    
   
    markdown += propsTable(
      value.name,
      value.docs,
      [property],
      reactGraph.nodes,
      reactIndex,
      additionalPropsTables,
      true,
      3,
    );
  });

  // debugger;
  // const hookInterface = reactGraph.nodes[0].value;
  //   markdown += propsTable(
  //     hookInterface.name,
  //     hookInterface.docs,
  //     hookInterface.properties,
  //     reactGraph.nodes,
  //     reactIndex,
  //     additionalPropsTables,
  //     true,
  //     3,
  //   );
  
  //   debugger;
  //   markdown += propsTable(
  //     "React Hooks",
  //     undefined,
  //     reactGraph.hooks,
  //     reactGraph.nodes,
  //     reactIndex,
  //     additionalPropsTables,
  //     true,
  //     3,
  //   );
  // //});


  fs.writeFile(apiFile, markdown, function (err) {
    if (err) throw err;
  });

  additionalPropsTables.length = 0;

  console.log(`📄  Generated extension point docs to ${apiFile}.`);
}

async function buildHooksGraph(hooksIndex: string) {
  const graph = await createDependencyGraph(hooksIndex);
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
  
  const hooks = [
    ...new Set(nodes.filter(({value}: any) => value.kind === 'Hook')),
  ];

  // Sort alphabetically (tsdoc seems to get this confused)
  hooks.sort((aa: any, bb: any) => {
    if (aa.value.name > bb.value.name) {
      return 1;
    } else if (aa.value.name < bb.value.name) {
      return -1;
    } else {
      return 0;
    }
  });
  return {nodes, hooks};
}
