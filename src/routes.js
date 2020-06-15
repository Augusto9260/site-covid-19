import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Detail from './components/detail/detail';

export default function Routes() {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Detail} />
            </Switch>
        </BrowserRouter>
    );
}