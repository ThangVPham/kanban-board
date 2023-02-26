import React from "react";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
const add = <FontAwesomeIcon icon={faPlusCircle} />;
function InProgress({ Tasks, setList }) {
  const inProgressTasks = Tasks.filter((task) => task.status === "InProgress");

  const moveTask = (id) => {
    const taskItem = Tasks.filter((task) => task.id === id);
    if (taskItem[0].status === "InProgress") {
      return;
    } else {
      taskItem[0].status = "InProgress";
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
      <div className="h-1/12 mb-5 flex">
        <h5 className="text-lg font-bold select-none">In Progress</h5>
        <span className="ml-2 rounded-full h-6 w-6 text-center bg-amber-200 font-bold text-black select-none">
          {inProgressTasks.length}
        </span>
      </div>
      <div className="flex flex-col justify-between h-11/12">
        <div>
          {inProgressTasks.map((task) => {
            return <Task key={task.id} task={task}></Task>;
          })}
        </div>
        <div className="text-center hover:cursor-pointer border-t border-slate-400 ">
          {add}
        </div>
      </div>
    </div>
  );
}

export default InProgress;
