import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import customFetch from '../utils/customFetch'
import products from '../utils/products'
import ItemList from './ItemList'
import style from './ItemListContainer.module.css'

function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect(() => {
        customFetch(3000, products)
        .then(resultado => setItems(resultado))
    }, [])

  return (
    <div className={style.container}>
       {
        items?.length <= 0 ? <h1>Loading...</h1> : <ItemList products={items}/>
       }
        
    </div>
  )
}

export default ItemListContainer