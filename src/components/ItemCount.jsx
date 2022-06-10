import React from 'react'
import { useState } from 'react';
import './ItemCount.css'

function ItemCount({stock}) {

    const [count, setCount] = useState(0);
    
    function adding () {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    function subs () {
        if (count > 0) {
            setCount(count - 1);
        }
    }


  return (
    <div>
        <button onClick={subs} className="button button3">-</button>
        <span>{count}</span>
        <button onClick={adding} className="button button1">+</button>
        
    </div>
  )
}

export default ItemCount