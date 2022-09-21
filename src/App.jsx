import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Lista from './Components/Lista';

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Learn about React',
      completed: false,
      id: Math.floor(Math.random() * 100),
    },
  ]);

  const addTask = (task) => setTasks([...tasks, task]);

  const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) task.completed = !task.completed;
        return task;
      })
    );
  };

  return (
    <div className="App">
      <Form addTask={addTask} />
      <Lista tasks={tasks} removeTask={removeTask} completeTask={completeTask}/>
    </div>
  );
}

export default App;