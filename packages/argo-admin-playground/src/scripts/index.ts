interface Script {
  label: string;
  name: string;
  path: string;
  excludeFromManifest?: boolean;
}

const scripts: Script[] = [
  {
    label: 'Playground',
    name: '3p-playground.worker',
    path: './scripts/playground.tsx',
  },
  {
    label: 'Components List',
    name: '3p-components-list.worker',
    path: './scripts/components-list/index.tsx',
  },
  {
    label: 'Inline Script',
    name: '3p-inline-script.worker',
    path: './scripts/inline-script.tsx',
  },
  {
    label: 'Use Form',
    name: '3p-use-form.worker',
    path: './scripts/use-form.tsx',
  },
  {
    label: 'Vanilla',
    name: '3p-vanilla.worker',
    path: './scripts/vanilla.ts',
  },
  {
    label: 'SubscriptionContent',
    name: '3p-subscription-content.worker',
    path: './scripts/subscription-content.tsx',
    excludeFromManifest: true,
  },
];

export default scripts;
