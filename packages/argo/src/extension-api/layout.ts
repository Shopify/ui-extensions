type SizeClass = 'regular' | 'compact';

export interface Layout {
  horizontal: SizeClass;
}

export interface LayoutApi {
  layout: {
    initialValue: Layout;
    setOnChange: (onChange: (layout: Layout) => void) => void;
  };
}

export function isLayoutApi(api: any): api is LayoutApi {
  return 'layout' in api;
}
