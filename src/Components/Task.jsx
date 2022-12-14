import React from 'react';

const Task = ({ task, removeTask, completeTask }) => {
    return (
        <div className="task">
        {task ? (
            <>
            <input type="checkbox" onClick={() => completeTask(task.id)} />
            <h1 style={task.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {task.title.toUpperCase()}
            </h1>
            <button onClick={() => removeTask(task.id)}>Delete</button>
            </>
        ) : (
            ''
        )}
        </div>
    );
};

export default Task;