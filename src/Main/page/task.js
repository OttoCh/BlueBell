import React from 'react';
import './task.css';

class Task extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.taskName)
        this.state = {
            tick: props.tick,
            taskName: this.props.taskName
        };
    }
    
    render() {
        return(
            <div className="taskBulletBox">
                <input className="tickBox" type="checkbox" ></input>
                <input className="taskName taskInput" type="text" placeholder="Task Name" value={this.state.taskName}></input>
                <input className="taskDescription taskInput" type="text"  placeholder="Description"></input>
                <input className="taskResolution taskInput" type="text" placeholder="Resolution"></input>
                <input className="taskCreateTime taskTimeInput" type="text" disabled="true" placeholder="04-Jun-20 17:30"></input>
                <input className="taskResolutionTime taskTimeInput" type="text" disabled="true" placeholder="04-Jun-20 17:30"></input>
            </div>
        )
    }

}

export default Task;