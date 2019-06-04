import React from 'react'

const expenseTotal = (expenses) => {
    let total = 0;

    expenses.map((expense) => {
        return total += expense.amount;
    });
    return total;
};

export default expenseTotal;