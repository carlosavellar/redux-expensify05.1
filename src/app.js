
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import { addExpense } from "./actions/expense";
import getVisibleExpenses from "../src/selectors/expense";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleState = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleState, "disso tudo");
});

store.dispatch(addExpense({ description: "Armagedon", amount: 4, note: "Water integraion", createdAt: 3000 }));
store.dispatch(addExpense({ description: "Sky", amount: 5, note: "Kraken bill", createdAt: 1200 }));
store.dispatch(addExpense({ description: "Blue", amount: 2, note: "Slater", createdAt: 20 }));

const jsx = <Provider store={store}>
    <AppRouter />
</Provider>;

ReactDOM.render(jsx, document.getElementById('app'));
// store.dispatch(setTextFilter("angular"));