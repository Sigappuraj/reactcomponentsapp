import React, { Fragment, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import InputField from "./Components/InputField";

const App = () => {
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState(
    window.localStorage.getItem("tasklist")
      ? JSON.parse(window.localStorage.getItem("tasklist"))
      : [
          { task: "wash the car", isComplete: false, priority: "low" },
          { task: "gardening", isComplete: true, priority: "high" },
          { task: "buy fruits", isComplete: false, priority: "medium" },
        ]
  );

  const inputRef = useRef();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((Response) => Response.json())
      .then((json) => setTodos(json));
  }, []);

  console.log(todos)

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("tasklist", JSON.stringify(tasks));
  }, [tasks]);

  const inputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const taskObject = {
      task: newTask,
      isComplete: false,
      priority: "low",
    };
    setTasks(tasks.concat(taskObject));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, taskIndex) => {
        if (taskIndex === index) {
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        }
        return task;
      })
    );
  };

  return (
    <Fragment>
      <h1>ToDo List</h1>
      <InputField
        inputRef={inputRef}
        type="text"
        newTask={newTask}
        inputChange={inputChange}
        addTask={addTask}
      />

      <ul>
        {tasks.map((taskObject, index) => {
          const clickedTask = () => {
            toggleTask(index);
          };

          return (
            <li onClick={clickedTask} key={index}>
              {taskObject.task} {taskObject.isComplete ? "✔️" : "⏱"}{" "}
              {taskObject.priority}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector("#app-root"));
