import React from 'react';

const Tshirt = ({tShirt, handleCart}) => {
    const {_id, picture, price, name} = tShirt
    return (
        <div className='border-2 border-slate-200 rounded'>
            <img className='h-40 w-36' src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=> handleCart(tShirt)} className='bg-blue-500 p-1 rounded border-2 border-slate-200'>Buy Now</button>
        </div>
    );
};

export default Tshirt;