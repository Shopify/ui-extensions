#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Function to recursively search directories for preview.html files
async function searchDirectories(directory) {
  try {
    const items = await readdir(directory);

    // Process any preview.html files in this directory
    for (const item of items) {
      const itemPath = path.join(directory, item);
      try {
        const stats = await stat(itemPath);

        if (stats.isFile() && item === 'preview.html') {
          console.log(`Found preview.html: ${itemPath}`);
          await processPreviewHtml(itemPath);
        } else if (stats.isDirectory()) {
          // Recursively search subdirectories
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

// Function to process preview.html files
async function processPreviewHtml(filePath) {
  try {
    // Read the current content
    const content = await readFile(filePath, 'utf8');

    // Check if the content is already wrapped in HTML structure
    if (
      content.trim().toLowerCase().startsWith('<!doctype html>') ||
      content.trim().toLowerCase().startsWith('<html')
    ) {
      console.log(`  File already has HTML structure: ${filePath}`);
      return;
    }

    // Wrap the content in standard HTML markup
    const wrappedContent = `<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.shopify.com/shopifycloud/app-bridge-ui-experimental.js"></script>
    <style>
      body {
        background-color: rgba(241, 241, 241, 1);
        margin: 20px;
      }
    </style>
  </head>
  <body>
    ${content.trim()}
  </body>
</html>`;

    // Write the wrapped content back to the file
    await writeFile(filePath, wrappedContent);
    console.log(`  Updated with HTML structure: ${filePath}`);
  } catch (err) {
    console.error(`  Error processing ${filePath}: ${err.message}`);
  }
}

// Start the search from the current directory
const startDirectory = process.argv[2] || process.cwd();
console.log(`Starting search from: ${startDirectory}`);

searchDirectories(startDirectory)
  .then(() => console.log('Search completed'))
  .catch((err) => console.error(`Error: ${err.message}`));
