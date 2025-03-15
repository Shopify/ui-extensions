#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const writeFile = promisify(fs.writeFile);

// Function to recursively search directories
async function searchDirectories(directory) {
  try {
    const items = await readdir(directory);

    // Check if this is an "examples" directory
    if (path.basename(directory) === 'examples') {
      console.log(`Found examples directory: ${directory}`);
      await processExamplesDirectory(directory, items);
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

// Function to process examples directory and create HTML files
async function processExamplesDirectory(directory, items) {
  for (const item of items) {
    if (item.startsWith('basic-') && item.endsWith('.example.tsx')) {
      const baseName = path.basename(item, '.tsx');
      const htmlFileName = `${baseName}.html`;
      const htmlFilePath = path.join(directory, htmlFileName);

      // Check if HTML file already exists
      try {
        await stat(htmlFilePath);
        console.log(`  HTML file already exists: ${htmlFilePath}`);
      } catch (err) {
        // File doesn't exist, create it
        try {
          const tsxFilePath = path.join(directory, item);
          const tsxContent = await fs.promises.readFile(tsxFilePath, 'utf8');

          // Create a simple HTML wrapper for the component
          const htmlContent = tsxContent.trim();

          await writeFile(htmlFilePath, htmlContent);
          console.log(`  Created HTML file: ${htmlFilePath}`);
        } catch (writeErr) {
          console.error(
            `  Error creating HTML file ${htmlFilePath}: ${writeErr.message}`,
          );
        }
      }
    }
  }
}

// Start the search from the current directory
const startDirectory = process.argv[2] || process.cwd();
console.log(`Starting search from: ${startDirectory}`);

searchDirectories(startDirectory)
  .then(() => console.log('Search completed'))
  .catch((err) => console.error(`Error: ${err.message}`));
