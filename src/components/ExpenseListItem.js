import { connect } from 'react-redux'
import React from 'react'
import moment from "moment";
import {
    Link
} from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, note, createdAt }) => (
    <div>
        <h3>
            <Link to={`/edit/${id}`}>{description}</Link>
        </h3>
        <span>{amount} </span>
        <span>{note} </span>
        {/* <span>{moment(createdAt).format("MMM MMMM")}</span> */}
        <span>{moment(createdAt).format("dddd, MMMM Do YYYY")}</span>

    </div>
);

export default connect()(ExpenseListItem);