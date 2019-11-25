import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {Renderer} from '..';

describe('Renderer', () => {
  it('renders static UI', () => {
    const code = '(Label (# "title" "Hello World!"))';
    const components = {
      Label: ({title}) => <span data-testid="label">{title}</span>,
    };

    const {getByTestId} = render(<Renderer code={code} components={components} />);
    expect(getByTestId('label').innerHTML).toEqual('Hello World!');
  });

  it('renders dynamic UI', () => {
    const code = '(Label (# "title" (get "title")))';
    const components = {
      Label: ({title}) => <span data-testid="label">{title}</span>,
    };

    const {getByTestId} = render(
      <Renderer code={code} state={{title: 'Hello World!'}} components={components} />,
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

    let receivedExpectedStateUpdate = false;
    const {getByTestId} = render(
      <Renderer
        code={code}
        state={{title: 'Hello World!'}}
        components={components}
        onChange={newState => {
          receivedExpectedStateUpdate = newState.title === 'Bye World!';
        }}
      />,
    );

    expect(getByTestId('textfield').getAttribute('value')).toEqual('Hello World!');
    fireEvent.change(getByTestId('textfield'), {target: {value: 'Bye World!'}});
    expect(getByTestId('textfield').getAttribute('value')).toEqual('Bye World!');
    expect(receivedExpectedStateUpdate).toEqual(true);
  });
});
