import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";

class AppRouter extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={ExpenseDashboardPage} exact={true} />
                        <Route path="/help" component={HelpPage} />
                        <Route path="/add" component={AddExpensePage} />
                        <Route path="/edit/:id" component={EditExpensePage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;

