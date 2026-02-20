import {resolve} from 'path';
import * as fs from 'fs';
import {components, adminExtensionApi} from './typedoc/shopify-dev-renderer';

const paths = {
  inputRoot: './packages/admin-ui-extensions',
  packages: {
    JavaScript: './packages/admin-ui-extensions',
    React: './packages/admin-ui-extensions-react',
  },
  outputRoot: '../shopify-dev/content/api/admin-extensions',
  shopifyDevUrl: '/api/admin-extensions',
};

components(
  paths,
  {
    title: 'Components for Admin UI Extensions',
    frontMatterDescription: 'A list of components for Admin UI Extensions.',
    description: `
Each component has general guidelines for usage as well as additional information regarding the behavior on certain platforms.

- 📱 denotes mobile specific information
- 🖥 denotes desktop specific information
  `,
  },
  {
    compileExamples: false,
    visibility: 'visible',
  },
);

adminExtensionApi(paths, {
  componentsToSkip: ['ContainerApi', 'DataApi'],
});

// Copy static MDX pages to shopify-dev.
// These MDX files are the source of truth for the admin extensions static landing pages,
// replacing the old doc.ts -> generated_static_pages.json pipeline.
const version = process.argv[2] || 'unstable';
const staticPagesInput = resolve(
  './packages/ui-extensions/docs/surfaces/admin/staticPages',
);
const staticPagesOutput = resolve(
  `../shopify-dev/content/api/admin-extensions/${version}`,
);

if (fs.existsSync(staticPagesInput)) {
  fs.mkdirSync(staticPagesOutput, {recursive: true});
  const mdxFiles = fs
    .readdirSync(staticPagesInput)
    .filter((fileName) => fileName.endsWith('.mdx'));
  for (const file of mdxFiles) {
    fs.copyFileSync(
      resolve(staticPagesInput, file),
      resolve(staticPagesOutput, file),
    );
  }
}
