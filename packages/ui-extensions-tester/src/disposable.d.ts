/**
 * Polyfill type declarations for the Explicit Resource Management proposal
 * (https://github.com/tc39/proposal-explicit-resource-management).
 *
 * TypeScript >= 5.2 ships these in `lib.esnext.disposable.d.ts`.
 * For older versions we declare them here so that consumers can write
 * `using extension = setUpExtension(...)` with full type safety.
 *
 * These declarations are additive — if `Symbol.dispose` already exists
 * in the type system (TS >= 5.2 with `lib: ["esnext"]`), the interfaces
 * merge harmlessly.
 */

interface SymbolConstructor {
  readonly dispose: unique symbol;
}

interface Disposable {
  [Symbol.dispose](): void;
}
