import { FormLayout } from "@shopify/polaris";
import React from "react";
import { Context, interpret, parse } from "../lib/littlelisp";
import buildStdlib from "./stdlib";
import { DataSource } from "./useDataSource";

interface ComponentList {[name: string]: any; }
interface PropList {[name: string]: any; }

interface RendererProps {
  code: string;
  dataSource: DataSource;
  components: ComponentList;
}

export function Renderer({code, dataSource, components}: RendererProps) {
  const library = {
    ...buildStdlib(dataSource),
    ...buildComponentLib(components),
  };

  const result = interpret(parse(code), new Context(library));
  if (result) { return <FormLayout>{result}</FormLayout>; }
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
