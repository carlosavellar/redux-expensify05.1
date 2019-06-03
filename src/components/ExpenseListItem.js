import React from 'react'
import { removeExpense } from "../actions/expense";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ description, amount, note, id, createdAt }) => (
    <li>
        <Link to={`/edit/${id}`}><span><strong>{description}: </strong></span></Link>
        <span>R$ {amount}</span><span>  |  </span>
        <span>{createdAt}</span><span>  |  </span>
        <span>{note}</span><span>  |  </span>
        <span>{id}</span><span>  |  </span>

    </li>
);

export default connect()(ExpenseListItem);