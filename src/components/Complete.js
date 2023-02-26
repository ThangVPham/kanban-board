import React from "react";
import Task from "./Task";
import { useDrop } from "react-dnd";
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
          ? "w-full xl:w-1/3 bg-slate-400/[0.85] p-2 rounded-lg mb-4 xl:mb-0"
          : "w-full xl:w-1/3 bg-slate-600 p-2 rounded-lg mb-4 xl:mb-0"
      }
      ref={drop}
    >
      <div className="py-2">
        <h5 className="text-lg font-bold select-none">Complete</h5>
      </div>
      {completeTasks.map((task) => {
        return <Task key={task.id} task={task}></Task>;
      })}
    </div>
  );
}

export default Complete;
