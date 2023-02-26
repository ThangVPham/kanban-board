import React from "react";
import { useDrag } from "react-dnd";

function Task({ task }) {
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: "task",
      item: { id: task.id },
      collect: (monitor) => {
        return {
          isDragging: !!monitor.isDragging(),
        };
      },
    };
  });

  return (
    <div>
      <div
        key={task.id}
        id={task.id}
        ref={drag}
        className={
          isDragging
            ? ` bg-slate-500 p-2 text-sm rounded-lg mb-2 border-slate-200 border-2}`
            : ` bg-slate-500 border-t-4 ${
                task.status === "Complete"
                  ? "border-green-700"
                  : task.status === "InProgress"
                  ? "border-amber-400"
                  : "border-red-600"
              } p-2 text-sm text-slate-200 rounded-lg mb-2`
        }
      >
        <p>{task.content}</p>
        <p className="text-end text-xs">{task.user}</p>
      </div>
    </div>
  );
}

export default Task;
