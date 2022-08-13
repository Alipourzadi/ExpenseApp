function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="flex flex-col justify-center items-center text-center w-11 sm:w-20 md:w-28 px-8 py-2 bg-black/40 border border-white rounded-xl ">
      <div className="text-xs sm:text-sm  font-semibold">{month}</div>
      <div className="text-xs sm:text-sm">{year}</div>
      <div className="text-base sm:text-4xl font-bold transition-all duration-300">
        {day}
      </div>
    </div>
  );
}

export default ExpenseDate;
