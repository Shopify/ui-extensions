import {resolve} from 'path';
import * as fs from 'fs';

import type {Paths} from '../types';

import {renderYamlFrontMatter, findUuid} from './shared';

export function gettingStarted(paths: Paths) {
  const outputRoot = resolve(paths.outputRoot);
  const extensionPointsDocsPath = resolve(
    `${paths.outputRoot}/extension-points`,
  );

  if (!fs.existsSync(outputRoot)) {
    fs.mkdirSync(outputRoot);
  }

  if (!fs.existsSync(extensionPointsDocsPath)) {
    fs.mkdirSync(extensionPointsDocsPath);
  }

  const indexFile = resolve(`${extensionPointsDocsPath}/index.md`);

  let markdown = renderYamlFrontMatter({
    gid: findUuid(indexFile),
    url: `${paths.shopifyDevUrl}/extension-points/index`,
    title: 'Checkout extensions API reference',
    description:
      'API reference for Checkout extension points. Learn about global objects, rendering, components, and how you’ll interact with them.',
    hidden: true,
  });

  const docsInputPath = resolve(`${paths.inputRoot}/documentation`);

  const files = ['extension-points.md', 'globals.md', 'rendering.md'];

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
  markdown = markdown.replace(
    '#components',
    `${paths.shopifyDevUrl}/components`,
  );

  fs.writeFile(indexFile, markdown, function (err) {
    if (err) throw err;
  });

  return markdown;
}