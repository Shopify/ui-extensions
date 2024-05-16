import React, { useEffect, useState } from 'react'

import { Screen, List, Navigator, reactExtension, SearchBar, useApi, ListRow } from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.home.modal.render'>();
  const [data, setData] = useState<ListRow[]>([]);

  useEffect(() => {
    const fetchProductVariants = async () => {
      const results = await api.productSearch.fetchPaginatedProductVariantsWithProductId(1, {first: 10});
      const data = results.items.map((variant): ListRow => {
        return {
          id: String(variant.id),
          leftSide: {
            label: variant.title,
            image: {
              source: variant.image
            }
          }
        }
      })
  
      console.log('Cursor for next page: ', results.lastCursor);
      setData(data)
    }

    fetchProductVariants();
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