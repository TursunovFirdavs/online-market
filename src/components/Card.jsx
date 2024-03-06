import React from 'react'

const Card = (product) => {
    const discount = product.price - (product.price / product.discount)
  return (
    <div>
        <img src={product.img} alt="" />
        <h3>{product.title}</h3>
        <div>
            {product.discount && <p>{product.discount}</p>}
            <p>{product.discount ? discount : product.price}</p>
        </div>
    </div>
  )
}

export default Card