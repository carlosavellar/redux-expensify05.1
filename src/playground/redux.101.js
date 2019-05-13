import { createStore, combineReducers } from "redux";
import uniqid from "uniqid";
//ADD_EXPENSE

const addExpense = ({ description = "", amount = 0, note = "", createdAt = undefined }) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uniqid(),
        description,
        amount,
        note,
        createdAt
    }
})
//REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    updates
});

// SET_TEXT_FILTER
const setTextFilter = ({ text = "" }) => ({
    type: "SET_TEXT_FILTER",
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE",
});
// SORT_BY_AMOUNT
const sortByAmnount = () => ({
    type: "SORT_BY_AMOUNT",
});
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});
// SET_END_DATE 
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});
const expenseReducerDefaultProps = [];

const expenseReducer = (state = expenseReducerDefaultProps, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            console.log(action.id);
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { ...state, ...action.updates }
                } else {
                    return expense;
                }
            });
        default: return state;
    }
}

const filterReducerDefaultProps = {
    text: "",
    sortyBy: "date",
    startDate: undefined,
    endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultProps, action) => {
    switch (action.type) {
        default: return state;
    }
};

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}));

const getVisibleExpenses = (expenses) => {
    return expenses;
};

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: "React Native", amount: 12200, node: "Amazonfg", createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Angular 8", amount: 200, node: "Eficient", createdAt: 2000 }));

store.dispatch(editExpense(expenseTwo.expense.id, { description: "GraphQl" }));
store.dispatch(removeExpense({ id: expenseOne.expense.id }));