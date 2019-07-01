import { createStore, combineReducers } from "redux";
import uniqid from "uniqid";

const addExpense = ({ description = "", amount = 0, note = "", createdAt = 0 }) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uniqid(),
        description,
        amount,
        note,
        createdAt
    },
});

const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});
const sortByDate = () => ({
    type: "SORT_BY_DATE",
});

const setStartDate = (startDate = 0) => ({
    type: "SET_START_AT",
    startDate
});

const setEndDate = (endDate = 0) => ({
    type: "SET_START_AT",
    endDate
});



const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => {
                return id !== action.id
            });
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
};

const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return { ...state, text: action.text };
        case "SORT_BY_AMOUNT":
            return { ...state, sortBy: "amount" }
        case "SORT_BY_DATE":
            return { ...state, sortBy: "date" }
        case "SET_START_DATE":
            return { ...state, startDate: action.startDate };
        case "SET_END_DATE":
            return { ...state, startDate: action.endDate };
        default: return state;
    }
};

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}));

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.cretedAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.cretedAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch, endDateMatch, textMatch;
    }).sort((a, b) => {
        if (sortBy === "amount") {
            a.amount < b.amount ? +1 : -1
        } else if (sortBy === "date") {
            a.createdAt < b.createdAt ? +1 : -1
        }
    });
};

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: "Clarissa", amount: 1000000, note: "A maior do universo", createdAt: 1000 }));