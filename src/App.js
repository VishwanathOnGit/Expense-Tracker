import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
	const dummyExpenses = [
		{
			id: "e1",
			title: "Car Insurance",
			price: 299,
			date: new Date(2021, 11, 12),
		},
		{
			id: "e2",
			title: "Health Insurance",
			price: 1299,
			date: new Date(2021, 11, 14),
		},
		{
			id: "e3",
			title: "Bike Insurance",
			price: 99,
			date: new Date(2021, 11, 14),
		},
	];

	const [expenses, setExpenses] = useState(dummyExpenses);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
