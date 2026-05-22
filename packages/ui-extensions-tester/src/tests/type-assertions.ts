export type Equals<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T,
>() => T extends B ? 1 : 2
  ? true
  : false;

export function assertType<_T extends true>(): void {
  return undefined;
}
