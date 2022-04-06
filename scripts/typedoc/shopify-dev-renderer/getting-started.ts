import {resolve} from 'path';
import * as fs from 'fs';

import type {Paths} from '../types';

import {
  renderYamlFrontMatter,
  findUuid,
  visibilityToFrontMatterMap,
} from './shared';
import type {Visibility} from './shared';

interface Options {
  visibility?: Visibility;
  title?: string;
}

export function gettingStarted(paths: Paths, options: Options = {}) {
  const outputRoot = resolve(paths.outputRoot);
  const extensionPointsDocsPath = resolve(
    `${paths.outputRoot}/extension-points`,
  );
  const {visibility = 'hidden', title = 'Checkout'} = options;
  const visibilityFrontMatter = visibilityToFrontMatterMap.get(visibility);

  if (!fs.existsSync(outputRoot)) {
    fs.mkdirSync(outputRoot, {recursive: true});
  }

  if (!fs.existsSync(extensionPointsDocsPath)) {
    fs.mkdirSync(extensionPointsDocsPath, {recursive: true});
  }

  const indexFile = resolve(`${extensionPointsDocsPath}/index.md`);

  let markdown = renderYamlFrontMatter({
    gid: findUuid(indexFile),
    url: `${paths.shopifyDevUrl}/extension-points/index`,
    title: `${title} extensions API reference`,
    description: `API reference for ${title} extension points. Learn about global objects, rendering, components, and how you’ll interact with them.`,
    ...visibilityFrontMatter,
  });

  const docsInputPath = resolve(`${paths.inputRoot}/documentation`);

  const files = ['extension-points.md', 'globals.md'];

  if (fs.existsSync(docsInputPath)) {
    files.forEach((file) => {
      markdown += `${fs.readFileSync(`${docsInputPath}/${file}`, 'utf8')}\n`;
    });
  }

  // Demote each heading
  markdown = markdown.replace(/# /g, '## ');
  // Replace github links to in-page anchors
  markdown = markdown.replace(/\.\/([\w-]+)\.md/g, '#$1');
  // Add a link to the extension points API
  markdown = markdown.replace(
    ' `Checkout::Feature::Render`',
    ` [\`Checkout::Feature::Render\`](${paths.shopifyDevUrl}/extension-points/api)`,
  );
  // Add a link to the PP extension point API
  markdown = markdown.replace(
    '../src/extension-points/api/post-purchase',
    `${paths.shopifyDevUrl}/extension-points/api`,
  );
  markdown = markdown.replace(
    '#components',
    `${paths.shopifyDevUrl}/components`,
  );

  fs.writeFile(indexFile, markdown, function (err) {
    if (err) throw err;
  });

  return markdown;
}
