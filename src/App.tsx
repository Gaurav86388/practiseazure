import { useState } from 'react';


interface Task{
  text: string
  completed: boolean
}
const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Add a task
  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue(''); // Clear the input field
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (index:number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Remove a task
  const removeTask = (index:number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1 className="title">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
            <button onClick={() => removeTask(index)} className="delete-button">
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
