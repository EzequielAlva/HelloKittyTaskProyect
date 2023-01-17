import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../stylesheets/Task.css';

function Task({ id, text, completed, taskCompleted, deleteTask }){
    return(
        <div className={completed ? 'task-container completed' : 'task-container'} >
            <div 
            className='task'
            onClick={() => taskCompleted(id)}>
                {text}
            </div>
            <div
            onClick={() => deleteTask(id)}>
            <AiOutlineCloseCircle className='todo-delete-icon' />
            </div>
        </div>
    );
}

export default Task;