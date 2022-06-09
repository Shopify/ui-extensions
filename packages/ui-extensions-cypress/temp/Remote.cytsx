import * as React from 'react';

// in WorkerRenderer.tsx

import {createWorkerFactory} from '@shopify/web-worker';
// import {createRemoteRoot, createRemoteReceiver} from '@remote-ui/core';
import {createRemoteReceiver} from '@remote-ui/core';
import {
  render,
  createRemoteRoot,
  createRemoteReactComponent,
} from '@remote-ui/react';

import {mount} from '@remote-ui/testing';

const createWorker = createWorkerFactory(() => import('../worker'));

export function WorkerRenderer() {
  return null;
}

describe('Remote.cy.ts', () => {
  const myRoot = createRemoteRoot(() => {
    /* handle updates */
  });

  it('playground', () => {
    cy.mount(<div>FOOBAR</div>);
    const tree = mount((root) => {
      const button = root.createComponent('Button', {
        onPress: () => 'Paid!',
      });
      button.appendChild('Submit');
      root.appendChild(button);
    }, myRoot);
    // cy.window().then((win) => {
    //   win.eval(`
    //   run()
    //   `);
    // });
  });

  it('works using testing lib syntax', () => {
    function render(root) {
      const button = root.createComponent('Button', {
        onPress: () => {
          text.updateText('Goodbye!');
        },
      });

      const text = root.createText('Hello!');
      button.appendChild(text);
      root.appendChild(button);
    }

    const myComponent = mount(render);
    console.warn('myComponent', myComponent);
    myComponent.find('Button').trigger('onPress');

    // expect(myComponent.find('Button')).toContainRemoteText('Goodbye!');
  });
  it('can work with a remote root', () => {
    WorkerRenderer();
    const receiver = createRemoteReceiver();

    const root = createRemoteRoot(receiver.receive, {
      strict: false,
    });
    const button = root.createComponent('Button', {
      onPress() {
        console.log('Pressed!');
      },
    });
    root.appendChild(button);
    root.mount();
    cy.log('hi');
  });

  it('receiver', () => {
    const receiver = createRemoteReceiver();
    receiver.on('mount', () => {
      console.log('Mounted!');
    });

    // const root = createRemoteRoot(receiver.receive);
    const root = createRemoteRoot(receiver.receive, {components: ['Button']});
    // const Button = 'Button';
    const Button = createRemoteReactComponent<'Button', {onPress(): void}>(
      'Button',
    );

    // const button = root.createComponent('Button', {
    //   onPress() {
    //     console.log('Pressed!');
    //   },
    // });
    // root.appendChild(button);
    // root.mount();

    // render(root);
    function App() {
      return <Button onClick={() => console.log('clicked!')}>Click me!</Button>;
    }

    render(<App />, remoteRoot);

    cy.wrap(root);
    cy.log('hi');
  });
});
