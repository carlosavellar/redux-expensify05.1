import React from "react";
import { createStore, combineReducers } from "redux";
import expenseReducers from "../reducers/expense";
import filterReducers from "../reducers/filter";

export default () => {
    const store = createStore(combineReducers({
        expenses: expenseReducers,
        filters: filterReducers,
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
