import React, { useState } from "react";
import Task from "./Task";
import Todo from "./Todo";
import InProgress from "./InProgress";
import Complete from "./Complete";
import { Tasks } from "../tasks";
function TaskList() {
  const [tasksList, setTaskList] = useState(Tasks);

  return (
    <div className="pt-10">
      <div className="block xl:flex justify-evenly xl:gap-5">
        <Todo Tasks={tasksList} setList={setTaskList} />
        <InProgress Tasks={tasksList} setList={setTaskList} />
        <Complete Tasks={tasksList} setList={setTaskList} />
      </div>
    </div>
  );
}

export default TaskList;
