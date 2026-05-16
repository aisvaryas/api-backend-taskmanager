import { useEffect, useState } from 'react';

import {
    getAllTasks,
    deleteTask,
    updateTask
} from '../services/taskService';

function TaskList(){

    const [tasks, setTasks] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [editTask, setEditTask] = useState({
    id:'',
    title:'',
    description:'',
    priority:'',
    status:'',
    dueDate:''
});
const handleEditClick = (task) => {

    setEditTask(task);

    setShowModal(true);
};
const handleChange = (e) => {

    setEditTask({
        ...editTask,
        [e.target.name]: e.target.value
    });
};
    const fetchTasks = async() => {
        try{
            const data = await getAllTasks();
            setTasks(data);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleDelete = async(id) => {
        await deleteTask(id);
        fetchTasks();
    };

    const handleUpdate = async() => {

    await updateTask(
        editTask.id,
        editTask
    );

    setShowModal(false);

    fetchTasks();
};
    return(
        <div>
            <h2>Task List</h2>
            {
                tasks.map((task) => (
                    <div key={task.id} className='task-card'>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>{task.priority}</p>
                        <p>{task.status}</p>
                        <div className="task-buttons">
                        <button
                            onClick={() => handleDelete(task.id)}>                        
                            Delete
                        </button>
                        
                        <button
                            onClick={() => handleEditClick(task)}>                        
                            Edit
                        </button>
                        
                    </div>

                    </div>
                ))
            }
            {
                showModal && (

                    <div className="modal-overlay">

                        <div className="modal-box">

                            <h2>Edit Task</h2>

                            <input
                                type="text"
                                name="title"
                                value={editTask.title}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="description"
                                value={editTask.description}
                                onChange={handleChange}
                            />

                            <input
                                type="date"
                                name="dueDate"
                                value={editTask.dueDate}
                                onChange={handleChange}
                            />

                            <select
                                name="priority"
                                value={editTask.priority}
                                onChange={handleChange}
                            >
                                <option value="HIGH">HIGH</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="LOW">LOW</option>
                            </select>

                            <select
                                name="status"
                                value={editTask.status}
                                onChange={handleChange}
                            >
                                <option value="PENDING">PENDING</option>
                                <option value="IN_PROGRESS">IN_PROGRESS</option>
                                <option value="COMPLETED">COMPLETED</option>
                            </select>

                            <div className="task-buttons">

                                <button onClick={handleUpdate}>
                                    Save
                                </button>

                                <button
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>

                            </div>

                        </div>

                    </div>
                )
            }
        </div>
    );
}

export default TaskList;