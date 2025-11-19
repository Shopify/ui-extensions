import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsPath = path.join(
  __dirname,
  '../../../src/surfaces/admin/components.d.ts',
);

export async function extractIconList() {
  const content = await fs.readFile(componentsPath, 'utf-8');

  const sourceFile = ts.createSourceFile(
    'components.d.ts',
    content,
    ts.ScriptTarget.Latest,
    true,
  );

  let icons = [];

  function visit(node) {
    if (ts.isTypeAliasDeclaration(node) && node.name.text === 'IconType$1') {
      if (ts.isUnionTypeNode(node.type)) {
        icons = node.type.types
          .filter((type) => ts.isLiteralTypeNode(type))
          .map((type) => {
            if (
              ts.isStringLiteral(type.literal) ||
              (type.literal && type.literal.text)
            ) {
              return type.literal.text;
            }
            return null;
          })
          .filter(Boolean);
      }
      return;
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (icons.length > 0) {
    return icons;
  }

  throw new Error(
    'Could not find IconType$1 type definition in components.d.ts',
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  extractIconList().then((icons) => {
    console.log(JSON.stringify(icons, null, 2));
  });
}
