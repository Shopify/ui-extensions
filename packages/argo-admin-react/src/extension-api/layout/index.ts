import {useEffect, useState} from 'react';
import {isLayoutApi, Layout} from '@shopify/argo-admin';

import {useExtensionApi} from '../utils';

export function useLayout() {
  const api = useExtensionApi();
  if (!isLayoutApi(api)) {
    throw new Error('No layout api found');
  }

  const {
    layout: {initialValue, setOnChange},
  } = api;
  const [layout, setLayout] = useState<Layout>(initialValue);

  useEffect(() => {
    setOnChange((newLayout) => setLayout(newLayout));
  }, [setOnChange]);

  return layout;
}
