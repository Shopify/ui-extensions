import {useEffect, useState} from 'react';
import {isLayoutInput, Layout} from '@shopify/argo';

import {useExtensionInput} from './utils';

export function useLayout() {
  const input = useExtensionInput();
  if (!isLayoutInput(input)) {
    throw new Error('No layout input found');
  }

  const {
    layout: {initialData, setHandler},
  } = input;
  const [layout, setLayout] = useState<Layout>(initialData);

  useEffect(() => {
    setHandler({
      onLayoutChange: newLayout => setLayout(newLayout),
    });
  }, [setHandler]);

  return layout;
}
