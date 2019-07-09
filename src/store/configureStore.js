import React from "react";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expenseReducers from "../reducers/expense";
import filterReducers from "../reducers/filter";
import thunk from "redux-thunk";

export default () => {

    const componetEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
        expenses: expenseReducers,
        filters: filterReducers,
    }),
        componetEnhancer(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
