import {AppProvider, FormLayout} from '@shopify/polaris';
import React from 'react';
import {Context, interpret, parse} from './littlelisp';
import buildStdlib from './stdlib';
import {DataSource} from './useDataSource';

interface ComponentList {
  [name: string]: any;
}
interface PropList {
  [name: string]: any;
}

interface RendererProps {
  code: string;
  dataSource: DataSource;
  components: ComponentList;
  onWorkerAction: (id: string) => void;
}

export function Renderer({code, dataSource, components, onWorkerAction}: RendererProps) {
  const library = {
    ...buildStdlib(dataSource, onWorkerAction),
    ...buildComponentLib(components),
  };

  const result = interpret(typeof code == 'string' ? parse(code) : code, new Context(library));
  if (result) {
    return (
      <AppProvider i18n={{}}>
        <FormLayout>{result}</FormLayout>
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
