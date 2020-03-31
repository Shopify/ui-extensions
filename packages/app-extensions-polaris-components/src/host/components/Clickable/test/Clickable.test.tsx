// import '@shopify/react-testing/matchers';
import React from 'react';

import {mountWithAppProvider as mount} from '../../../../../../../test-utils/mount';
import Clickable from '../Clickable';

describe('<Clickable />', () => {
  it('triggers the onClick prop when clicked', async () => {
    const onClick = jest.fn();
    const root = await mount<any>(<Clickable onClick={onClick}>Click me</Clickable>);
    root.trigger('onClick');
    expect(onClick).toBeCalled();
  });

  it('does not trigger the onClick prop of a parent Clickable component when child component is clicked', async () => {
    const parentOnClick = jest.fn();
    const childOnClick = jest.fn();
    const root = await mount(
      <Clickable onClick={parentOnClick}>
        <Clickable onClick={childOnClick}>Click me</Clickable>
      </Clickable>,
    );
    root.find(Clickable, {onClick: childOnClick}).trigger('onClick');
    expect(childOnClick).toBeCalled();
    expect(parentOnClick).not.toBeCalled();
  });
});
