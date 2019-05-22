import React from 'react';
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
import expense from '../reducers/expense';
const trace = (<div>  - </div>);
const ExportListItem = ({ dispatch, id, description, amount, note, createdAt }) => (
    <div className="listExpense">
        <div><strong>{description} |</strong></div>
        <div>{amount}</div>
        {trace}
        <div>{note}</div>
        {trace}
        <div>{id}</div>
        <div>{createdAt}</div>
        <button
            onClick={() => {
                dispatch(removeExpense({ id }))
            }
            }
        >remove</button>
    </div >
);

export default connect()(ExportListItem);