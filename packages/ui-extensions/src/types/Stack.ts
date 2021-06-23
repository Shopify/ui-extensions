type Alignment = 'leading' | 'center' | 'trailing' | 'baseline';

type Spacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose';

export interface BaseStackProps {
  alignment?: Alignment;
  spacing?: Spacing;
}
