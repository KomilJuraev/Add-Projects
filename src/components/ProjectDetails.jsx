import { useState, useRef } from "react"

import DeleteModal from "./DeleteModal";

export default function ProjectDetails({ projectInfo, onDelete }) {
    const taskRef = useRef();
    const dialog = useRef();
    const [tasks, setTasks] = useState([]);
    const [projectDelet, setProjectDelet] = useState(false);

    function handleAddTask() {
        const newTask = taskRef.current.value.trim();
        if (newTask) {
            setTasks((prevVal) => [
                ...prevVal,
                newTask
            ])
            taskRef.current.value = '';
        }
    }

    function handleDelete() {
        setProjectDelet(true);
        dialog.current.open();
    }

    function handleConfirmDelete() {
        onDelete(projectInfo.id);
        setProjectDelet(false);
    }

    function handleCancelDelete() {
        setProjectDelet(false);
    }

    return (
        <div className="main-page-div">
            {projectDelet && <DeleteModal
                ref={dialog}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />}
            <div className="top-container">
                <div className="project-info-section">
                    <div className="proj-title">
                        <h1>{projectInfo.title}</h1>
                    </div>
                    <div className="due-date-fields">
                        <p className="due-date">due date: </p>
                        <p className="due-date" >{projectInfo.dueDate}</p>
                    </div>
                    <p className="proj-description">{projectInfo.description}</p>
                </div>
                <div className="delete-section">
                    <button type="button" class="btn btn-secondary" onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <div className="add-task-section">
                <div className="add-task-label">
                    <label><p>Add Task</p></label>
                </div>
                <div className="add-task-inputs">
                    <input type="text" ref={taskRef} />
                    <button type="button" class="btn btn-primary" onClick={handleAddTask}>Add</button>
                </div>
                <div className="task-list">
                    <ul>
                        {tasks.length > 0 ? tasks.map((eachTask, index) => (
                            <li key={index}>
                                {eachTask}
                            </li>
                        )) : <p>No task, please add some tasks </p>}
                    </ul>
                </div>
            </div>
        </div>
    )
}