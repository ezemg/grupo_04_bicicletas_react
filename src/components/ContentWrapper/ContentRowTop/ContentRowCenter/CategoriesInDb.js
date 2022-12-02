import React from "react";
import Category from "./Category";

import { useState, useEffect } from 'react';

function CategoriesInDb() {

  let [categories, setCategories] = useState({})

  useEffect(() => {
    fetch("http://localhost:3000/api/products/categories")
      .then(res => res.json())
      .then(data => {
        setCategories(data.respuesta.categories)

      })
      .catch(error => console.error(error))
  }, [])



  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categories !== undefined && categories.length > 0 && categories.map((category, i) => {
              return (
                <Category {...category} key={i} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
