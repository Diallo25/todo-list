import React from 'react';

function TaskItem({ task, updateTask, deleteTask, toggleCompletion }) {
    const handleDelete = () => {
        deleteTask(task.id); // Supprimer la tâche
    };

    const handleToggle = () => {
        toggleCompletion(task.id); // Basculer l'état de complétion
    };

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div style={{ flexGrow: 1 }} onClick={handleToggle}>
                <strong>{task.name}</strong> - {task.description}
            </div>
            <button onClick={handleToggle} style={{ marginRight: '10px' }}>
                {task.completed ? 'Reprendre' : 'Terminer'}
            </button>
            <button onClick={handleDelete}>Supprimer</button>
        </li>
    );
}

export default TaskItem;