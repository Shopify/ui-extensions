import {useEffect, useState} from 'react';

import {useExtensionInput} from './utils';

export type SizeClass = 'regular' | 'compact';

export interface Layout {
  horizontal: SizeClass;
}

export interface LayoutHandler {
  onLayoutChange: (layout: Layout) => void;
}

export interface LayoutInput {
  layout: {
    initialData: Layout;
    setHandler: (handler: LayoutHandler) => void;
  };
}

function isLayoutInput(input: ReturnType<typeof useExtensionInput>): input is LayoutInput {
  return 'layout' in input;
}

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
