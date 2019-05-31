import React from 'react'
import { removeExpense } from "../actions/expense";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ dispatch, description, amount, id, note, createdAt }) => (
    <li>
        <Link to={`/edit/${id}`}><span><strong>{description}: </strong></span></Link>
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