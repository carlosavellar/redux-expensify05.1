import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from "./actions/expense";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import getVisibleExpenses from "./selectors/expense";

const store = configureStore();

store.dispatch(addExpense({ description: "React Native", amount: 12200, note: "Amazonfg", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Angular 8", amount: 200, note: "Eficient", createdAt: 2000 }));
store.dispatch(addExpense({ description: "Water bill", amount: 500, note: "Classic", createdAt: 430 }));

store.subscribe(() => {
    const state = store.getState();
    const visibleState = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleState);
});

const jsx = (<Provider store={store}>
    <AppRouter />
</Provider>);

ReactDOM.render(jsx, document.querySelector("#app"));
// store.dispatch(setTextFilter("angular"));