/* eslint-disable no-undef, no-console */
import childProcess from 'child_process';
import fs from 'fs/promises';
import {existsSync} from 'fs';
import path from 'path';
import readline from 'readline/promises';
import process, {stdin as input, stdout as output} from 'process';

export const resolveShopifyDevPath = async (rootPath) => {
  const defaultPath = path.resolve(rootPath, '../../../shopify-dev');
  if (existsSync(defaultPath)) return defaultPath;

  const rl = readline.createInterface({input, output});
  const answer = (
    await rl.question(
      `\n\x1b[33m⚠️  Shopify dev directory not found at:\x1b[0m \x1b[1m${defaultPath}\x1b[0m\n\x1b[32mPlease provide the absolute path to your "shopify-dev" repo:\x1b[0m `,
    )
  ).trim();
  rl.close();

  const shopifyDevPath = answer ? path.resolve(answer) : '';
  if (!shopifyDevPath || !existsSync(shopifyDevPath)) {
    throw new Error(
      `\x1b[31m❌ Error: ${
        shopifyDevPath
          ? `shopify-dev directory not found at ${shopifyDevPath}.`
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
  generatedDocsDataFile,
  generatedDocsDataV2File,
  generatedStaticPagesFile,
  transformJson,
}) => {
  scripts.forEach((script) =>
    childProcess.execSync(script, {stdio: 'inherit', cwd: rootPath}),
  );

  const srcFiles = await fs.readdir(rootPath, {recursive: true});
  const builtFiles = srcFiles.filter((file) => file.endsWith('.ts'));
  await Promise.all(
    builtFiles.map((file) => {
      const jsFilePath = path.join(rootPath, file.replace('.ts', '.js'));
      return existsSync(jsFilePath) ? fs.rm(jsFilePath) : Promise.resolve();
    }),
  );

  const outputPath = path.join(rootPath, outputDir);
  const generatedDocsPath = path.join(outputPath, generatedDocsDataFile);
  if (!existsSync(generatedDocsPath) && generatedDocsDataV2File) {
    const v2Path = path.join(outputPath, generatedDocsDataV2File);
    if (existsSync(v2Path)) {
      await fs.copyFile(v2Path, generatedDocsPath);
    }
  }
  if (!existsSync(generatedDocsPath)) {
    throw new Error(
      `Generated docs file not found at ${generatedDocsPath}. ` +
        'The first tsc step may have failed (check output above). ' +
        'Ensure the admin docs build uses --skipLibCheck for tsc to avoid @types/node errors.',
    );
  }

  const generatedFiles = [generatedDocsPath];
  if (generatedStaticPagesFile) {
    generatedFiles.push(path.join(outputPath, generatedStaticPagesFile));
  }

  // Make sure https://shopify.dev URLs are relative so they work in Spin.
  // See https://github.com/Shopify/generate-docs/issues/181
  await replaceFileContent({
    filePaths: generatedFiles,
    searchValue: 'https://shopify.dev',
    replaceValue: '',
  });

  if (transformJson) {
    await transformJson(path.join(outputPath, generatedDocsDataFile));
  }
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
