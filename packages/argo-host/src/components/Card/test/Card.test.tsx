import '@shopify/react-testing/matchers';
import React from 'react';

import {mountWithAppProvider as mount} from '../../../../../../test-utils/mount';
import Card from '../Card';

describe('<Card />', () => {
  it('displays content in card header', async () => {
    const root = await mount(<Card actions={[{content: 'test content'}]}></Card>);

    expect(root).toContainReactText('test content');
  });

  it('triggers onAction callback', async () => {
    const spy = jest.fn();

    const root = await mount(<Card actions={[{content: 'test', onAction: spy}]}></Card>);

    root.triggerKeypath('actions[0].onAction');
    expect(spy).toBeCalled();
  });
});
