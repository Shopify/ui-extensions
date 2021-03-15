interface Script {
  label: string;
  path: string;
  excludeFromManifest?: boolean;
}

const scripts: Script[] = [
  {
    label: 'Playground',
    path: './scripts/playground.tsx',
  },
  {
    label: 'Components List',
    path: './scripts/components-list/index.tsx',
  },
  {
    label: 'Inline Script',
    path: './scripts/inline-script.tsx',
  },
  {
    label: 'Use Form',
    path: './scripts/use-form.tsx',
  },
  {
    label: 'Vanilla',
    path: './scripts/vanilla.ts',
  },
  {
    label: 'SubscriptionContent',
    path: './scripts/subscription-content.tsx',
  },
];

export default scripts;
