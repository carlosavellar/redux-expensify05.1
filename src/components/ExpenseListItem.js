import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, note, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h2>{description}</h2>
        </Link>
        <div>{note}</div>
        <div>{createdAt}</div>
    </div>
);

export default ExpenseListItem;