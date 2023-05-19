import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>My Home Page</h1>
            <p>
                <Link to="/products">Go to Product page</Link>
            </p>
            <p>
                <button onClick={() => navigate('/products')}>click</button>
            </p>
        </>
    )
}

export default Home