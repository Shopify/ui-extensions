/* eslint-disable no-undef, no-console */
import childProcess from 'child_process';
import fs from 'fs/promises';
import {existsSync} from 'fs';
import path from 'path';
import readline from 'readline/promises';
import process, {stdin as input, stdout as output} from 'process';

export const resolveShopifyDevPath = async (
  rootPath,
  {promptInput = input, promptOutput = output} = {},
) => {
  const normalizeShopifyDevSourceRoot = (candidatePath) => {
    if (!candidatePath) return null;

    const absolutePath = path.resolve(candidatePath);

    const sourceRootCandidates = [
      absolutePath,
      path.join(absolutePath, 'trees/root/src'),
    ];

    for (const sourceRootPath of sourceRootCandidates) {
      const zonePath = path.join(sourceRootPath, 'areas/platforms/shopify-dev');
      if (existsSync(zonePath)) return sourceRootPath;
    }

    // Candidate might be the zone path itself (.../areas/platforms/shopify-dev)
    if (absolutePath.endsWith(path.normalize('areas/platforms/shopify-dev'))) {
      const sourceRootPath = path.resolve(absolutePath, '../../..');
      if (
        existsSync(path.join(sourceRootPath, 'areas/platforms/shopify-dev'))
      ) {
        return sourceRootPath;
      }
    }

    return null;
  };

  const candidatePaths = [
    process.env.SHOPIFY_DEV_PATH,
    process.env.WORLD_PATH,
    process.env.HOME ? path.join(process.env.HOME, 'world') : null,
    path.resolve(rootPath, '../../../world'),
    path.resolve(rootPath, '../../../shopify-dev'),
  ].filter(Boolean);

  for (const candidatePath of candidatePaths) {
    const sourceRootPath = normalizeShopifyDevSourceRoot(candidatePath);
    if (sourceRootPath) return sourceRootPath;
  }

  const defaultPath = path.resolve(rootPath, '../../../world');

  const rl = readline.createInterface({
    input: promptInput,
    output: promptOutput,
  });
  const answer = (
    await rl.question(
      `\n\x1b[33m⚠️  Could not find a world/shopify-dev repo near:\x1b[0m \x1b[1m${defaultPath}\x1b[0m\n\x1b[32mPlease provide the absolute path to your world repo, shopify-dev repo, source root, or areas/platforms/shopify-dev folder:\x1b[0m `,
    )
  ).trim();
  rl.close();

  const shopifyDevPath = normalizeShopifyDevSourceRoot(answer);
  if (!shopifyDevPath) {
    throw new Error(
      `\x1b[31m❌ Error: ${
        answer
          ? `No shopify-dev zone found from ${path.resolve(answer)}.`
          : 'Path cannot be empty.'
      } Check the path and try again!\x1b[0m`,
    );
  }

  return shopifyDevPath;
};

export const replaceFileContent = async ({
  filePaths,
  searchValue,
  replaceValue,
}) => {
  const files = Array.isArray(filePaths) ? filePaths : [filePaths];
  for (const filePath of files) {
    const content = await fs.readFile(filePath, 'utf8');
    // @ts-ignore -- TS should know this is a string but it doesn't
    const replacedContent = content.replaceAll(searchValue, replaceValue);
    await fs.writeFile(filePath, replacedContent);
  }
};

export const generateFiles = async ({
  scripts,
  outputDir,
  rootPath,
  generatedDocsDataV2File,
}) => {
  scripts.forEach((script) =>
    childProcess.execSync(script, {stdio: 'inherit', cwd: rootPath}),
  );

  const outputPath = path.join(rootPath, outputDir);
  const generatedDocsV2Path = path.join(outputPath, generatedDocsDataV2File);

  if (!existsSync(generatedDocsV2Path)) {
    throw new Error(
      `Generated docs file not found at ${generatedDocsV2Path}. ` +
        'The generate-docs step may have failed (check output above).',
    );
  }

  // Make sure https://shopify.dev URLs are relative so they work in Spin.
  // See https://github.com/Shopify/generate-docs/issues/181
  await replaceFileContent({
    filePaths: generatedDocsV2Path,
    searchValue: 'https://shopify.dev',
    replaceValue: '',
  });
};

export const copyGeneratedToShopifyDev = async ({
  generatedDocsPath,
  shopifyDevPath,
  shopifyDevDBPath,
}) => {
  const shopifyDevExists = existsSync(shopifyDevPath);
  if (!shopifyDevExists) {
    console.log(
      `Not copying docs to shopify-dev because it was not found at ${shopifyDevPath}.`,
    );
    process.exit();
  }

  await fs.cp(generatedDocsPath, shopifyDevDBPath, {recursive: true});
};
