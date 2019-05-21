import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import configureStore from "./store/configureStore";
import selectedExpenses from "./selectors/expenses";
import "./styles/styles.scss"
const store = configureStore();

store.dispatch(addExpense({ description: "Sucesso React", amount: 13245, note: "The best", createdAt: 918811 }))
store.dispatch(addExpense({ description: "Lib Jsx", amount: 345, note: "Obetructivet", createdAt: 2300 }))
store.dispatch(addExpense({ description: "GRaphQl", amount: 13245, note: "Template", createdAt: 918811 }))

const state = store.getState();

const visibleStates = selectedExpenses(state.expenses, state.filters);

console.log(visibleStates)

const jsx = <Provider store={store}>

    <AppRouter />
</Provider>



ReactDOM.render(jsx, document.getElementById('app'));
