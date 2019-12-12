import {AST, Literal, Identifier, List} from '.';
import {StringScanner} from 'strscan';

const NUMBER_PATTERN = /\d+(?=\s|$|\))/;
// const STRING_PATTERN = /".*?(?<!\\)"/; // Regex from rails implementation
// const STRING_PATTERN = /(?<=\")(.*?)(?<!\\)(?=\")/; // Looks at every thing between two double quotes excluding escaped quotes
const STRING_PATTERN = /"(.*?)(?<!\\)"/; // Works except for escaped quotes
const EMPTY_LIST_PATTERN = /\(\)/;
const LIST_START_PATTERN = /\(/;
const LIST_END_PATTERN = /\)/;
const IDENTIFIER_PATTERN = /[^\s()]+(?=\s|$|\))/;
const WHITESPACE_PATTERN = /\s+/;

export default function parseLisp(lisp: string | StringScanner): AST {
  const buffer: Array<AST> = [];
  const scanner = typeof lisp === 'string' ? new StringScanner(lisp) : lisp;

  while (!scanner.hasTerminated()) {
    if (scanner.scan(NUMBER_PATTERN)) {
      buffer.push(Literal(parseInt(scanner.match)));
    } else if (scanner.scan(STRING_PATTERN)) {
      const value = scanner.match;
      buffer.push(Literal(value.substring(1, value.length - 1)));
    } else if (scanner.scan(EMPTY_LIST_PATTERN)) {
      buffer.push(List([]));
    } else if (scanner.scan(LIST_START_PATTERN)) {
      buffer.push(parseLisp(scanner));
    } else if (scanner.scan(LIST_END_PATTERN)) {
      return List(buffer);
    } else if (scanner.scan(WHITESPACE_PATTERN)) {
      // noop
    } else if (scanner.scan(IDENTIFIER_PATTERN)) {
      buffer.push(Identifier(scanner.match));
    } else {
      throw 'Unknown token';
    }
  }

  return buffer.pop() || List([]);
}
