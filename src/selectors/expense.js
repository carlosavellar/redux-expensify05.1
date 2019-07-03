const moment = require('moment');
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdDate = moment(expense.createdAt);
        console.log(createdDate._d, createdDate.isSameOrAfter(startDate, "day"));
        const startDateMatch = startDate ? createdDate.isSameOrAfter(startDate, "day") : moment();
        const endDateMatch = endDate ? createdDate.isSameOrBefore(endDate) : moment();
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        // const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? -1 : +1;
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? -1 : +1;
        }
    }).reverse();
}