import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, updateTask, deleteTask, toggleCompletion }) {
    return (
        <ul className="task-list">
            {/* Parcours des tâches et affichage de chaque tâche dans un composant TaskItem */}
            {tasks.map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    updateTask={updateTask} 
                    deleteTask={deleteTask} 
                    toggleCompletion={toggleCompletion} 
                />
            ))}
        </ul>
    );
}

export default TaskList;
