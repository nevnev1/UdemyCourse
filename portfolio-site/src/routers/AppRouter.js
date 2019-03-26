import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Portfolio from '../components/Portfolio';
import PortfolioDetails from '../components/PortfolioDetails';
import Contact from '../components/Contact';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={Portfolio} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioDetails} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
