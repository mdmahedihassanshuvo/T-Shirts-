import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const t_shirts = useLoaderData()
    return (
        <div>
            <h2>tshirt {t_shirts.length}</h2>
        </div>
    );
};

export default Home;