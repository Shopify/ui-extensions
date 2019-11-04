import React from 'react';
import Controls from './Controls';
import ComponentsPanel from './ComponentsPanel';
import Header, {HeaderProps} from './Header';
import PropertiesPanel from './PropertiesPanel';
import Stage from './Stage';
import {Stack} from '@shopify/polaris';

type Props = HeaderProps;

export default function App(props: Props) {
  const {name, primaryAction, secondaryAction} = props;

  const headerProps = {
    name,
    primaryAction,
    secondaryAction,
  };

  return (
    <>
      <Header {...headerProps} />
      <Controls />
      <Stack>
        <Stack.Item>
          <ComponentsPanel />
        </Stack.Item>
        <Stack.Item fill>
          <Stage />
        </Stack.Item>
        <Stack.Item>
          <PropertiesPanel />
        </Stack.Item>
      </Stack>
    </>
  );
}
