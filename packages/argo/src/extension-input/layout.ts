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

export function isLayoutInput(input: any): input is LayoutInput {
  return 'layout' in input;
}
