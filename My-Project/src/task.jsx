import React, { useState, useCallback, useMemo } from 'react';

function Taskss() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    if (task.trim() === '') return;
    setTasks(prevTasks => [ ...prevTasks, { id: Date.now(), content: task, status: 'Todo' }]);
    setTask(''); }, [task]);

  const changeStatus = useCallback((id, newStatus) => {
    setTasks(prevTasks =>  prevTasks.map(t => t.id === id? { ...t, status: newStatus }: t));
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks(prevTasks => prevTasks.filter(t => t.id !== id));
  }, []);

  const taskList = useMemo(() => (
    tasks.map(task => (
      <div key={task.id} className="task">
        <span>{task.content}</span>
        <span>{task.status}</span>
        {task.status === 'Todo' && (<button onClick={() => changeStatus(task.id, 'In Progress')}>In Progress</button>)}
        {task.status === 'In Progress' && (<button onClick={() => changeStatus(task.id, 'Complete')}>Complete</button>)}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    ))), [tasks, changeStatus, deleteTask]);

  return (
    <div className="App">
      <h4>Todo List</h4>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a new task" />
      <button onClick={addTask}>Add Task</button>
      <div className="task-list">
        {tasks.length > 0 && (
          <div className="task-header">
            <span>Task Name</span>
            <span>Status</span>
            <span>Actions</span>
          </div>
        )}
        {taskList}
      </div>
    </div>
  );
}

export default Taskss;
