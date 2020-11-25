import React, {useState} from 'react';
import {
  TextField,
  Select as PolarisSelect,
  Card,
  Stack,
  Link,
  Button,
  Form,
} from '@shopify/polaris';
import get from 'lodash/fp/get';
import last from 'lodash/fp/last';

import {Settings, SubscriptionData, ProductSubscriptionAction} from '../types';
import {proxyGetPath, getter} from '../utils';

// Assumes key and value of enum are the same
function enumToArray<T>(enumMap: T): (keyof T)[] {
  return Object.keys(enumMap).map((key) => (enumMap as any)[key]);
}

interface PathFn<T, V> {
  (state: T): V;
}

export interface BasicFieldProps<T> {
  pathFn: PathFn<T, string | number | string[]>;
  state: T;
  updateState: (
    pathFn: PathFn<T, string | number | string[]>,
    value: string | number | string[],
  ) => void;

  // if optional=true, then empty string will convert to undefined
  // so that settings parsing will delete the key
  optional?: boolean;
}

export type SettingsFieldProps = Pick<BasicFieldProps<Settings>, 'state' | 'updateState'>;

export function BasicField<T extends object>({
  pathFn,
  state,
  updateState,
  optional,
}: BasicFieldProps<T>) {
  const path = proxyGetPath(pathFn);
  const getValue = (value: string) => (optional && value === '' ? undefined : value);
  return (
    <TextField
      label={last(path) as string}
      value={get(path)(state)}
      onChange={(value) => updateState(pathFn, getValue(value) as any)}
    />
  );
}

export interface SelectProps<T, O> extends BasicFieldProps<T> {
  options: O;
}

export function Select<T extends object, O>({
  options,
  pathFn,
  state,
  updateState,
}: SelectProps<T, O>) {
  const path = proxyGetPath(pathFn);
  return (
    <PolarisSelect
      options={enumToArray(options) as any[]}
      label={last(path) as string}
      value={get(path)(state)}
      onChange={(value: string) => updateState(pathFn, value as any)}
    />
  );
}

function Action({state, updateState}: SettingsFieldProps) {
  return (
    <Select
      pathFn={(state) => state.data!.action}
      options={ProductSubscriptionAction}
      state={state}
      updateState={updateState}
    />
  );
}

function ProductId({state, updateState}: SettingsFieldProps) {
  return BasicField({
    state,
    updateState,
    pathFn: (state) => state.data!.productId,
  });
}

function SellingPlanGroupId({state, updateState}: SettingsFieldProps) {
  return BasicField({
    state,
    updateState,
    pathFn: (state) => state.data!.sellingPlanGroupId,
  });
}

function VariantId({state, updateState}: SettingsFieldProps) {
  return BasicField({
    state,
    updateState,
    pathFn: (state) => state.data!.variantId!,
    optional: true,
  });
}

function VariantIds({state, updateState}: SettingsFieldProps) {
  const [variantId, setVariantId] = useState('');
  const variantIdsPath = ({data}: Settings) => data!.variantIds;
  const variantIds = getter(variantIdsPath)(state);

  return (
    <Card sectioned title="variantIds">
      <Stack vertical>
        {variantIds.map((variantId, index) => (
          <Stack key={index}>
            <Stack.Item fill>{variantId}</Stack.Item>
            <Link
              onClick={() => {
                updateState(
                  variantIdsPath,
                  variantIds.filter((_, idIndex) => index !== idIndex),
                );
              }}
            >
              Remove
            </Link>
          </Stack>
        ))}
        <Form
          onSubmit={() => {
            if (variantId) {
              updateState(variantIdsPath, variantIds.concat(variantId));
              setVariantId('');
            }
          }}
        >
          <Stack>
            <Stack.Item fill>
              <TextField label="" value={variantId} onChange={setVariantId} />
            </Stack.Item>
            <Button submit>Add</Button>
          </Stack>
        </Form>
      </Stack>
    </Card>
  );
}

export const ActionField: Record<
  keyof SubscriptionData,
  (props: SettingsFieldProps) => React.ReactNode
> = {
  action: Action,
  productId: ProductId,
  variantId: VariantId,
  variantIds: VariantIds,
  sellingPlanGroupId: SellingPlanGroupId,
};
