import { connect } from 'react-redux'
import React from 'react'
import { removeExpense } from "../actions/expense";

const ExpenseListItem = ({ dispatch, id, description, amount, note, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <span>{amount}</span>
        <span>{note}</span>
        <span>{createdAt}</span>
        <button onClick={() => {
            dispatch(removeExpense({ id }))
        }
        }>
            X
    </button>
    </div>

);

export default connect()(ExpenseListItem);