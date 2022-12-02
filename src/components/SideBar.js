import React from 'react';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import CategoriesInDb from './ContentWrapper/ContentRowTop/ContentRowCenter/CategoriesInDb';
import LastMovieInDb from '../components/ContentWrapper/ContentRowTop/ContentRowCenter/LastMovieInDb';
import ContentRowMovies from '../components/ContentWrapper/ContentRowTop/ContentRowMovies/ContentRowMovies';
import NotFound from './NotFound';
import { Link, Route, Switch } from 'react-router-dom';
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
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;