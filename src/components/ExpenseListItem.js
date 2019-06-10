import React from 'react';
import { removeExpense } from "../actions/expense";
import { connect } from "react-redux";
const ExpenseListItem = ({ dispatch, id, description, account, note, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <span>{account} - </span>
        <span>{note} - </span>
        <span>{createdAt} - </span>
        <span>{id} - </span>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>
            x
        </button>
    </div >
);

export default connect()(ExpenseListItem);
