import React from "react";
import Task from "./Task";
import { useDrop } from "react-dnd";
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
          ? "w-full xl:w-1/3 bg-slate-400/[0.85] p-2 rounded-lg mb-4 xl:mb-0"
          : "w-full xl:w-1/3 bg-slate-600 p-2 rounded-lg mb-4 xl:mb-0"
      }
      ref={drop}
    >
      <div className="py-2">
        <h5 className="text-lg font-bold select-none">In Progress</h5>
      </div>
      {inProgressTasks.map((task) => {
        return <Task key={task.id} task={task}></Task>;
      })}
    </div>
  );
}

export default InProgress;
