import { useState, useEffect } from "react";

export const AddTask = ({ addTask, task, button, setButton, updateId }) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if button is "Update" and updateId is valid
    if (button === "Update" && updateId) {
      const taskToUpdate = task.find((t) => t.id === updateId);
      if (taskToUpdate) {
        setValue(taskToUpdate.name); // Set input value to the name of the task being updated
      }
    } else {
      setValue(""); // Reset input value if not updating
    }
  }, [button, updateId, task]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      setErrorMessage("Please enter a task"); // Show error message if input is empty
      return;
    }

    const date = new Date();

    if (button === "Update") {
      const updatedTaskIndex = task.findIndex((t) => t.id === updateId);
      if (updatedTaskIndex !== -1) {
        const updatedTask = {
          ...task[updatedTaskIndex],
          name: value,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        };
        const updatedTaskList = [...task];
        updatedTaskList[updatedTaskIndex] = updatedTask;
        addTask(updatedTaskList);
        setButton("Add");
        setErrorMessage(""); // Reset error message
      }
    } else {
      const newTask = {
        id: date.getTime(),
        name: value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };
      addTask([...task, newTask]);
      setErrorMessage(""); // Reset error message
    }

    setValue(""); // Reset input value after submission
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="task"
          id="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength="25"
          value={value}
        />
        <button type="submit">{button === "Update" ? "Update" : "Add"}</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>} {/* Show error message if present */}
    </section>
  );
};
