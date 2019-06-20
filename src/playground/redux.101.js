import { createStore, combineReducers } from "redux";
import uniqid from "uniqid";
//ADD_EXPENSE

const addExpense = ({ description = "", amount = 0, note = "", createdAt = 0 }) => ({
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
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE",
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
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
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.updates }
                } else {
                    return expense;
                }
            });
        default: return state;
    }
}

const filtersReducerDefaultState = {
    text: "",
    sortyBy: "date",
    startDate: undefined,
    endDate: undefined,
};

const filterReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return { ...state, text: action.text };
        case "SORT_BY_AMOUNT":
            return { ...state, sortBy: "amount" };
        case "SORT_BY_DATE":
            return { ...state, sortBy: "date" };
        case "SET_START_DATE":
            return { ...state, startDate: action.startDate }
        case "SET_END_DATE":
            return { ...state, endDate: action.endDate }
        default: return state;
    }
};

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}));

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMath = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMath = typeof endDate !== "number" || expense.createdAt >= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMath && endDateMath && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? -1 : 1;
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? -1 : 1;
        }
    });
};

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: "React Native", amount: 12200, node: "Amazonfg", createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Angular 8", amount: 200, node: "Eficient", createdAt: 2000 }));
const expenseTree = store.dispatch(addExpense({ description: "Water bill", amount: 500, node: "Classic", createdAt: 430 }));

store.dispatch(editExpense(expenseOne.expense.id, { description: "GraphQl" }));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(setTextFilter("angular"));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());