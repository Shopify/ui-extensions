import {AppProvider, FormLayout} from '@shopify/polaris';
import React, {useMemo} from 'react';
import {parseLisp} from './ast';
import buildStdlib from './stdlib';

interface ComponentList {
  [name: string]: any;
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

    return parseLisp(code).evaluate(library);
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

const reactify = (component: any) => (props: PropList, children: any) => {
  return React.createElement(component, props, children);
};
