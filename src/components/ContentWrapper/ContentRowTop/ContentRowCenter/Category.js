import React from 'react';


function Category(category) {

    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        <h4>{category.name}</h4>
                        <p>Productos en {category.name}: {category.products}</p>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Category;