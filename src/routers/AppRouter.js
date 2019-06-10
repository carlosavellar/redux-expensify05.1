import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import AddExpensePage from "../components/AddExpensePage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/help" component={HelpPage} exact={true} />
                <Route path="/404" component={NotFoundPage} exact={true} />
                <Route path="/add" component={AddExpensePage} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

