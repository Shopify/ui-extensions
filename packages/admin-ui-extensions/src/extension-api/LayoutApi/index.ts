type SizeClass = 'regular' | 'compact';

export interface Layout {
  horizontal: SizeClass;
}

interface LayoutApiContent {
  initialValue: Layout;
  setOnChange: (onChange: (layout: Layout) => void) => void;
}

/**
 * You can use the Layout utility to adjust your content based on the user's screen size.
 * Layout returns `'compact'` on mobile devices and at narrow screen widths, and `'regular'` otherwise.
 */
export interface LayoutApi {
  layout: LayoutApiContent;
}

export function isLayoutApi(api: any): api is LayoutApi {
  return 'layout' in api;
}
