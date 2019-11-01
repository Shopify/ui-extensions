import React from 'react';
import Controls from './Controls';
import ComponentsPanel from './ComponentsPanel';
import PropertiesPanel from './PropertiesPanel';
import Stage from './Stage';

export default function App() {
  return (
    <>
      <Controls />
      <ComponentsPanel />
      <PropertiesPanel />
      <Stage />
    </>
  );
}
