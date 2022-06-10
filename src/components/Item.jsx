import React from 'react'
import style from './Item.module.css'
import ItemCount from './ItemCount'

function Item({image, name, price, stock}) {
  return (
        <div className={style.card}>
        <img src={image} alt="Denim Jeans"/>
        <h1>{name}</h1>
        <p className={style.price}> $ {price}</p>
        {/* <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
        <p><button>Add to Cart</button></p> */}
        <ItemCount stock={stock}/>
    </div>
  )
}

export default Item