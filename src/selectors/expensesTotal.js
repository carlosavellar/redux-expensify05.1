import React from "react";

export default (expenses) => {

    if (expenses.length >= 0) {

        return expenses.map((expense) => expense.amount)
            .reduce((sum, val) => { sum + val }, 0);
    }

}