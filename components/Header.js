import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const cartCount = useSelector((state) =>
        state.cart.reduce((total, item) => total + item.quantity, 0)
    );

    return (
        <header>
            <h1>Houseplant Store</h1>
            <nav>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart ({cartCount})</Link>
            </nav>
        </header>
    );
}

export default Header;
