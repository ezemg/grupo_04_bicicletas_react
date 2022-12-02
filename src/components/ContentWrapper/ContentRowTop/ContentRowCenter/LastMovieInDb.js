import React from 'react';
import imagenFondo from '../../../../assets/images/mandalorian.jpg';
import { useEffect, useState } from 'react'

function LastMovieInDb() {

    let [product, setProduct] = useState({
        name: 'Cargando...',
        price: 'Cargando...',
        category: { name: 'Cargando...' },
        image: '',
        description: 'Cargando...'

    })

    console.log(product)

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then(res => res.json())
            .then(data => {
                setProduct(data.respuesta.products.pop())
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto en la Base de Datos</h5>
                </div>
                <div className="card-body">
                    <h2>{product.name}</h2>
                    <h3>$ {product.price}</h3>
                    <h5>Categoría: {product.category.name}</h5>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem', height: 20 + 'rem' }} src={`/productos/${product.image}`} alt=" Imagen Producto " />
                    </div>
                    <p>{product.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
