function ExpenseFilter(props) {
  const onYearChangeHandler = (event) => {
    props.onSelectedYear(event.target.value);
  };

  return (
    <div className="flex justify-between items-center w-full p-4">
      <h2 className=" text-white font-bold">Filter By Year</h2>
      <select
        value={props.selected}
        className="px-6 py-2 focus:outline-none rounded-md  font-bold"
        onChange={onYearChangeHandler}
      >
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
