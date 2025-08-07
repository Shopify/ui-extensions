import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Base directories and URLs
export const SURFACES_DIR = join(
  __dirname,
  '../../packages/ui-extensions/src/surfaces',
);
export const UI_API_DESIGN_BASE_URL =
  'https://ui-api-design.shopify.io/components';

// Acronym mapping for proper case conversion
export const ACRONYM_MAP = {
  url: 'URL',
  api: 'API',
  ui: 'UI',
  id: 'ID',
  html: 'HTML',
  css: 'CSS',
  js: 'JS',
  qr: 'QR',
  pos: 'POS',
};

/**
 * Convert kebab-case to PascalCase with proper acronym handling
 */
export function convertKebabToPascal(kebabName) {
  return kebabName
    .split('-')
    .map((part) => {
      const lowerPart = part.toLowerCase();
      if (ACRONYM_MAP[lowerPart]) {
        return ACRONYM_MAP[lowerPart];
      }
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join('');
}

/**
 * Generate component spec URL from component name
 */
export function generateSpecUrl(componentName) {
  // Convert PascalCase to kebab-case for URL
  const kebabCase = componentName
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
  return `${UI_API_DESIGN_BASE_URL}/${kebabCase}/`;
}
