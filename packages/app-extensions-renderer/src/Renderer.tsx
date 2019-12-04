import {AppProvider, FormLayout} from '@shopify/polaris';
import React, {useMemo} from 'react';
import {parseLisp, evaluate, AST, parseJSON} from './ast';
import buildStdlib from './stdlib';
import {SSL_OP_SSLEAY_080_CLIENT_DH_BUG} from 'constants';

interface ComponentList {
  [name: string]: (props: any, children: any) => ReturnType<typeof React.createElement>;
}

export interface DataSource {
  get: (key: string) => any;
  set: (key: string) => (value: any) => void;
}

export interface RendererProps {
  ast: AST;
  components: ComponentList;
  dataSource: DataSource;
}

export function Renderer({ast, dataSource, components}: RendererProps) {
  const componentLib = useMemo(() => buildComponentLib(components), [components]);
  const stdlib = useMemo(() => buildStdlib(dataSource), [dataSource]);
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

function buildComponentLib(components: ComponentList): ComponentList {
  return Object.keys(components).reduce((lib: ComponentList, name) => {
    lib[name] = reactify(components[name]);
    return lib;
  }, {});
}

type CreateElementParameters = Parameters<typeof React.createElement>;
const reactify = (component: CreateElementParameters[0]) => (
  props: CreateElementParameters[1],
  children: CreateElementParameters[2],
) => {
  return React.createElement(component, props, children);
};
