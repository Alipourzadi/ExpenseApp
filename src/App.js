import Expanses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

let DUMMY_EXPENCES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: "94.12",
    date: new Date(2020, 8, 13),
  },
  {
    id: "e2",
    title: "New TV",
    amount: "799.49",
    date: new Date(2021, 3, 11),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2021, 3, 27),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: "450",
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENCES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen  w-11/12 lg:w-9/12 mx-auto">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expanses items={expenses} />
    </div>
  );
}

export default App;
