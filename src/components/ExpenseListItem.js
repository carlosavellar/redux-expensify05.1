import React from 'react'
import { removeExpense } from "../actions/expense";
import { connect } from "react-redux";
const ExpenseListItem = ({ dispatch, description, amount, id, note, createdAt }) => (
    <li>

        <span><strong>{description}: </strong></span>
        <span>R$ {amount}</span><span>  |  </span>
        <span>{createdAt}</span><span>  |  </span>
        <span>{id}</span><span>  |  </span>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>
            del
        </button>
    </li>
);

export default connect()(ExpenseListItem);