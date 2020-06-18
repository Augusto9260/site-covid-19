import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/header';
import State from './components/state';
import DetailCity from './components/detailCity';
import NotFound from './components/notFound/404';

export default function Routes() {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={State} />
                <Route exact path='/municipio/:id' component={DetailCity} />
                <Route exact path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}