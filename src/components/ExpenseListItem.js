import React from 'react'
import { removeExpense } from "../actions/expense";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from "moment";
const ExpenseListItem = ({ description, amount, note, id, createdAt }) => (
    <li>
        <Link to={`/edit/${id}`}><span><strong>{description}: </strong></span></Link>
        <span> R{numeral(amount).format("$0,0.00")}</span><span>  |  </span>
        <span>{moment(createdAt).format("MMMM Do, YYYY")}</span><span>  |  </span>
        <span>{note}</span><span>  |  </span>
        <span>{id}</span><span>  |  </span>
    </li>
);

export default connect()(ExpenseListItem);