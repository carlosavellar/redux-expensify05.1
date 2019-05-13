import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

const DashboardPage = () => (
    <div>
        <h1>Dashboard</h1>
    </div>
);

const AddExpensePage = () => (
    <div>
        <h1>AddExpense</h1>
    </div>
);

const EditExpensePage = (props) => {
    return (
        <div>
            <h1>EditExpense</h1>
            <p>{props.match.params.id}</p>
        </div>
    );
}

const HelpPagePage = () => (
    <div>
        <h1>Help</h1>
    </div>
);

const NotFound = () => (
    <div>
        <h1>#404</h1>
        <p>Test</p>
    </div>
);

const Header = () => (
    <div>
        <NavLink to="/">Home  </NavLink>
        <NavLink to="/edit">Edit  </NavLink>
        <NavLink to="/add">Add  </NavLink>
        <NavLink to="/help">help  </NavLink>
    </div>
);
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/add" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPagePage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

const app = document.querySelector("#app");
ReactDOM.render(<AppRouter />, app);