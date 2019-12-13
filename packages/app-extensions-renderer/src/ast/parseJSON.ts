import {AST, List} from '.';

export default function parseJSON(json: string): AST {
  return JSON.parse(json);
}
