import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="flex items-center gap-5 md:gap-4 mx-auto w-full bg-white/10 text-white p-2">
      <ExpenseDate date={props.date} />
      <div className="flex w-full justify-between items-center text-center">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl md:font-bold font-semibold font-sans transition-all duration-500">
          {props.title}
        </h2>
        <div className="bg-purple-900/40 border border-white m-1 px-2 text-sm sm:text-base md:text-lg lg:text-xl sm:px-3 md:px-5 py-[0.2rem] rounded-md transition-all">
          ${props.amount}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
