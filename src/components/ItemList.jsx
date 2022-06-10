import React from 'react'
import Item from './Item'

function ItemList({products}) {
  return (
    products.map(p => 
        <Item
        key={p.id}
        {...p}
        />
        )
  )
}

export default ItemList