import {readdirSync, readFileSync} from 'fs';
import {join, resolve} from 'path';

const generatedDocs = resolve(
  __dirname,
  '../../../../docs/surfaces/point-of-sale/generated/pos_ui_extensions',
);

describe('POS generated docs', () => {
  // Vaulted-card validations are only for apps Shopify approves, so
  // typeOverride.json keeps them off shopify.dev.
  it.each(readdirSync(generatedDocs))(
    '%s does not document vaulted cards',
    (version) => {
      const docs = readFileSync(
        join(generatedDocs, version, 'generated_docs_data_v2.json'),
        'utf8',
      );

      expect(docs).not.toMatch(/vaulted/i);
    },
  );
});
