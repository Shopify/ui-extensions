import React, { useEffect, useState } from 'react'

import { Screen, List, Navigator, reactExtension, SearchBar, useApi, ListRow } from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.home.modal.render'>();
  const [data, setData] = useState<ListRow[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const resultProduct = await api.productSearch.fetchProductWithId(1)
  
      if (resultProduct) { 
        const listItem = {
          id: String(resultProduct.id),
          leftSide: {
            label: resultProduct.title,
            image: {
              source: resultProduct.featuredImage
            }
          }
        }
        setData([listItem])
      }
    }

    fetchProduct();
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