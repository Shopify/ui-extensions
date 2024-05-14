import React, { useEffect, useState } from 'react'

import { Screen, List, Navigator, reactExtension, SearchBar, useApi, ListRow } from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.home.modal.render'>();
  const [data, setData] = useState<ListRow[]>([]);

  useEffect(() => {
    const fetchProductVariant = async () => {
      const resultProductVariant = await api.productSearch.fetchProductVariantWithId(1);
  
      if (resultProductVariant) { 
        const listItem = {
          id: String(resultProductVariant.id),
          leftSide: {
            label: resultProductVariant.title,
            image: {
              source: resultProductVariant.image
            }
          }
        }
        setData([listItem])
      }
    }

    fetchProductVariant();
  }, []);

  return (
    <Navigator>
      <Screen name="HelloWorld" title="Hello World!">
        <List
          imageDisplayStrategy='always'
          data={data}
        />
      </Screen>
    </Navigator>
  )
}

export default reactExtension('pos.home.modal.render', () => <Modal />);