import {AppProvider, FormLayout} from '@shopify/polaris';
import React, {useMemo} from 'react';
import {parseLisp, evaluate} from './ast';
import buildStdlib from './stdlib';

interface ComponentList {
  [name: string]: (props: any, children: any) => ReturnType<typeof React.createElement>;
}
interface PropList {
  [name: string]: any;
}

export interface DataSource {
  get: (key: string) => any;
  set: (key: string) => (value: any) => void;
}

export interface RendererProps {
  code: string;
  components: ComponentList;
  dataSource: DataSource;
}

export function Renderer({code, dataSource, components}: RendererProps) {
  const view = useMemo(() => {
    const library = {
      ...buildStdlib(dataSource),
      ...buildComponentLib(components),
    };

    return evaluate(parseLisp(code), library);
  }, [code, dataSource, components]);

  if (view) {
    return (
      <AppProvider i18n={{}}>
        <FormLayout>{view}</FormLayout>
      </AppProvider>
    );
  }
  return null;
}

function buildComponentLib(components: ComponentList): ComponentList {
  return Object.keys(components).reduce((lib: ComponentList, name) => {
    lib[name] = reactify(components[name]);
    return lib;
  }, {});
}

type CreateElementArgs<P extends number> = (typeof React.createElement extends (
  ...args: infer U
) => any
  ? U
  : never)[P];
const reactify = (component: CreateElementArgs<0>) => (
  props: CreateElementArgs<1>,
  children: CreateElementArgs<2>,
) => {
  return React.createElement(component, props, children);
};
