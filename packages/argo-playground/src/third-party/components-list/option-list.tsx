import {Card, OptionList} from '@shopify/argo/components';
import React, {useState} from 'react';

export function OptionListExample() {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    {value: 'value1', label: 'label1', disabled: false},
    {value: 'value2', label: 'label2', disabled: true},
    {value: 'value3', label: 'label3', disabled: false},
    {value: 'value4', label: 'label4', disabled: true},
  ];

  const handleSelectionChange = (selected: string[]) => {
    setSelected(selected);
    console.log('Selection changed. Selected items are: ', JSON.stringify(selected));
  };

  return (
    <Card title="OptionList Component">
      <OptionList
        title="OptionList title"
        options={options}
        selected={selected}
        allowMultiple
        onChange={handleSelectionChange}
      />
    </Card>
  );
}
