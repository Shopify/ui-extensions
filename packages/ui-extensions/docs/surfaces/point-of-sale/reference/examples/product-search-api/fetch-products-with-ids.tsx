import React, { useEffect, useState } from 'react'

import { Screen, List, Navigator, reactExtension, SearchBar, useApi, ListRow } from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.home.modal.render'>();
  const [data, setData] = useState<ListRow[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await api.productSearch.fetchProductsWithIds([1, 2, 3]);
      const data = results.fetchedResources.map((product): ListRow => {
        return {
          id: String(product.id),
          leftSide: {
            label: product.title,
            image: {
              source: product.featuredImage
            }
          }
        }
      })

      console.log('IDs not found: ', results.idsForResourcesNotFound);
  
      setData(data)
    }

    fetchProducts();
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