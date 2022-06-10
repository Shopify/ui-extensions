import {resolve, extname} from 'path';
import * as fs from 'fs';
import {createDependencyGraph} from '@shopify/docs-tools';

import type {Paths} from '../../types';

import {
  renderYamlFrontMatter,
  visibilityToFrontMatterMap,
  findUuid,
  dedupe,
  propsTable,
  strip,
  firstSentence,
  mkdir,
  findExamplesFor,
  renderExamplesFor,
} from '../shared';
import type {Node, Visibility} from '../shared';

import {
  renderSandboxComponentExamples,
  compileComponentExamples,
} from './utilities';

export interface Content {
  title: string;
  frontMatterDescription: string;
  description?: string;
  /** If you want to use a source markdown file for the contents instead of an auto-generated page. **Warning**: the table of contents for the components will not be generated in this case. */
  sourceFile?: string;
  sourceFileStringReplacements?: StringReplacments[];
}

interface Options {
  subcomponentMap?: {[rootComponent: string]: string[]};
  componentsToSkip?: string[];
  generateReadmes?: boolean;
  /** Compile examples using Rollup and output alongside example files */
  compileExamples?: boolean;
  visibility?: Visibility;
  /** Accepts an array of markdown files that can be conditionally injected into component pages, depending if certain prop types are mentioned. */
  conditionalDocs?: PropTypeDocumentation[];
}

interface StringReplacments {
  find: RegExp;
  replaceWith: (_match: string, p1: string) => string;
}

interface PropTypeDocumentation {
  sourceFile: string;
  /** The  array of prop types to look for, if one or more are matched on a component then this document will be appended to the component page. */
  propTypeNames: string[];
}

export async function components(
  paths: Paths,
  content: Content,
  options: Options = {},
) {
  const {
    title,
    frontMatterDescription,
    description,
    sourceFile,
    sourceFileStringReplacements,
  } = content;
  const componentIndex = resolve(`${paths.inputRoot}/src/components/index.ts`);
  const {nodes, components} = await buildComponentGraph(componentIndex);
  const {
    subcomponentMap = {},
    componentsToSkip = [],
    generateReadmes = false,
    visibility = 'hidden',
    compileExamples = false,
    conditionalDocs = [],
  } = options;

  const visibilityFrontMatter = visibilityToFrontMatterMap.get(visibility);

  const outputRoot = resolve(`${paths.outputRoot}`);
  mkdir(outputRoot);

  const componentDocsPath = resolve(`${paths.outputRoot}/components`);
  mkdir(componentDocsPath);

  const indexFile = resolve(`${paths.outputRoot}/components/index.md`);
  let index = renderYamlFrontMatter({
    gid: findUuid(indexFile),
    url: `${paths.shopifyDevUrl}/components/index`,
    title,
    description: frontMatterDescription,
    ...visibilityFrontMatter,
  });

  const useSourceFileForIndex = Boolean(sourceFile);

  if (useSourceFileForIndex) {
    index += fs.readFileSync(sourceFile, 'utf8');
    if (sourceFileStringReplacements) {
      sourceFileStringReplacements.forEach((sfr) => {
        index = index.replace(sfr.find, sfr.replaceWith as any);
      });
    }
  } else {
    index += `${description}\n\n`;
  }

  const indexContent = [];

  components.forEach(({value: {name, docs, props}}: any) => {
    if (componentsToSkip.includes(name)) return;

    const filename = name.toLowerCase();
    const outputFile = `${componentDocsPath}/${filename}.md`;

    const docsContent = docs ? strip(docs.content).trim() : '';

    const componentUrl = `${paths.shopifyDevUrl}/components/${filename}`;

    // 0. yaml frontmatter
    let markdown = renderYamlFrontMatter({
      gid: findUuid(outputFile),
      url: componentUrl,
      title: `${name}`,
      description: `"${firstSentence(docsContent)}"`,
      ...visibilityFrontMatter,
    });

    // 1. Intro content
    const docsContentMd = docsContent ? `${docsContent}\n\n` : '';
    markdown += docsContentMd;

    markdown += renderExampleMediaFor(name, paths.shopifyDevAssets);

    // 2. Examples
    const examples = findExamplesFor({
      name,
      packages: paths.packages,
      subPath: '/components',
    });

    if (examples.size > 0) {
      if (compileExamples === true) {
        const examplesUrl = `/sandbox-examples/${filename}`;
        const examplesPath = resolve(`../shopify-dev/public/${examplesUrl}`);

        compileComponentExamples(examples, examplesPath);
        markdown += renderSandboxComponentExamples(examples, examplesUrl);
      } else {
        markdown += renderExamplesFor(examples);
      }
    }

    // 3. Props table
    const additionalPropsTables: string[] = [];
    let propsTableMd = '';
    const face = nodes.find(({value}: any) => value.name === props.name);
    if (
      face &&
      face.value.kind === 'InterfaceType' &&
      face.value.properties.length > 0
    ) {
      propsTableMd += '## Props\noptional = ?\n';
      propsTableMd += propsTable(
        name,
        docs,
        face.value.properties,
        nodes,
        componentIndex,
        additionalPropsTables,
        false,
        undefined,
      );

      markdown += propsTableMd;

      if (conditionalDocs) {
        // Check the additional documentation we have and see if this need to be injected into this component page
        conditionalDocs.forEach(({sourceFile, propTypeNames}) => {
          const componentProperties =
            face.value.kind === 'InterfaceType' ? face.value.properties : [];

          // If properties contain a type reference we are looking for...
          if (
            componentProperties.filter(
              (prop) =>
                prop.value.kind === 'Local' &&
                propTypeNames.includes(prop.value.name),
            ).length > 0
          ) {
            markdown += `\n\n${fs.readFileSync(sourceFile, 'utf8')}`;
          }
        });
      }
    }

    const additionalPropsTablesMd = dedupe(additionalPropsTables)
      .reverse()
      .join('');
    markdown += additionalPropsTablesMd;

    // 4. Subcomponents
    if (Object.keys(subcomponentMap).includes(name)) {
      const subcomponentsMd = subcomponentMap[name]
        .map((subcomponent) => {
          const {
            value: {name: subName, docs: subDocs, props: subProps},
          } = components.find(
            ({value}: any) => value.name === subcomponent,
          ) as any;

          const subTitle = `## ${subName}\n\n`;
          const subDocsContent = subDocs ? strip(subDocs.content).trim() : '';
          const subDocsContentMd = subDocsContent
            ? `${subDocsContent}\n\n`
            : '';
          const subAdditionalPropsTables: string[] = [];
          let subPropsTableMd = '';
          const subFace = nodes.find(
            ({value}: any) => value.name === subProps.name,
          );
          if (
            subFace &&
            subFace.value.kind === 'InterfaceType' &&
            subFace.value.properties.length > 0
          ) {
            subPropsTableMd += '### Props\noptional = ?\n';
            subPropsTableMd += propsTable(
              subName,
              subDocs,
              subFace.value.properties,
              nodes,
              componentIndex,
              subAdditionalPropsTables,
              false,
              undefined,
            );
          }

          return (
            subTitle +
            subDocsContentMd +
            subPropsTableMd +
            subAdditionalPropsTables
          );
        })
        .join('\n\n');

      markdown += `\n\n${subcomponentsMd}`;
    }

    // 5. Additional content
    const contentFolder = resolve(
      `${paths.inputRoot}/src/components/${name}/content`,
    );
    const additionalContent = `\n\n${getAdditionalContentFor(
      contentFolder,
      paths.shopifyDevUrl,
    )}`;
    markdown += additionalContent;

    fs.writeFile(outputFile, markdown, function (err) {
      if (err) throw err;
    });

    if (generateReadmes === true) {
      const readmeFile = resolve(
        `${paths.inputRoot}/src/components/${name}/README.md`,
      );
      const title = `# ${name}\n\n`;
      const readmeMarkdown =
        title + docsContentMd + propsTableMd + additionalPropsTablesMd;

      fs.writeFile(readmeFile, readmeMarkdown, function (err) {
        if (err) throw err;
      });
    }

    indexContent.push(`<li><a href="${componentUrl}">${name}</a></li>`);
  });

  // Only append a table of contents if we are not using a static source file for the index page
  if (!useSourceFileForIndex) {
    index += [
      '<ul style="column-count: auto;column-width: 12rem;">',
      ...indexContent,
      '</ul>',
      '',
    ].join('\n');
  }

  // Write the component table of contents
  fs.writeFile(indexFile, index, function (err) {
    if (err) throw err;
  });

  console.log(
    `📄  Generated docs for ${components.length} components to ${componentDocsPath}.`,
  );
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

  // Sort alphabetically (tsdoc seems to get this confused)
  components.sort((aa: any, bb: any) => {
    if (aa.value.name > bb.value.name) {
      return 1;
    } else if (aa.value.name < bb.value.name) {
      return -1;
    } else {
      return 0;
    }
  });

  return {nodes, components};
}

function renderExampleMediaFor(
  componentName: string,
  shopifyDevAssetsUrl: string,
) {
  const filename = componentName.toLowerCase();
  const mediaPNG = resolve(`${shopifyDevAssetsUrl}/components/${filename}.png`);
  const mediaMP4 = resolve(`${shopifyDevAssetsUrl}/components/${filename}.mp4`);
  const mediaWEBM = resolve(
    `${shopifyDevAssetsUrl}/components/${filename}.webm`,
  );

  let hasFile = false;
  let mediaMarkup = '';

  if (fs.existsSync(mediaMP4) && fs.existsSync(mediaWEBM)) {
    hasFile = true;
    mediaMarkup = `
      <video style="width: 100%; height: auto;" autoplay muted loop controls>
        <source src="/assets/api/checkout-extensions/components/${filename}.webm" type="video/webm">
        <source src="/assets/api/checkout-extensions/components/${filename}.mp4" type="video/mp4">
      </video>`;
  } else if (fs.existsSync(mediaPNG)) {
    hasFile = true;
    mediaMarkup = `![${filename}](/assets/api/checkout-extensions/components/${filename}.png)`;
  }

  if (hasFile) {
    return `---\n### Example\n${mediaMarkup}`;
  }

  return '';
}

function getAdditionalContentFor(contentFolder: string, shopifyDevUrl: string) {
  let markdown = '';

  if (fs.existsSync(contentFolder)) {
    fs.readdirSync(contentFolder).forEach((file) => {
      markdown += fs.readFileSync(`${contentFolder}/${file}`, 'utf8');
    });
  }

  markdown = markdown.replace(
    /https:\/\/github\.com\/Shopify\/ui-extensions\/tree\/main\/packages\/checkout-ui-extensions\/src\/components\/(\w+)/g,
    (_match, p1) => `${shopifyDevUrl}/components/${p1}`.toLowerCase(),
  );
  markdown = markdown.replace(
    /https:\/\/github\.com\/Shopify\/checkout-web\/tree\/master\/packages\/checkout-ui-extensions\/src\/components\/(\w+)/g,
    (_match, p1) => `${shopifyDevUrl}/components/${p1}`.toLowerCase(),
  );

  markdown += '\n';

  return markdown;
}
