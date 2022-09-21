import React from 'react';
import Task from './Task';

const Lista = ({ tasks, removeTask, completeTask }) => {
  return (
    <div className="task-container">
      {!tasks.length ? <p>No hay tareas pendientes</p> 
        : tasks.map(task => <Task task={task} key={task.id} removeTask={removeTask} completeTask={completeTask} />
      )}
    </div>
  );
};

export default Lista;