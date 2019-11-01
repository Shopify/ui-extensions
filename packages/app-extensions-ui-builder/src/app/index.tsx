import React from 'react';
import Controls from './Controls';
import ComponentsPanel from './ComponentsPanel';
import Header, {HeaderProps} from './Header';
import PropertiesPanel from './PropertiesPanel';
import Stage from './Stage';

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
      <ComponentsPanel />
      <PropertiesPanel />
      <Stage />
    </>
  );
}
