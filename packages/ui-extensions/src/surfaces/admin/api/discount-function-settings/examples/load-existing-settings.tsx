import React, {useEffect, useState} from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const LoadExistingSettings = () => {
  const {data} = useApi<'admin.discount-details.function-settings.render'>();
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const metafields = data.metafields;
    const loadedSettings = metafields.reduce((acc, mf) => {
      acc[mf.key] = mf.value;
      return acc;
    }, {});

    setSettings(loadedSettings);
  }, [data]);

  return null;
};

export default reactExtension('admin.discount-details.function-settings.render', () => <LoadExistingSettings />);
