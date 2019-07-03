import { connect } from 'react-redux'
import React from 'react'

import {
    Link
} from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, note, createdAt }) => (
    <div>
        <h3>
            <Link to={`/edit/${id}`}>{description}</Link>
        </h3>
        <span>{amount}</span>
        <span>{note}</span>
        <span>{createdAt}</span>

    </div>
);

export default connect()(ExpenseListItem);