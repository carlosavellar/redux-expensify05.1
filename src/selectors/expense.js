import moment from "moment";

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMomment = moment(expense.createdAt);
        const startDateMath = startDate ? startDate.isSameOrBefore(createdAtMomment, "day") : true;
        const endDateMath = endDate ? endDate.isSameOrAfter(createdAtMomment, "day") : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMath && endDateMath && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? -1 : 1;
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? -1 : 1;
        }
    });
};