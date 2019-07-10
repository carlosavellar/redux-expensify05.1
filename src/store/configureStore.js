import expenseReducer from "../reducers/expense";
import filterReducer from "../reducers/filter";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
export default () => {
    const componentEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
        }),
        componentEnhancer(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

