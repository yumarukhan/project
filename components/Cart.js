import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart } from '../features/cartSlice';

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.thumbnail} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => dispatch(increment(item))}>+</button>
                    <button onClick={() => dispatch(decrement(item))}>-</button>
                    <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                </div>
            ))}
            <h3>Total: ${totalCost}</h3>
            <button>Checkout (Coming Soon)</button>
        </div>
    );
}

export default Cart;
