#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const exists = promisify(fs.exists);

// Function to recursively search directories
async function searchDirectories(directory) {
  try {
    const items = await readdir(directory);

    // Check if this is an "examples" directory
    if (path.basename(directory) === 'examples') {
      console.log(`Found examples directory: ${directory}`);
      await processExamplesDirectory(directory);
    }

    // Recursively search subdirectories
    for (const item of items) {
      const itemPath = path.join(directory, item);
      try {
        const stats = await stat(itemPath);
        if (stats.isDirectory()) {
          await searchDirectories(itemPath);
        }
      } catch (err) {
        console.error(`Error accessing ${itemPath}: ${err.message}`);
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${directory}: ${err.message}`);
  }
}

// Function to process examples directory
async function processExamplesDirectory(directory) {
  try {
    const items = await readdir(directory);

    // Check if preview.html exists
    const previewPath = path.join(directory, 'preview.html');
    const previewExists = await exists(previewPath);

    if (!previewExists) {
      console.log(`  No preview.html found in ${directory}`);
      return;
    }

    // Find basic-*.example.html files
    const basicExampleFiles = items.filter(
      (item) => item.startsWith('basic-') && item.endsWith('.example.html'),
    );

    if (basicExampleFiles.length === 0) {
      console.log(`  No basic-*.example.html files found in ${directory}`);
      return;
    }

    // Read the content of preview.html
    const previewContent = await readFile(previewPath, 'utf8');

    // Copy content to each basic example file
    for (const basicFile of basicExampleFiles) {
      const basicFilePath = path.join(directory, basicFile);

      try {
        // Check if the basic file already has the same content
        const basicContent = await readFile(basicFilePath, 'utf8');

        if (basicContent.trim() === previewContent.trim()) {
          console.log(`  Content already matches: ${basicFilePath}`);
          continue;
        }

        // Write preview content to basic file
        await writeFile(previewPath, basicContent);
        console.log(`  Copied preview content to: ${basicFilePath}`);
      } catch (err) {
        console.error(`  Error processing ${basicFilePath}: ${err.message}`);
      }
    }
  } catch (err) {
    console.error(
      `Error processing examples directory ${directory}: ${err.message}`,
    );
  }
}

// Start the search from the current directory
const startDirectory = process.argv[2] || process.cwd();
console.log(`Starting search from: ${startDirectory}`);

searchDirectories(startDirectory)
  .then(() => console.log('Search completed'))
  .catch((err) => console.error(`Error: ${err.message}`));
