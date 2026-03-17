/* eslint-disable no-undef, no-console */
import childProcess from 'child_process';
import fs from 'fs/promises';
import {existsSync} from 'fs';
import path from 'path';
import process from 'process';

export const resolveShopifyDevPath = async () => {
  const worldPath = path.join(
    process.env.HOME,
    'world/trees/root/src/areas/platforms/shopify-dev',
  );

  if (!existsSync(worldPath)) {
    throw new Error(
      `\x1b[31m❌ Error: shopify-dev not found at ${worldPath}.\n` +
        `Run: tec checkout add //areas/platforms/shopify-dev\x1b[0m`,
    );
  }

  return worldPath;
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
  generatedStaticPagesFile,
  transformJson,
}) => {
  scripts.forEach((script) => childProcess.execSync(script, {stdio: 'pipe'}));

  const srcFiles = await fs.readdir(rootPath, {recursive: true});
  const builtFiles = srcFiles.filter((file) => file.endsWith('.ts'));
  await Promise.all(
    builtFiles.map((file) => {
      const jsFilePath = path.join(rootPath, file.replace('.ts', '.js'));
      return existsSync(jsFilePath) ? fs.rm(jsFilePath) : Promise.resolve();
    }),
  );

  const generatedFiles = [path.join(outputDir, generatedDocsDataFile)];
  if (generatedStaticPagesFile) {
    generatedFiles.push(path.join(outputDir, generatedStaticPagesFile));
  }

  // Make sure https://shopify.dev URLs are relative so they work in Spin.
  // See https://github.com/Shopify/generate-docs/issues/181
  await replaceFileContent({
    filePaths: generatedFiles,
    searchValue: 'https://shopify.dev',
    replaceValue: '',
  });

  if (transformJson) {
    await transformJson(path.join(outputDir, generatedDocsDataFile));
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
