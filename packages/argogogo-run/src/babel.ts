const BABEL_PRESET_ENV_OPTIONS = {
  modules: false,
  useBuiltIns: false,
};

const BABEL_PLUGINS = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  ['@babel/plugin-proposal-class-properties', {loose: true}],
];

export function babelConfig({
  react = false,
  typescript = false,
  targets,
}: {react?: boolean; typescript?: boolean; targets?: string[]} = {}) {
  return {
    presets: [
      ['@babel/preset-env', {...BABEL_PRESET_ENV_OPTIONS, targets}],
      typescript && '@babel/preset-typescript',
      react && '@babel/preset-react',
    ].filter(Boolean),
    plugins: BABEL_PLUGINS,
  };
}
