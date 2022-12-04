import React from 'react';
import LastProductInDb from './LastProductInDb/LastProductInDb'
import CategoriesInDb from './CategoriesInDb/CategoriesInDb';

function ContentRowCenter() {
    return (
        <div className="row">


            <LastProductInDb />



            <CategoriesInDb />

        </div>
    )
}

export default ContentRowCenter;