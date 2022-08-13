import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1">
        <div className="flex flex-col ">
          <label className="font-semibold">Title</label>
          <input
            className="p-1 rounded-md"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="flex flex-col ">
          <label className="font-semibold">Amount</label>
          <input
            className="p-1 rounded-md"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="flex flex-col ">
          <label className="font-semibold">Date</label>
          <input
            className="p-1 rounded-md"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="flex gap-2 mt-3 sm:mt-0 justify-center sm:justify-end">
        <button
          className="text-white bg-purple-700 p-2 border rounded-lg hover:bg-purple-900 transition duration-200"
          onClick={props.onClose}
          type="button"
        >
          Cancel
        </button>
        <button
          className="text-white bg-purple-700 p-2 border rounded-lg hover:bg-purple-900 transition duration-200"
          type="submit"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;

// 1. add a button that when we click it it renders the actual form content and remove the last content
// 2. the actual form content has 3 input and 2 button which one of them is <ADD EXPENSE> and the other one is <CANCEL>
// 3. if we press these button the form content will be dispear and the <ADD NEW EXPENCE WILL SHOW>
