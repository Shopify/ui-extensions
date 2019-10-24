declare module "strscan" {
  export class StringScanner {
    constructor(source: string);
    scan(regexp: RegExp): string;
    scanUntil(regexp: RegExp): string;
    scanChar(): string;
    skip(regexp: RegExp): number | undefined;
    skipUntil(regexp: RegExp): number | undefined;
    check(regexp: RegExp): string;
    checkUntil(regexp: RegExp): string;
    peek(length: number): string;
    get source(): string;
    get remainder(): string;
    get position(): number;
    hasTerminated(): boolean;
    get preMatch(): string;
    get match(): string;
    get postMatch(): string;
    get capture(): string;
    reset(): void;
    terminate(): void;
    concat(string: string): string;
    unscan(): void;
    private setState(matches: any, values: any): any;
  }
}
