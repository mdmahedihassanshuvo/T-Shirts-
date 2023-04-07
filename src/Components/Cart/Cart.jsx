import React from 'react';

const Cart = ({cart, removedFromCart}) => {
    return (
        <div>
            {
                cart.map(item => <p key={item._id}> {item.name} <button onClick={() => removedFromCart(item._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;