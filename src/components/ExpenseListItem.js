import { connect } from "react-redux";
import { removeExpense } from "../actions/expense";
import React from "react";

const ExpenseListItem = ({ dispatch, id, description, note, createdAt }) => (
    <div>
        <h2>{description}</h2>
        <div>{note}</div>
        <div>{createdAt}</div>
        <button
            onClick={(e) => {
                e.preventDefault();
                dispatch(removeExpense({ id }));
            }
            }>
            remove
        </button>
    </div >
);

export default connect()(ExpenseListItem);