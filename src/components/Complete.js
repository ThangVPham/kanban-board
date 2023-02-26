import React from "react";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
const add = <FontAwesomeIcon icon={faPlusCircle} />;
function Complete({ Tasks, setList }) {
  const completeTasks = Tasks.filter((task) => task.status === "Complete");

  const moveTask = (id) => {
    const taskItem = Tasks.filter((task) => task.id === id);
    if (taskItem[0].status === "Complete") {
      return;
    } else {
      taskItem[0].status = "Complete";
    }
    let newData = Tasks.filter((task) => task.id !== id);
    newData = [...newData, taskItem[0]];
    setList(newData);
  };
  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: "task",
      drop: (task) => moveTask(task.id),
      collect: (monitor) => {
        return {
          isOver: !!monitor.isOver(),
        };
      },
    };
  });

  return (
    <div
      className={
        isOver
          ? "w-full xl:w-1/3 bg-slate-400/[0.85] p-2 rounded-lg mb-4 xl:mb-0 h-full"
          : "w-full xl:w-1/3 bg-slate-600 p-2 rounded-lg mb-4 xl:mb-0 h-full"
      }
      ref={drop}
    >
      <div className="h-1/12 mb-5 flex items-center">
        <h5 className="text-lg font-bold select-none">Complete</h5>
        <span className="ml-2 rounded-full h-6 w-6 text-center bg-green-200 font-bold text-black select-none">
          {completeTasks.length}
        </span>
      </div>
      <div className="flex flex-col justify-between h-11/12">
        <div>
          {completeTasks.map((task) => {
            return <Task key={task.id} task={task}></Task>;
          })}
        </div>

        <div className="text-center hover:cursor-pointer border-t  border-slate-400">
          {add}
        </div>
      </div>
    </div>
  );
}

export default Complete;
