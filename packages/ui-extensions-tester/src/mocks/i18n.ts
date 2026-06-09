/**
 * Shared mock `i18n` object used by all surfaces.
 *
 * - `formatNumber` / `formatCurrency` stringify the number.
 * - `formatDate` returns the ISO string.
 * - `translate` echoes the translation key.
 */
export function createMockI18n() {
  return {
    formatNumber: (number: number | bigint) => String(number),
    formatCurrency: (number: number | bigint) => String(number),
    formatDate: (date: Date) => date.toISOString(),
    translate: ((key: string) => key) as any,
  };
}
