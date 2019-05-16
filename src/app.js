import { Provider } from "react-redux";
import { addExpense } from "./actions/expense";
import { setTextFilter } from "./actions/filters";
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/configureStore";
import AppRouter from './routers/AppRouter';
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: "React Native", amount: 550, note: "Amazonfg", createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Angular 8", amount: 200, note: "Eficient", createdAt: 2000 }));
const expenseTree = store.dispatch(addExpense({ description: "Water bill", amount: 12200, note: "Classic", createdAt: 430 }));


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const jsx = <Provider store={store}>
    <AppRouter />
</Provider>;

ReactDOM.render(jsx, document.getElementById('app'));
// store.dispatch(setTextFilter("angular"));