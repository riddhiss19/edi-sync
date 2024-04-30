import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import Cookies from 'js-cookie';

const Task = ({ task, startDate, endDate, duration, status, assignedTo, onStatusChange }) => {
  const handleStatusChange = () => {
    // onStatusChange(task.id, !task.completed);
  };

  return (
    <div className="task-item">
      <div className="task-details">
        <i className="fa fa-tasks"></i>
        <div className="task-name">
          {task}
        </div>
        <div className="task-status">
          <span className={`status-indicator ${status ? 'completed' : 'canceled'}`}>
            {status}
          </span>
        </div>
      </div>
      <div className="task-metadata">
        <div className="task-dates">
          <div>Due Date: {endDate}</div>
        </div>
        <div className="task-assigned-to">
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

  const userId = Cookies.get("user_id")

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const data = await axios.get(`http://localhost:8080/getAllTasks?id=${userId}`)
    setTasks(data.data)
  }


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
          task={task.title}
          endDate={task.dueDate}
          status={task.completed ? 'Completed' : 'Canceled'}
          assignedTo={task.ownerId}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};



export default Tasks;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Task = ({ task, endDate, status, assignedTo, onStatusChange }) => {
//   // const handleStatusChange = () => {
//   //   onStatusChange(task.id, !task.completed);
//   // };

//   return (
//     <div className="task-item">
//       <div className="task-details">
//         <div className="task-name">
//           <i className="fas fa-cog"></i> {task}
//         </div>
//         <div className="task-status">
//           <span className={'canceled'}>
//             {'Canceled'}
//           </span>
//         </div>
//       </div>
//       <div className="task-metadata">
//         <div className="task-dates">
//           <div>End Date: {endDate}</div>
//         </div>
//         <div className="task-assigned-to">
//           <i className="fas fa-user"></i> {assignedTo}
//         </div>
//       </div>
//       <div className="task-status-toggle">
//         <input
//           type="checkbox"
//         />
//       </div>

//     </div>
//   );
// };

// const Tasks = ({ projectId }) => {


//   const [tasks, setTasks] = useState([])

//   useEffect(() => {
//     loadData()
//   }, [])

//   const loadData = async () => {
//     const data = await axios.get(`http://localhost:8080/getAllTasks?id=${projectId}`)
//     setTasks(data.data)
//   }

//   const handleStatusChange = (taskId, completed) => {
//     // setTasks((prevTasks) =>
//     //   prevTasks.map((task) =>
//     //     task.id === taskId ? { ...task, completed } : task
//     //   )
//     // );

//     console.log("completed");
//   };

//   return (
//     <div className="tasks-container">
//       {tasks.map((task) => (
//         <Task
//           key={task.id}
//           task={task.title}
//           endDate={task.dueDate}
//           status={task.status}
//           assignedTo={task.assignedTo}
//           onStatusChange={handleStatusChange}
//         />
//       ))}
//     </div>
//   );
// };

// export default Tasks;