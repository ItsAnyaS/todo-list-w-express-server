import { useState } from "react"

const TodoInput = ({ setTaskList }) => {
  const [task, setTask] = useState("");
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setTaskList((prev) => [...prev, task]);
        }}
      >
        <label htmlFor="">Add Todo</label>
        <input
          type="text"
          placeholder="Type item"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoInput