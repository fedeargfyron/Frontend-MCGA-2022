import React, { useState } from 'react';

const Form = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title) return;
    
    const newTask = {
      title: title,
      completed: false,
      id: Math.floor(Math.random() * 100),
    };
    addTask(newTask);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New Task" value={title} onChange={(e) => handleChange(e)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;