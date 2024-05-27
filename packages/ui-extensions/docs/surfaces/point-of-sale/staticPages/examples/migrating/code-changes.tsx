// Before
import React from 'react'
import { Tile, useApi, render } from '@shopify/retail-ui-extensions-react'

const SmartGridTile = () => {
  const api = useApi<'pos.home.tile.render'>()
  return (
    <Tile
      title="My app"
      subtitle="SmartGrid Extension"
      onPress={() => {
        api.smartGrid.presentModal()
      }}
      enabled
    />
  )
}

render('pos.home.tile.render', () => <SmartGridTile />)

// After
import React from 'react'
import { Tile, useApi, reactExtension } from '@shopify/ui-extensions-react/point-of-sale'

const SmartGridTile = () => {
  const api = useApi<'pos.home.tile.render'>()
  return (
    <Tile
      title="My app"
      subtitle="SmartGrid Extension"
      onPress={() => {
        api.action.presentModal()
      }}
      enabled
    />
  )
}

export default reactExtension('pos.home.tile.render', () => <SmartGridTile />)
