type SizeClass = 'regular' | 'compact';

export interface LayoutHandler {
  onLayoutChange: (layout: LayoutPayload) => void;
}

export interface LayoutPayload {
  horizontal: SizeClass;
}

export interface LayoutApi {
  layout: {
    initialData: LayoutPayload;
    setHandler: (handler: LayoutHandler) => void;
  };
}

export function isLayoutApi(api: any): api is LayoutApi {
  return 'layout' in api;
}
