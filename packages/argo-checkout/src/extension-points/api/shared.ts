export type ValueOrPromise<T> = T extends PromiseLike<any> ? T : T | Promise<T>;

export type CurrencyCode = string;
