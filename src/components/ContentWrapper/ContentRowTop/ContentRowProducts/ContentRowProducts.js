import React from 'react';
import SmallCard from './SmallCard';

import { useState, useEffect } from 'react';


function ContentRowProducts() {

    let [products, setProducts] = useState({})
    let [categories, setCategories] = useState({})
    let [users, setUsers] = useState({})

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/api/products/categories")
            .then(res => res.json())
            .then(data => {
                setCategories(data.categories)
            })
            .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/api/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
            .catch(error => console.error(error))
    }, [])


    let productsInDB = {
        title: 'Productos en Base de Datos',
        color: 'primary',
        cuantity: products.count,
        icon: 'fa-box'
    }

    let totalCategories = {
        title: ' Total de Categorias',
        color: 'success',
        cuantity: categories.length,
        icon: 'fa-list'
    }

    let usersQuantity = {
        title: 'Total de Usuarios',
        color: 'warning',
        cuantity: users.count,
        icon: 'fa-user-check'
    }

    let cartProps = [productsInDB, totalCategories, usersQuantity];

    return (

        <div className="row">

            {cartProps.map((item, i) => {

                return <SmallCard {...item} key={i} />

            })}

        </div>
    )
}

export default ContentRowProducts;