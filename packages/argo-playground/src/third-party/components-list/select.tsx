import React, {useState, useCallback} from 'react';
import {SelectProps, Card, CardSection, Select} from '@shopify/argo-react/components';

const SELECTS: SelectProps['options'] = [
  {label: 'Today', value: 'today'},
  {label: 'Yesterday', value: 'yesterday'},
  {label: 'Last 7 days', value: 'lastWeek'},
];

export function SelectExample() {
  const [selectValue, setSelectValue] = useState('today');
  const onSelectChange = useCallback(newValue => {
    setSelectValue(newValue);
  }, []);

  return (
    <Card title="Select component">
      <CardSection title="Default">
        <Select
          label="Date range"
          options={SELECTS}
          value={selectValue}
          onChange={onSelectChange}
        />
      </CardSection>
      <CardSection title="LabelInline">
        <Select
          labelInline
          label="Date range"
          options={SELECTS}
          value={selectValue}
          onChange={onSelectChange}
        />
      </CardSection>
      <CardSection title="No label">
        <Select label="" options={SELECTS} value={selectValue} onChange={onSelectChange} />
      </CardSection>
    </Card>
  );
}
