import React, {ReactElement, useContext, useEffect, useState} from 'react';

/**
 * Layout
 */

export type SizeClass = 'regular' | 'compact';

export interface Layout {
  sizeClass: {
    v: SizeClass;
    h: SizeClass;
  };
}

const LayoutContext = React.createContext<Layout | undefined>(undefined);

export const LayoutConsumer = LayoutContext.Consumer;

export function useLayout() {
  return useContext(LayoutContext);
}

/**
 * All global listeners
 */
export interface Listeners {
  onLayoutChange?: (layout: Layout) => void;
}

/**
 * Attach listners by creating context
 */
export function attachListeners(
  element: ReactElement,
  setEventListeners?: (listeners: Listeners) => void,
) {
  return <ListenersProvider setEventListeners={setEventListeners}>{element}</ListenersProvider>;
}

interface Props {
  setEventListeners?: (listeners: Listeners) => void;
  children: ReactElement;
}

const ListenersProvider = ({setEventListeners, children}: Props) => {
  const [layout, setLayout] = useState<Layout | undefined>(undefined);

  useEffect(() => {
    setEventListeners &&
      setEventListeners({
        onLayoutChange: newLayout => setLayout(newLayout),
      });
  }, [setEventListeners, setLayout]);

  return <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>;
};
