import {AppProvider, FormLayout} from '@shopify/polaris';
import React, {useEffect} from 'react';
import {parseLisp} from './ast';
import buildStdlib from './stdlib';
import useDataSource, {DataSource, State} from './useDataSource';

interface ComponentList {
  [name: string]: any;
}
interface PropList {
  [name: string]: any;
}

interface RendererProps {
  code: string;
  components: ComponentList;
  state?: State;
  onChange?: (state: State) => void;
}

export function Renderer({code, state, components, onChange}: RendererProps) {
  const dataSource = useDataSource(state, onChange);
  useEffect(() => dataSource.reset(state || {}), [state]);

  const library = {
    ...buildStdlib(dataSource),
    ...buildComponentLib(components),
  };

  const ast = parseLisp(code);
  const view = ast.evaluate(library);

  console.log(view);

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
