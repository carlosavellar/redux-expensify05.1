import uniqid from "uniqid";
import database from "../firebase/firebase";

export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = " ",
            amount = 0,
            note = "",
            createdAt = 0
        } = expenseData;
        const expense = { description, amount, note, createdAt };
        database.ref("expenses").push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});