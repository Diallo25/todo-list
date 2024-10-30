import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description) {
            alert('Veuillez remplir tous les champs'); // Validation simple
            return;
        }
        const newTask = {
            id: Date.now(), // Utilisation de l'heure actuelle comme ID unique
            name,
            description,
            completed: false
        };
        addTask(newTask); // Appel de la fonction pour ajouter une tâche
        setName(''); // Réinitialiser le champ nom
        setDescription(''); // Réinitialiser le champ description
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nom de la tâche" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <textarea 
                placeholder="Description de la tâche" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button type="submit">Ajouter Tâche</button>
        </form>
    );
}

export default TaskForm;
