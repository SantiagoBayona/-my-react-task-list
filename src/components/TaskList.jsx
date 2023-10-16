import Task from './Task';

const ListaDeTareas = () => {
    const tareas = [
        { id: 1, nombre: 'Buy a new gaming laptop' },
        { id: 2, nombre: 'Complete a previous task' },
        { id: 3, nombre: 'Create video for Youtube' },
        { id: 4, nombre: 'Create a new portfolio site'},
    ];

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                        <Task nombre={tarea.nombre} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaDeTareas;
