import moment from "moment";
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createAtMoment = moment(expense.createdAt);
        const startDateMath = startDate ? startDate.isSameOrBefore(createAtMoment) : true;
        const endDateMath = endDate ? endDate.isSameOrAfter(createAtMoment) : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMath && endDateMath && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt > b.createdAt ? -1 : 1;
        } else if (sortBy === "amount") {
            return a.amount > b.amount ? -1 : 1;
        }
    });
};