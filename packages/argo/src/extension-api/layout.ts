export type SizeClass = 'regular' | 'compact';

export interface Layout {
  horizontal: SizeClass;
}

export interface LayoutHandler {
  onLayoutChange: (layout: Layout) => void;
}

export interface LayoutApi {
  layout: {
    initialData: Layout;
    setHandler: (handler: LayoutHandler) => void;
  };
}

export function isLayoutApi(api: any): api is LayoutApi {
  return 'layout' in api;
}
