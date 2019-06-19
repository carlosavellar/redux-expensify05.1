import React from 'react';
import { connect } from 'react-redux'
import { removeExpense } from "../actions/expense";
import {
    Link
} from 'react-router-dom'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt, note }) => (
    <div>
        <h4><Link to={`edit/${id}`}>{description}</Link></h4>
        <span>{amount}</span>
        <span>{note} - </span>
        <span>{createdAt} - </span>

    </div>
);

export default connect()(ExpenseListItem);
