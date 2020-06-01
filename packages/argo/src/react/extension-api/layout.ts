import {useEffect, useState} from 'react';

import {isLayoutApi, LayoutApi} from '../../extension-api/layout';
import {useExtensionApi} from './utils';

type Layout = LayoutApi['layout']['initialData'];

export function useLayout() {
  const api = useExtensionApi();
  if (!isLayoutApi(api)) {
    throw new Error('No layout api found');
  }

  const {
    layout: {initialData, setHandler},
  } = api;
  const [layout, setLayout] = useState<Layout>(initialData);

  useEffect(() => {
    setHandler({
      onLayoutChange: newLayout => setLayout(newLayout),
    });
  }, [setHandler]);

  return layout;
}
