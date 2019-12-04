import React from 'react';
import {DataSource} from '.';

export function buildStandardLibrary(dataSource: DataSource) {
  return {
    get: dataSource.get,
    set: dataSource.set,

    if: (condition, trueCase, falseCase?) => (condition ? trueCase : falseCase),

    '#'(...args: any[]) {
      const obj: {[key: string]: any} = {};
      for (let i = 0; i < args.length; i += 2) {
        const [key, value] = [i, i + 1];
        obj[args[key]] = args[value];
      }
      return obj;
    },

    alert: (message: string) => () => {
      alert(message);
    },

    log(...args: any[]) {
      console.log(...args);
      return args;
    },

    true: true,

    false: false,
  };
}

export interface ComponentList {
  [name: string]: (props: any, children: any) => ReturnType<typeof React.createElement>;
}

export function buildComponentLibrary(components: ComponentList): ComponentList {
  return Object.keys(components).reduce((lib: ComponentList, name) => {
    lib[name] = createElementFactory(components[name]);
    return lib;
  }, {});
}

type CreateElementParameters = Parameters<typeof React.createElement>;
const createElementFactory = (component: CreateElementParameters[0]) => (
  props: CreateElementParameters[1],
  children: CreateElementParameters[2],
) => {
  return React.createElement(component, props, children);
};
