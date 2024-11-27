export const generateCodeBlock = (
  title: string,
  functionality: string,
  filename: string,
) => {
  return {
    title,
    tabs: [
      {
        title: 'React',
        code: `../examples/${functionality}/${filename}.tsx`,
        language: 'tsx',
      },
      {
        title: 'TS',
        code: `../examples/${functionality}/${filename}.ts`,
        language: 'ts',
      },
    ],
  };
};

export const generateTSXCodeBlock = (
  title: string,
  functionality: string,
  filename: string,
) => {
  return {
    title,
    tabs: [
      {
        title: 'React',
        code: `../examples/${functionality}/${filename}.tsx`,
        language: 'tsx',
      },
    ],
  };
};
