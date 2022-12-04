import React from 'react';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import CategoriesInDb from './ContentWrapper/ContentRowTop/ContentRowCenter/CategoriesInDb/CategoriesInDb';
import LastProductInDb from './ContentWrapper/ContentRowTop/ContentRowCenter/LastProductInDb/LastProductInDb';
import ContentRowProducts from './ContentWrapper/ContentRowTop/ContentRowProducts/ContentRowProducts';
import NotFound from './NotFound';
import { Route, Switch } from 'react-router-dom';
import BarraLateral from './BarraLateral';

function SideBar() {
    return (
        <React.Fragment>

            <BarraLateral />

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/CategoriesInDb">
                    <CategoriesInDb />
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/ContentRowProducts">
                    <ContentRowProducts />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;