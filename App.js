import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

function App() {
    const [tasks, setTasks] = useState(() => {
        // Charger les tâches depuis le localStorage
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    // Enregistrer les tâches dans localStorage chaque fois qu'elles changent
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, completed: false }]);
    };

    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const toggleCompletion = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Liste de Tâches</h1>
            <TaskForm addTask={addTask} />
            <TaskList 
                tasks={tasks} 
                updateTask={updateTask} 
                deleteTask={deleteTask} 
                toggleCompletion={toggleCompletion} 
            />
        </div>
    );
}

export default App;
