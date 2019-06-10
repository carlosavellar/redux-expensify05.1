
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
const store = configureStore();
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

store.dispatch(addExpense({ description: "Water bill", amount: 4, note: "Water integraion", createdAt: 3000 }));
store.dispatch(addExpense({ description: "Pìxe bill", amount: 5, note: "Kraken bill", createdAt: 1200 }));
store.dispatch(addExpense({ description: "Coppolla bill", amount: 2, note: "Slater", createdAt: 20 }));

const state = store.getState();

console.log(state);



ReactDOM.render(jsx, document.getElementById('app'));
// store.dispatch(setTextFilter("angular"));