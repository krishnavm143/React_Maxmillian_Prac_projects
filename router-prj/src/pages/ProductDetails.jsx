import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { productId } = useParams()

    return (
        <>
            <h1>ProductDetails</h1>
            <p>{productId}</p>
            <p><Link to={`..`} relative='path'>Back</Link></p>
        </>
    )
}

export default ProductDetails