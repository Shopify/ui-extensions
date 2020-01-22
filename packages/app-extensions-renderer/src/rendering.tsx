import {AppProvider, FormLayout} from '@shopify/polaris';
import React, {useMemo} from 'react';
import {parseLisp, evaluate, AST, parseJSON} from './ast';
import {buildStandardLibrary, ComponentList, buildComponentLibrary} from './runtime';
import {DataSource} from '.';

export interface RendererProps {
  ast: AST;
  components: ComponentList;
  dataSource: DataSource;
  library?: {[name: string]: Function};
}

export function Renderer({ast, dataSource, components, library: userLibrary}: RendererProps) {
  const componentLibrary = useMemo(() => buildComponentLibrary(components), [components]);
  const standardLibrary = useMemo(() => buildStandardLibrary(dataSource), [dataSource]);
  const library = useMemo(() => ({...componentLibrary, ...standardLibrary, ...userLibrary}), [
    componentLibrary,
    standardLibrary,
    userLibrary,
  ]);
  const view = useMemo(() => evaluate(ast, library), [ast, library]);
  return view ? view : null;
}

export type RendererWithParserProps = Omit<RendererProps, 'ast'> & {code: string};
export const createRendererWithParser = (parse: (code: string) => AST) => ({
  code,
  ...props
}: RendererWithParserProps) => <Renderer ast={useMemo(() => parse(code), [code])} {...props} />;
export const RendererWithLispParser = createRendererWithParser(parseLisp);
export const RendererWithJSONParser = createRendererWithParser(parseJSON);
