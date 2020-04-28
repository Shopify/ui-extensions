import React, {useCallback, useMemo} from 'react';
import {ResourceList as PolarisResouceList, Filters as PolarisFilters} from '@shopify/polaris';

import {ResourceListProps} from '../../../client/core';
import {elementChildren} from '../../utilities/components';

const noop = () => {};

export default function ResourceList({filterControl, children}: ResourceListProps) {
  const polarisItems = elementChildren(children);
  const polarisRenderItem = useCallback(elememt => elememt, []);
  const polarisFilterControl = useMemo(
    () => filterControl && <PolarisFilters filters={[]} {...filterControl} onClearAll={noop} />,
    [filterControl],
  );
  return (
    <PolarisResouceList
      filterControl={polarisFilterControl}
      items={polarisItems}
      renderItem={polarisRenderItem}
    />
  );
}
