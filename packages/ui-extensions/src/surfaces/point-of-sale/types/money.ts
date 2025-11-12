/**
 * Represents a monetary amount with currency information. The amount is represented as a number.
 */
export interface Money {
  /**
   * The monetary amount as a numeric value in the currency's base unit. For example, `100` represents $100.00 USD or €100.00 EUR. This uses JavaScript's number type which has precision limitations for very large amounts or calculations requiring exact decimal arithmetic (floating-point arithmetic issues). For calculations requiring exact precision, consider using `MoneyV2` with string-based amounts.
   */
  amount: number;
  /**
   * The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code identifying which currency the amount is expressed in (for example, `"USD"` for US dollars, `"CAD"` for Canadian dollars, `"EUR"` for euros, `"GBP"` for British pounds). This code determines how the amount should be formatted and displayed, including the currency symbol, decimal separator, and number of decimal places.
   */
  currency: string;
}

/**
 * Represents a monetary amount with currency information. The amount is represented as a string for precision.
 */
export interface MoneyV2 {
  /**
   * The monetary amount as a string value for high-precision decimal calculations. For example, `"100.00"` represents $100.00 or `"19.99"` represents $19.99. String representation avoids floating-point precision issues that can occur with JavaScript numbers, ensuring exact decimal arithmetic for financial calculations. This is critical for accurate tax calculations, discount applications, and currency conversions where precision errors would cause accounting discrepancies.
   */
  amount: string;
  /**
   * The three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code identifying which currency the amount is expressed in (for example, `"USD"` for US dollars, `"CAD"` for Canadian dollars, `"EUR"` for euros, `"GBP"` for British pounds). This code determines how the amount should be formatted and displayed, including the currency symbol, decimal separator, and number of decimal places.
   */
  currencyCode: string;
}
