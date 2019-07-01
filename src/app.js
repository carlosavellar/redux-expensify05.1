
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from "./actions/expense";
import getvisibleExpenses from "./selectors/expense";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
const store = configureStore();
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
// import "./firebase/firebase";

store.dispatch(addExpense({ description: "Water bill", amount: 4, note: "Water integraion", createdAt: 3000 }));
store.dispatch(addExpense({ description: "Pìxe bill", amount: 5, note: "Kraken bill", createdAt: 1200 }));
store.dispatch(addExpense({ description: "Coppolla bill", amount: 2, note: "Slater", createdAt: 20 }));

const state = store.getState();
const visibleExpenses = getvisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
// store.dispatch(setTextFilter("angular"));