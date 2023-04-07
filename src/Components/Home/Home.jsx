import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const t_shirts = useLoaderData()

    const [cart, setCart] = useState([])


    const handleCart = (tShirt) => {
        const exist = cart.find(item => item._id === tShirt._id)
        if (exist) {
            toast('Allready available this product')
        }
        else {
            const newCart = [...cart, tShirt]
            setCart(newCart)
        }

    }

    const removedFromCart = (id) => {
        const remainingCart = cart.filter(item => item._id !== id)
        setCart(remainingCart)
    }
    return (
        <div className='grid grid-cols-4 gap-5 mx-20 mt-14'>
            <div className='col-span-3 grid grid-cols-3 gap-4'>
                {
                    t_shirts.map(tShirt => <Tshirt key={tShirt._id} tShirt={tShirt} handleCart={handleCart}></Tshirt>)
                }
            </div>
            <div>
                <Cart cart={cart} removedFromCart={removedFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;