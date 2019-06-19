import React from 'react';
import { connect } from 'react-redux'
import { removeExpense } from "../actions/expense";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt, note }) => (
    <div>
        <h4>{description}</h4>
        <span>{amount}</span>
        <span>{note} - </span>
        <span>{createdAt} - </span>
        <button onClick={() => {
            dispatch(removeExpense({ id }))
        }}>
            Remove
        </button>
    </div>
);

export default connect()(ExpenseListItem);
