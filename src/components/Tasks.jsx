import React, { useState } from 'react';


const Task = ({ task, startDate, endDate, duration, status, assignedTo, onStatusChange }) => {
  const handleStatusChange = () => {
    onStatusChange(task.id, !task.completed);
  };

  return (
    <div className="task-item">
      <div className="task-details">
        <div className="task-name">
          <i className="fas fa-cog"></i> {task.name}
        </div>
        <div className="task-status">
          <span className={`status-indicator ${task.completed ? 'completed' : 'canceled'}`}>
            {task.completed ? 'Completed' : 'Canceled'}
          </span>
        </div>
      </div>
      <div className="task-metadata">
        <div className="task-dates">
          <div>Start Date: {startDate}</div>
          <div>End Date: {endDate}</div>
        </div>
        <div className="task-duration">{duration}</div>
        <div className="task-assigned-to">
          <i className="fas fa-user"></i> {assignedTo}
        </div>
      </div>
        <div className="task-status-toggle">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleStatusChange}
          />
        </div>
      
    </div>
  );
};

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Make an Automatic Payment System that enable the design',
      assignedTo: 'Ritanjo Valmata',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      duration: '00:30:00',
      completed: false,
    },
    {
      id: 2,
      name: 'Make an Automatic Payment System that enable the design',
      assignedTo: 'Hitali Spandana',
      startDate: '25/3/2023',
      endDate: '25/3/2023',
      duration: '00:30:00',
      completed: true,
    },
    {
        id: 3,
        name: 'Make an Automatic Payment System that enable the design',
        assignedTo: 'Hitali Spandana',
        startDate: '25/3/2023',
        endDate: '25/3/2023',
        duration: '00:30:00',
        completed: false,
      },
  ]);

  const handleStatusChange = (taskId, completed) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed } : task
      )
    );
  };

  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          startDate={task.startDate}
          endDate={task.endDate}
          duration={task.duration}
          status={task.completed ? 'Completed' : 'Canceled'}
          assignedTo={task.assignedTo}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default Tasks;