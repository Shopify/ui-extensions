import * as fs from 'fs';
import {resolve, extname} from 'path';
import {rollup, ModuleFormat} from 'rollup';
import virtual from '@rollup/plugin-virtual';
import jsx from 'rollup-plugin-jsx';

import {skypackUrlResolve} from './skypack-url-resolve';
import type {Example} from './types';

export function renderSandboxComponentExamples(
  examples: Map<string, Example>,
  compiledPath: string,
): string {
  let markdown = '';

  const compiledFilename = getCompiledFilename(examples);

  markdown += `{% codeblock extensions_sandbox, compiled: "${compiledPath}/${compiledFilename}" %}\n\n`;

  examples.forEach((example, key) => {
    markdown += [
      `{% code ${example.extension}, title: "${key}" %}`,
      `${example.content}`,
      '{% endcode %}',
      '\n',
    ].join('\n');
  });

  markdown += '{% endcodeblock %}\n';

  return markdown;
}

function getCompiledFilename(examples: Map<string, Example>): string {
  // we assume the first item in paths.packages is the one we want to feed to the compiler
  const key = [...examples.keys()][0];
  const example = examples.get(key);
  return example.filename.replace(extname(example.filename), '.js');
}

export function compileComponentExamples(
  examples: Map<string, Example>,
  examplesPath: string,
) {
  if (!fs.existsSync(examplesPath)) {
    fs.mkdirSync(examplesPath, {recursive: true});
  }

  // we actually only need one compiled file per example
  examples.forEach(async (example, key) => {
    if (key === 'React') return;

    try {
      const compiledContent = await compileForSandbox(example.content);

      const compiledFilename = example.filename.replace(
        extname(example.filename),
        '.js',
      );
      fs.writeFile(
        `${examplesPath}/${compiledFilename}`,
        compiledContent,
        function (err) {
          if (err) throw err;
        },
      );
    } catch (error) {
      console.log(`error compiling ${example.filename}`);
      console.log(error);
    }
  });
}

export async function compileForSandbox(inputCode: string): Promise<string> {
  const LOCAL_ID = 'INPUT';
  const virtualModules = {
    [LOCAL_ID]: inputCode,
  };

  const inputOptions = {
    input: LOCAL_ID,
    plugins: [
      // The virtual plugin let us supply a string instead of a file as input
      virtual(virtualModules),
      skypackUrlResolve(),
      jsx({factory: 'React.createElement'}),
    ],
  };

  const outputOptions = {
    format: 'esm' as ModuleFormat,
  };

  const bundle = await rollup(inputOptions);
  const {output} = await bundle.generate(outputOptions);

  const outputCode = `${output[0].code}`;
  return outputCode;
}
