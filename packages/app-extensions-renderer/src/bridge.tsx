import React, {ReactElement, useContext, useEffect, useState} from 'react';

/**
 * Layout
 */

export type SizeClass = 'regular' | 'compact';

export interface Layout {
  horizontal: SizeClass;
}

const LayoutContext = React.createContext<Layout | undefined>(undefined);

export const LayoutConsumer = LayoutContext.Consumer;

export function useLayout() {
  return useContext(LayoutContext);
}

/**
 * Global handler to communicate with the host
 */
export interface Handler {
  onLayoutChange?: (layout: Layout) => void;
}

export interface Bridge {
  initialData?: {
    layout?: Layout;
  };
  setHandler?: (handler: Handler) => void;
}

/**
 * Attach bridge by creating context provider
 */
export function attach(element: ReactElement, bridge?: Bridge) {
  return <Provider bridge={bridge}>{element}</Provider>;
}

interface Props {
  bridge?: Bridge;
  children: ReactElement;
}

const Provider = ({bridge, children}: Props) => {
  const [layout, setLayout] = useState<Layout | undefined>(bridge?.initialData?.layout);

  useEffect(() => {
    bridge?.setHandler?.({
      onLayoutChange: newLayout => setLayout(newLayout),
    });
  }, [bridge?.setHandler]);

  return <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>;
};
