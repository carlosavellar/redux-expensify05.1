
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

store.subscribe(() => {
    const state = store.getState();
    const visibleState = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleState);
});

const expenseOne = store.dispatch(addExpense({ description: "React Native", amount: 12200, node: "Amazonfg", createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Angular 8", amount: 200, node: "Eficient", createdAt: 2000 }));
const expenseTree = store.dispatch(addExpense({ description: "Water bill", amount: 500, node: "Classic", createdAt: 430 }));



console.log("Deltan");

// store.dispatch(setTextFilter("angular"));