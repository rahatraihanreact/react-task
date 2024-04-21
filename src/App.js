import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [task , addTask] = useState(JSON.parse(localStorage.getItem("task")) || []);
  const [button , setButton] = useState("Add");
  const [updateId, setUpdateId] = useState();

  useEffect(()=>{
    localStorage.setItem("task", JSON.stringify(task));
  },[task])
  
  


  
const updateClicked=(id)=>{
  setUpdateId(id);
  
}

  return (
    <div className="App">
      <Header />
      <AddTask  
      task={task} 
      addTask={addTask} 
      button={button}  
      setButton={setButton}
      updateId={updateId} 
      updateClicked={updateClicked}
       
       
        />
      <ShowTask  
      task={task} 
       setButton={setButton} 
       setUpdateId={setUpdateId}
        addTask={addTask}
       
       />
    </div>
  );
}

export default App;
