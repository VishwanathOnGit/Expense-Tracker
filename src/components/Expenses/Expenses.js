import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [filterDate, setFilterDate] = useState("2021");
	const filterChangeHandler = (selectedYear) => {
		setFilterDate(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filterDate;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filterDate}
				onFilterChange={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
