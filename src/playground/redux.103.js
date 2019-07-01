
import uniqid from "uniqid";
import { createStore, combineReducers } from "redux";

const addExpense = ({ description = "", amount = 0, note = "", createdAt = undefined }) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uniqid(),
        description,
        amount,
        note,
        createdAt
    }
});

const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
});

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    updates,
    id
});

const setTextFilter = ({ text = "" } = {}) => ({
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
    type: "SET_START_DATE",
    startDate
});

const setEndDate = (endDate = 0) => ({
    type: "SET_END_DATE",
    endDate
});

const expenseReducerDefaultState = [];

const expenseReducers = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return state.concat(action.expense);
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
const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filterReducers = (state = filterReducerDefaultState, action) => {
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
}

const store = createStore(combineReducers({
    expenses: expenseReducers,
    filters: filterReducers,
}));

const getVisibleState = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? -1 : +1;
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? -1 : +1;
        }
    }).reverse();
}

store.subscribe(() => {
    const state = store.getState();
    const visibleState = getVisibleState(state.expenses, state.filters);
    console.log(visibleState);
});

const expenseOne = store.dispatch(addExpense({ description: "Love Bill", amount: 322, note: "ASccount of love", createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: "Superação Bill", amount: 1122, note: "ASccount of love", createdAt: -1000 }));
const expenseTree = store.dispatch(addExpense({ description: "Bitz Bill", amount: 6022, note: "ASccount of love", createdAt: 100 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { description: "Victory" }));
// store.dispatch(setTextFilter({ text: "bitZ" }));

store.dispatch(setEndDate(900));

// store.dispatch(sortByAmount());