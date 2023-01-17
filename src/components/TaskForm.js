import React, { useState } from 'react';
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4} from 'uuid';

function TaskForm(props) {

    const [input, setInput] = useState('');

    const saveInput = e => {
        setInput(e.target.value);
    };

    const sendTask = e => {
        e.preventDefault();
        
        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        };
        console.log(newTask);
        props.onSubmit(newTask);
    }

    return(
        <form className='task-form'
        onSubmit={sendTask}>
            <input className='add-task-input'
            type='text'
            placeholder='Write your task here'
            name='task-text'
            onChange={saveInput} />
            <button className='add-task-button' >
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;