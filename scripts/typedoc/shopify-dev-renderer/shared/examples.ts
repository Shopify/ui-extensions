import * as fs from 'fs';
import {resolve, extname} from 'path';

import type {Packages} from '../../types';

interface Example {
  extension: string;
  content: string;
}

export function findExamplesFor(
  name: string,
  packages: Packages,
  subPath: string,
): Map<string, Example> {
  const examples = new Map();

  Object.keys(packages).forEach((packageName) => {
    const packagePath = packages[packageName];
    const componentExamplesFolder = resolve(
      `${packagePath}/src${subPath}/${name}/examples`,
    );

    if (fs.existsSync(componentExamplesFolder)) {
      fs.readdirSync(componentExamplesFolder).forEach((file) => {
        examples.set(packageName, {
          extension: extname(file).split('.').pop(),
          content: fs.readFileSync(
            `${componentExamplesFolder}/${file}`,
            'utf8',
          ),
        });
      });
    }
  });

  return examples;
}

export function renderExamples(examples: Map<string, Example>): string {
  let markdown = '';

  markdown += `{% codeblock %}\n\n`;

  examples.forEach((example, key) => {
    markdown += [
      `{% code ${example.extension}, title: "${key}" %}{% raw %}`,
      `${example.content}`,
      '{% endraw %}{% endcode %}',
      '\n',
    ].join('\n');
  });

  markdown += '{% endcodeblock %}\n\n';

  return markdown;
}
