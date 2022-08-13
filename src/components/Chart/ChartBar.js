import React from "react";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black/5 h-20 w-2 sm:w-3 lg:h-28 border relative border-black rounded-lg transition-all">
        <div
          className="bg-violet-400 w-full absolute bottom-0 rounded-md transition-all duration-500"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="text-xs font-mono sm:text-sm sm:font-bold md:text-base mt-2 rotate-90 sm:rotate-0 transition-all">
        {props.label}
      </div>
    </div>
  );
};

export default ChartBar;
