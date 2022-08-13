import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const closeFromHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="shadow-lg bg-purple-300 text-black rounded-2xl p-4 w-full mx-auto my-4 text-center">
      {!showForm && (
        <button
          className="text-white bg-purple-700 p-2 border rounded-lg hover:bg-purple-900 transition duration-200"
          onClick={showFormHandler}
        >
          Add New Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDateHandler}
          onClose={closeFromHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
