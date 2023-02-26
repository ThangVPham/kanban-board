import React from "react";
import TaskList from "./TaskList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const iconSearch = <FontAwesomeIcon icon={faSearch} size={"sm"} />;
function MainBoard() {
  return (
    <div className="text-start py-5 px-5">
      <h3 className="text-2xl">Dashboard</h3>
      <div className="pt-3 flex justify-between md:justify-start pr-2">
        <div className="flex w-full md:w-1/4 pr-2">
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            className="bg-slate-600 h-8 rounded-l-2xl outline-none px-3 w-full"
            placeholder="Search..."
          />
          <div className="bg-slate-600 w-6 rounded-r-2xl flex items-center ">
            {iconSearch}
          </div>
        </div>

        <select
          name="type"
          id="type"
          className="bg-slate-600 w-16 md:w-24 rounded-2xl text-center focus:outline-none text-sm"
        >
          <option value="label">Label</option>
          <option value="label">Color</option>
          <option value="label">Task</option>
        </select>
      </div>

      <TaskList></TaskList>
    </div>
  );
}

export default MainBoard;
