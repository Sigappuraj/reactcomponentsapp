import React, { Fragment } from "react";

const InputField = (props) => {
  return (
    <Fragment>
      <input
        ref={props.inputRef}
        type="text"
        value={props.newTask}
        onChange={props.inputChange}
        placeholder="Add new task"
      />
      <button onClick={props.addTask}>Add</button>
    </Fragment>
  );
};

export default InputField;
