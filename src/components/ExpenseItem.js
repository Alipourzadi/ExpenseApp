function ExpenseItem() {
  return (
    <div className="flex items-center gap-4 mx-auto w-3/4 bg-slate-500 text-white p-2 rounded-md">
      <div className="flex flex-col justify-center items-center text-center w-12 px-8 bg-black border border-white rounded-lg ">
        March 28th 2021
      </div>
      <div className="flex w-full justify-between items-center">
        <h2 className="text-base font-bold font-sans">Car Insurance</h2>
        <div className="bg-purple-900 border border-white p-2 rounded-md">
          $294.67
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
