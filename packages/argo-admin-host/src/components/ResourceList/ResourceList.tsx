import React, {useCallback, useMemo} from 'react';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {ResourceList as ArgoResourceList} from '@shopify/argo-admin-react';
import {ResourceList as PolarisResouceList, Filters as PolarisFilters} from '@shopify/polaris';

import {elementChildren} from '../../utilities/components';

type ResourceListProps = ReactPropsFromRemoteComponentType<typeof ArgoResourceList>;

const noop = () => {};

export default function ResourceList({filterControl, children}: ResourceListProps) {
  const polarisItems = elementChildren(children);
  const polarisRenderItem = useCallback((elememt) => elememt, []);
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
