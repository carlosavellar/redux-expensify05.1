import React from 'react';
import { removeExpense } from "../actions/expense";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import moment from "moment";
const ExpenseListItem = ({ dispatch, id, description, account, note, createdAt }) => (

    <div>
        <Link to={`edit/${id}`}>
            <h3><span>{description}</span></h3>
        </Link>
        <span>{account} - </span>
        <span>{note} - </span>
        <span>{moment(createdAt).format("DD / MM / YYYY")} - </span>
        <span>{id} - </span>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>
            x
        </button>
    </div >
);

export default connect()(ExpenseListItem);
