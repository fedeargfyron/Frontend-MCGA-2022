import React from 'react';

const Task = ({ task, removeTask, completeTask }) => {
    return (
        <div className="task-container">
        {task ? (
            <>
            <input type="checkbox" onClick={() => completeTask(task.id)} />
            <h2 style={task.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {task.title}
            </h2>
            <button onClick={() => removeTask(task.id)}>Delete</button>
            </>
        ) : (
            ''
        )}
        </div>
    );
};

export default Task;