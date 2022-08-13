import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.onFilterChange.length === 0) {
    return <h2 className="text-white font-bold text-xl">No Expenses Found.</h2>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full gap-y-4 ">
      {props.onFilterChange.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
