import React from 'react';
import {createMount} from '@shopify/react-testing';
import * as Components from '../../components';
import {Renderer} from '../../scarlet';
import {AppProvider} from '@shopify/polaris';


// import {createPolarisContext} from '@shopify/polaris';

const mountWithAppProvider = createMount({
  context() {
    return {}
  },
  render(element) {
    return (<AppProvider>{element}</AppProvider>);
  }
});

class DataSource {
  constructor(initialData = []) {
    this.entries = initialData;
    this.onChange = this.onChange.bind(this);
  }

  get value() {
    this.entries
  }

  onChange(newEntries) {
    this.entries = newEntries;
  }
}

const cache = {};

const testGlobals = {
  // Utils
  renderLisp: (lisp) => {
    const dataSource = new DataSource();
    const id = `${Math.floor(Math.random() * Math.pow(10, 10))}-${Date.now()}`;

    cache[id] = mountWithAppProvider(
      <Renderer
        code={lisp}
        components={Components}
        dataSource={dataSource}
      />
    );

    return id;
  },
  // Assertions
  expectEquals: (v1, v2) => {
    expect(v1).toEqual(v2)
  },
  expectComponentToExist: (id, component) => {
    const view = cache[id];
    expect(view).toContainReactComponent(Components[component]);
  },
  expectComponentToHaveProperty: (id, component, property, value) => {
    const view = cache[id];
    const comp = view.find(Components[component]);
    const expectedProps = {};
    expectedProps[property] = value;
    expect(comp).toHaveReactProps(expectedProps);
  },
  expectButtonToTriggerActionWhenClicked(id, component) {
    const view = cache[id];
    const comp = view.find(Components[component])
    const funcYo = comp.prop('onClick')
    comp.trigger('onClick');
    expect(funcYo).toHaveBeenCalled();
  }
};


export default testGlobals;
