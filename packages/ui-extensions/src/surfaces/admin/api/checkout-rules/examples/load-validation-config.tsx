import React, {useEffect, useState} from 'react';
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/admin';

const LoadValidationConfig = () => {
  const {data} = useApi<'admin.settings.validation.render'>();
  const [config, setConfig] = useState(null);

  useEffect(() => {
    if (data.validation) {
      const metafields = data.validation.metafields;
      const loadedConfig = metafields.reduce((acc, mf) => {
        acc[mf.key] = mf.value;
        return acc;
      }, {});
      
      setConfig(loadedConfig);
    }
  }, [data]);

  return null;
};

export default reactExtension(
  'admin.settings.validation.render',
  () => <LoadValidationConfig />,
);
