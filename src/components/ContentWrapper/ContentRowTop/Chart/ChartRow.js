import React from 'react';


function ChartRow(product) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.category.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}



export default ChartRow;