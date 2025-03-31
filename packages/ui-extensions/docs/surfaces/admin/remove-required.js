/* eslint-disable no-undef, no-console */
const fs = require('fs');

const generatedDocsPath = process.argv[1];
const data = JSON.parse(fs.readFileSync(generatedDocsPath, 'utf8'));

let modified = false;

data.forEach((entry) => {
  if (entry.definitions) {
    entry.definitions.forEach((definition) => {
      if (definition.typeDefinitions) {
        Object.values(definition.typeDefinitions).forEach((typeDef) => {
          if (typeDef.members && Array.isArray(typeDef.members)) {
            typeDef.members.forEach((member) => {
              // eslint-disable-next-line no-prototype-builtins
              if (member.hasOwnProperty('isOptional')) return;
              member.isOptional = true;
              modified = true;
            });
          }
        });
      }
    });
  }
});

if (modified) {
  fs.writeFileSync(generatedDocsPath, JSON.stringify(data, null, 2));
  console.log(
    "Successfully added isOptional: true to members that didn't have it.",
  );
} else {
  console.log(
    'No changes needed. All members already have isOptional property.',
  );
}

/* eslint-enable no-undef, no-console */
