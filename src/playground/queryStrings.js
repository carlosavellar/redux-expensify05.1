console.log("query params");
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Child = ({ match }) => {
    console.log(match);
    return (
        <div>ID: {match.params.id}</div>
    )
};

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="Amazon">Amazon</Link></li>
                    <li><Link to="Bolsonaro">Bolsonaro</Link></li>
                    <li><Link to="Zeeland">Zeeland</Link></li>
                    <li><Link to="MaterPeace">Master Peace</Link></li>
                    <li><Link to="Depression">Depressão</Link></li>
                </ul>
                <Route path="/:id" component={Child} />
            </Router>
        )
    }
};

const app = document.querySelector("#app");
ReactDOM.render(<AppRouter />, app);