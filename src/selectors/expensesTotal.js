import React from 'react'

export default (expenses) => {


    // expenses.map((expense) => {
    //     return total += expense.amount;
    // });

    return expenses.map((expense) => expense.amount)
        .reduce((sum, value) => {
            return sum += value;
        }, 0);

};