import {AST} from '.';

export default function generateJSON(ast: AST): string {
  return JSON.stringify(ast);
}
