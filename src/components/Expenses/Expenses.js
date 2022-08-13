import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseLists";

function Expanses(props) {
  const [pickedYear, setPickedYear] = useState("2022");
  // const filterExpenseItem = (selectedYear) => {
  //   const divExpense = document.createElement("div");
  //   for (let i = 0; i < props.length.items.length; i++) {
  //     if (props.item[i].date.getFullYear() === selectedYear) {
  //       divExpense.append(`<ExpenseItem  title={props.items[0].title}
  //         amount={props.items[0].amount}
  //         date={props.items[0].date}  />`);
  //     }
  //     return divExpense;
  //   }
  // };
  const onSelectedYearHandler = (selectedYear) => {
    setPickedYear(selectedYear);
  };

  const filterChangeHandler = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  return (
    <Card className="flex flex-col justify-center items-center w-full  gap-y-4 px-2 py-4 mb-5 bg-black/50 rounded-xl">
      <ExpenseFilter
        selected={pickedYear}
        onSelectedYear={onSelectedYearHandler}
      />
      <ExpenseChart expense={filterChangeHandler} />
      <ExpenseList onFilterChange={filterChangeHandler} />
    </Card>
  );
}

export default Expanses;
