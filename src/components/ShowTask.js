export const ShowTask = ({ task, addTask, setButton, setUpdateId }) => {
    const handleButton = (id) => () => {
      setButton("Update");
      setUpdateId(id);
    };
  
    const deleteTask = (id) => {
      // Filter out the task with the specified ID
      const updatedTaskList = task.filter((task) => task.id !== id);
      // Update the task list
      addTask(updatedTaskList);
    };
  
    const clearAllTasks = () => {
      // Set task list to an empty array
      addTask([]);
    };
  
    return (
      <section className="showTask">
        <div className="head">
          <div>
            <span className="title">Todo</span>
            <span className="count">{task.length}</span>
          </div>
          <button className="clearAll" onClick={clearAllTasks}>Clear All</button>
        </div>
        <ul>
          {task.map(({ name, time, id }) => (
            <li key={id}>
              <p>
                <span className="name">{name}</span>
                <span className="time">{time}</span>
              </p>
              <i onClick={handleButton(id)} className="bi bi-pencil-square"></i> {/* Pass a function reference */}
              <i onClick={() => deleteTask(id)} className="bi bi-trash"></i> {/* Pass a function reference */}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  