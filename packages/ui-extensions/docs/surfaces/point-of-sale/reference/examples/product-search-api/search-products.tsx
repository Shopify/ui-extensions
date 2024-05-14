import React, { useState } from 'react'

import { Screen, List, Navigator, reactExtension, SearchBar, useApi, ListRow } from '@shopify/ui-extensions-react/point-of-sale';

const Modal = () => {
  const api = useApi<'pos.home.modal.render'>();
  const [data, setData] = useState<ListRow[]>([]);

  const search = async (queryString?: string) => {
    const results = await api.productSearch.searchProducts({queryString})
    const data = results.items.map((product): ListRow => {
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

    setData(data)
  }

  return (
    <Navigator>
      <Screen name="HelloWorld" title="Hello World!">
        <List
          listHeaderComponent={<SearchBar 
            placeholder='Search products'
            onTextChange={search}
            onSearch={search}
          />}
        imageDisplayStrategy='always'
        data={data}
        />
      </Screen>
    </Navigator>
  )
}

export default reactExtension('pos.home.modal.render', () => <Modal />);