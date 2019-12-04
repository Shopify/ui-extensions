import {AppProvider, FormLayout} from '@shopify/polaris';
import React, {useMemo} from 'react';
import {parseLisp, evaluate, AST, parseJSON} from './ast';
import {buildStandardLibrary, ComponentList, buildComponentLibrary} from './runtime';
import {DataSource} from '.';

export interface RendererProps {
  ast: AST;
  components: ComponentList;
  dataSource: DataSource;
}

export function Renderer({ast, dataSource, components}: RendererProps) {
  const componentLib = useMemo(() => buildComponentLibrary(components), [components]);
  const stdlib = useMemo(() => buildStandardLibrary(dataSource), [dataSource]);
  const library = useMemo(() => ({...componentLib, ...stdlib}), [componentLib, stdlib]);
  const view = useMemo(() => {
    return evaluate(ast, library);
  }, [ast, library]);

  if (view) {
    return (
      <AppProvider i18n={{}}>
        <FormLayout>{view}</FormLayout>
      </AppProvider>
    );
  }
  return null;
}

export type RendererWithParserProps = Omit<RendererProps, 'ast'> & {code: string};
export const createRendererWithParser = (parse: (code: string) => AST) => ({
  code,
  ...props
}: RendererWithParserProps) => <Renderer ast={useMemo(() => parse(code), [code])} {...props} />;
export const RendererWithLispParser = createRendererWithParser(parseLisp);
export const RendererWithJSONParser = createRendererWithParser(parseJSON);
