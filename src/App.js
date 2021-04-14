import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Grocery",
      date: "01/01/2021",
      reminder: false,
    },
    {
      id: 2,
      text: "Car Wash",
      date: "01/02/2021",
      reminder: false,
    },
  ]);

  //DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
