import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';
import Autores from '../../pages/Autores';
import Livros from '../../pages/Livros';
import NotFound from '../../pages/NotFound';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/livros" component={Livros} />
                <Route path="/autores" component={Autores} />
                <Route path="/sobre" component={Sobre} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}