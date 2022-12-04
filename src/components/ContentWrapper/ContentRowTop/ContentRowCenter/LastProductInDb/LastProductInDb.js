import React from 'react';

import { useEffect, useState } from 'react'

import Product from './Product';

function LastProductInDb() {

    let [product, setProduct] = useState({
        name: 'Cargando...',
        price: 'Cargando...',
        category: { name: 'Cargando...' },
        image: '',
        description: 'Cargando...'

    })


    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(res => res.json())
            .then(data => {
                setProduct(data.products.pop())
            })
            .catch(error => console.error(error))
    }, [])

    return (

        <Product {...product} />

    )
}

export default LastProductInDb;
