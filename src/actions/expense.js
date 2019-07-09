import database from "../firebase/firebase";
import uniqid from "uniqid";

export const addExpense = (expense = {}) => ({
    type: "ADD_EXPENSE",
    expense
});

export const addStarExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = "",
            amount = 0,
            note = "",
            createdAt = 0,
        } = expenseData;
        const expense = { description, amount, note, createdAt };
        database.ref("expenses").push(expense).then((ref) => {
            console.log(ref.key);
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
});

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    updates,
    id
});