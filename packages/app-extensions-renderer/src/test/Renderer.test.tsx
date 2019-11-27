import React, {useState} from 'react';
import {render, fireEvent} from '@testing-library/react';

import {Renderer, RendererProps} from '..';

describe('Renderer', () => {
  it('renders static UI', () => {
    const code = '(Label (# "title" "Hello World!"))';
    const components = {
      Label: ({title}) => <span data-testid="label">{title}</span>,
    };

    const {getByTestId} = render(
      <RendererWithStateManagement code={code} components={components} state={{}} />,
    );
    expect(getByTestId('label').innerHTML).toEqual('Hello World!');
  });

  it('renders dynamic UI', () => {
    const code = '(Label (# "title" (get "title")))';
    const components = {
      Label: ({title}) => <span data-testid="label">{title}</span>,
    };

    const {getByTestId} = render(
      <RendererWithStateManagement
        code={code}
        state={{title: 'Hello World!'}}
        components={components}
      />,
    );
    expect(getByTestId('label').innerHTML).toEqual('Hello World!');
  });

  it('renders UI that supports mutating the state', () => {
    const code = `(
      (Textfield (# "onChange" (set "title") "value" (get "title")))
    )
    `;

    const components = {
      Textfield: ({value, onChange}) => (
        <input
          data-testid="textfield"
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      ),
    };

    const {getByTestId} = render(
      <RendererWithStateManagement
        code={code}
        state={{title: 'Hello World!'}}
        components={components}
      />,
    );

    expect(getByTestId('textfield').getAttribute('value')).toEqual('Hello World!');
    fireEvent.change(getByTestId('textfield'), {target: {value: 'Bye World!'}});
    expect(getByTestId('textfield').getAttribute('value')).toEqual('Bye World!');
  });
});

type InitialState = {
  state: {
    [key: string]: any;
  };
};

function RendererWithStateManagement({
  state: initialState,
  ...props
}: Omit<RendererProps, 'dataSource'> & InitialState) {
  const [state, setState] = useState(initialState);
  const dataSource = {
    get: (key: string) => state[key],
    set: (key: string) => (value: any) => setState({...state, [key]: value}),
  };

  return <Renderer dataSource={dataSource} {...props} />;
}
