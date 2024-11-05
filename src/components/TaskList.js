import React from 'react';

function TaskList({ tasks, deleteTask, toggleCompleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => toggleCompleteTask(task.id)}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.title}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
