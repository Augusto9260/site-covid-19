import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './pages/header';
import State from './pages/state';
import DetailCity from './pages/detailCity';
import Footer from './pages/footer';
import NotFound from './pages/notFound/404';

export default function Routes() {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={State} />
                <Route exact path='/municipio/:id' component={DetailCity} />
                <Route exact path='*' component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}