import { Literal, Identifier, List } from '.';
import { StringScanner } from "strscan";
import { isString } from 'util';

const NUMBER_PATTERN = /\d+(?=\s|$|\))/;
const STRING_PATTERN = /"/;
const EMPTY_LIST_PATTERN = /\(\)/;
const LIST_START_PATTERN = /\(/;
const LIST_END_PATTERN = /\)/;
const IDENTIFIER_PATTERN = /[^\s()]+(?=\s|$|\))/;
const WHITESPACE_PATTERN = /\s+/;

type AST = Literal | Identifier | List;

export default function parseLisp(lisp: string | StringScanner): AST {
  const buffer: Array<AST> = [];
  const scanner = isString(lisp) ? new StringScanner(lisp) : lisp;
  const scanString = () => scanner.scan(/.*"/);

  while (!scanner.hasTerminated()) {
    if (scanner.scan(NUMBER_PATTERN)) {
      buffer.push(new Literal(parseInt(scanner.match)));
    }
    else if (scanner.scan(STRING_PATTERN)) {
      let value = scanString();
      while (value[value.length - 2] === "\\") {
        value += scanString();
      }

      value = value.substring(0, value.length - 1).replace('\\', '');
      buffer.push(new Literal(value));
    }
    else if (scanner.scan(EMPTY_LIST_PATTERN)) {
      buffer.push(new List([]));
    }
    else if (scanner.scan(LIST_START_PATTERN)) {
      buffer.push(parseLisp(scanner));
    }
    else if (scanner.scan(LIST_END_PATTERN)) {
      return new List(buffer);
    }
    else if (scanner.scan(WHITESPACE_PATTERN)) {
      // noop
    }
    else if (scanner.scan(IDENTIFIER_PATTERN)) {
      buffer.push(new Identifier(scanner.match))
    }
    else {
      throw "Unknown token";
    }
  }

  return buffer.pop() || new List([]);
}
