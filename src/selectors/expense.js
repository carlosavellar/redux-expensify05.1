export default (expenses, { text, sortBy, startDate, endDate }) => {
    // !(typeof text === "string") ? console.log("Nao é string") : console.log("É string");
    return expenses.filter((expense) => {
        const startDateMath = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMath = typeof endDate !== "number" || expense.createdAt >= endDate;
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