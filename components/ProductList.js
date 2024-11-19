import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

function ProductList() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.thumbnail} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
