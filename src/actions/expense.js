
import uniqid from "uniqid";

export const addExpense = ({ description = "", amount = 0, note = "", createdAt = undefined }) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uniqid(),
        description,
        amount,
        note,
        createdAt
    }
});

export const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
});

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    updates,
    id
});