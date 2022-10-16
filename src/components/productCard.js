import React, { useState } from 'react'
import "./productCard.css"
import { useDispatch } from 'react-redux';

const ProductCard = ({ id, image, type, brand, model, price }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const changeQuantity = (type) => {
        if (type == "remove") {
            if (quantity > 1) setQuantity(quantity - 1)
        } else {
            if (quantity < 3) setQuantity(quantity + 1)
        }
    }


    const addToCart = () => {
        dispatch()
    }
    return (
        <div className='productCard'>
            <div className='imgContainer'><img src={require('../images/' + image)} alt='image' /></div>
            <span>{type}</span>
            <span>{brand}</span>
            <span>{model}</span>
            <span>{price}</span>
            <div className='d-block'>
                <button onClick={() => changeQuantity("remove")}>-</button>
                <span className='m-2 p-2'>{quantity}</span>
                <button onClick={() => changeQuantity("add")}>+</button>

            </div>
            <button className=' w-100 m-1 p-1' onClick={() => addToCart()}>Add to Cart</button>
        </div>
    )
}

export default ProductCard