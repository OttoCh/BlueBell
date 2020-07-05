import React from 'react';
import './sidebarTaskButton.css';

function sidebarTaskButton(id) {
    const taskId = id
    return (
        <button id={taskId} className="sidebarTaskButtonBox" onClick={() => showTaskPage(id)}>
            <div className="taskButton">Task Name</div>
        </button>
    );
}

function showTaskPage(msg) {
    console.log(msg)
    
}

export default sidebarTaskButton;